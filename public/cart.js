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

function addToCart(el){
    el.disabled = true; // блокируем кнопку на время операции с корзиной
    const cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = el.parentNode.parentNode.parentNode.parentNode.parentNode, // родительский элемент кнопки "Добавить в корзину"
        itemId = parentBox.querySelector('input[type=hidden]').getAttribute('data-id'), // ID товараs
        itemTitle = parentBox.parentNode.parentNode.querySelector('.product-name').innerHTML, // название товара
        productCount = parseInt(el.parentNode.parentNode.querySelector('#count').value)
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][1] += productCount;
    } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, productCount];
    }
    if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
        el.disabled = false; // разблокируем кнопку после обновления LS
    }
    return false;
}

function showCart() {
    let cartData = getCartData()
    let productList = document.querySelector('#cart_content')
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }
    if (cartData !== null) {
        for(let items in cartData){
            let product = `<li class="position-relative mx-auto col-md-6 col-12 mb-2"><h5>Товар: ${cartData[items][0]}</h5><br>` +
                `<div class="row"><div class="col-12">Количество: <input name="productCount" type="number" id="productCount" class="form-control" value="${cartData[items][1]}"></div>` +
                '<div class="col-12"><label for="productSize">Какой размер вам нужен?</label>' +
                '<input name="productSize" type="text" id="productSize" class="form-control"></div></div>' +
                `<div class="product-divider"></div><a class="delete-product" data-id="${items}" onclick="deleteCartItem(this)">&times;</a><br></li>`
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

function recaptchaCallback() {
    $('#cartBuy').removeAttr('disabled');
};

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

    if(web_storage()){
        $('.cartBuy').on('click', el => {
            addToCart(el.target)
            fadeAddSuccess('Товар добавлен в корзину')
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
                        let size = el.querySelector('#productSize').value
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