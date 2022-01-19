function web_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(el){
    localStorage.setItem('cart', JSON.stringify(el));
    return false;
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(el){
    let result = true
    const productSize = el.parentNode.parentNode.querySelector('#size').value;
    if (productSize === '') {
        result = false
    }
    if (result === false) {
        fadeAddSuccess('Выберите размер')
        return false
    } else {
        el.disabled = true; // блокируем кнопку на время операции с корзиной
        const cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
            parentBox = el.parentNode.parentNode.parentNode.parentNode.parentNode, // родительский элемент кнопки "Добавить в корзину"
            itemId = parentBox.querySelector('input[type=hidden]').getAttribute('data-id'), // ID товара
            itemTitle = parentBox.parentNode.parentNode.querySelector('.product-name').innerHTML, // название товара
            productCount = parseInt(el.parentNode.parentNode.querySelector('#count').value)
        if (cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
            let difSizes = getRandomInRange(0, 5000) + itemId
            cartData[difSizes] = [itemTitle, productCount, productSize];
        } else { // если товара в корзине еще нет, то добавляем в объект
            cartData[itemId] = [itemTitle, productCount, productSize];
        }
        if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
            el.disabled = false; // разблокируем кнопку после обновления LS
        }
        countCart()
        fadeAddSuccess('Товар добавлен в корзину')
        return false;
    }
}

function showCart() {
    let cartData = getCartData()
    let productList = document.querySelector('#cart_content')
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }
    if (cartData !== null) {
        for(let items in cartData){
            let product =
                '<li class="position-relative mx-auto col-md-6 col-12 mb-2">' +
                    `<h5>Товар: ${cartData[items][0]}</h5>` +
                    `<a class="delete-product" data-id="${items}" onclick="deleteCartItem(this)"></a><br>` +
                    '<div class="row">' +
                        '<div class="col-12">' +
                            `Размер: <p id="cartProductSize">${cartData[items][2]}</p>` +
                        '</div>' +
                        '<div class="col-12">' +
                            'Количество: ' +
                            `<input name="productCount" type="number" id="productCount" class="form-control required" value="${cartData[items][1]}">` +
                        '</div>' +
                    '</div>' +
                    '<div class="product-divider"></div>' +
                '</li>'
            productList.insertAdjacentHTML('beforeend', product)
        }
    }
    return false;
}

function deleteCartItem(el) {
    const id = el.getAttribute("data-id");
    const cartData = getCartData()
    delete cartData[id]
    setCartData(cartData)
    countCart()
    el.parentNode.remove()
    if (Object.keys(cartData).length === 0) {
        localStorage.removeItem('cart');
    }
}

function clearCart() {
    let productList = document.querySelector('#cart_content')
    let child = productList.lastElementChild
    while (child) {
        productList.removeChild(child);
        child = productList.lastElementChild;
    }
    localStorage.removeItem('cart');
}

function fadeAddSuccess(text) {
    const box = $('.add-success');
    box[0].innerHTML = `<p>${text}</p>`
    box.removeClass('animate__slideOutUp').css('display', 'block').addClass('animate__slideInDown');
    setTimeout(function () {
        box.removeClass('animate__slideInDown').addClass('animate__slideOutUp')
        setTimeout(function () {
            box.css('display', 'none')
        }, 1200)
    }, 5000)
}

function clearForm() {
    document.querySelectorAll('.modal-body input').forEach(el => {
        el.value = ''
    })
    document.querySelector('button[aria-label="Close"]').click()
}

function countCart() {
    const count = localStorage.getItem('cart')
    if (count !== null) {
        $('#open-cart p')[0].innerHTML = Object.keys(JSON.parse(localStorage.getItem('cart'))).length;
    } else {
        $('#open-cart p')[0].innerHTML = '0'
    }
}

let checkCaptch = false;
function verifyCallback(response) {
    if (response === "") {
        checkCaptch = false;
    }
    else {
        checkCaptch = true;
    }
};

$(function () {

    countCart()
    if(web_storage()){
        $('.cartBuy').on('click', el => {
            addToCart(el.target)
        });

        $('.open-cart').on('click', () => {
            showCart()
        })
    } else{
        alert('В данном браузере нет поддержки localStorage')
    }

    $("#submitForm").on('submit', function (e) {
        let result = true
        if (!document.querySelector('#cart_content').childNodes.length) {
            fadeAddSuccess('Добавьте товары в корзину!')
            return false
        } else {
            $("input.required").each(function (){
                if ($(this).attr('type') === 'email') {
                    let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if ($(this).val() === '' || regEmail.test($(this).val()) === false) {
                        $(this).focus().addClass('error-input');
                        return result = false;
                    } else {
                        $(this).removeClass('error-input');
                    }
                } else if ($(this).attr('name') === 'phone') {
                    let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
                    if ($(this).val() === '' || regPhone.test($(this).val()) === false) {
                        $(this).focus().addClass('error-input');
                        return result = false;
                    } else {
                        $(this).removeClass('error-input');
                    }
                } else {
                    if ($(this).val() === '') {
                        $(this).focus().addClass('error-input');
                        return result = false;
                    }
                    if ($(this).val() !== '') {
                        $(this).removeClass('error-input');
                    }
                }
            });
            if (result === false) {
                return false
            } else {
                if (checkCaptch && grecaptcha.getResponse() !== "") {
                    let contacts = {
                        name: document.querySelector('#cartInputName').value,
                        phone: document.querySelector('#cartInputPhone').value,
                        email: document.querySelector('#cartInputEmail').value
                    }
                    let products = {}
                    products['customer'] = contacts
                    products['g-recaptcha-response'] = grecaptcha.getResponse()
                    document.querySelectorAll('#cart_content li').forEach((el, i) => {
                        let name = el.querySelector('h5').innerText
                        let count = el.querySelector('#productCount').value
                        let size = el.querySelector('#cartProductSize').innerText
                        products[i] = [name, count, size]
                    })
                    $.ajax({
                        type: 'POST',
                        url: "/",
                        data: products,
                        error: function(jqXHR, textStatus, err) {
                            grecaptcha.reset();
                            fadeAddSuccess('Ошибка капчи')
                        },
                        beforeSend: function() {
                            console.log('loading')
                        },
                        success: function(data) {
                            grecaptcha.reset();
                            clearCart()
                            countCart()
                            clearForm()
                            fadeAddSuccess('Заказ отправлен')
                        }
                    })
                    e.preventDefault();
                    return false;
                } else {
                    fadeAddSuccess('Подтвердите, что вы не робот')
                    return false
                }
            }
        }
    })
})