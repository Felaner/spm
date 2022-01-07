(function (){
    const products = document.querySelectorAll('.product')
    const item1 = document.querySelectorAll('.draft')
    const item2 = document.getElementById('hover2')
    const item3 = document.getElementById('imgHover1')
    const item4 = document.getElementById('imgHover2')
    const item5 = document.getElementById('mainDraft')
    const item6 = document.getElementById('Dy')
    const item7 = document.getElementById('Ly')
    const object1 = document.getElementById('object1')

    products.forEach(function (el){
        const object = el.querySelector('object'),
            data = object.contentDocument,
            svg = data.querySelectorAll('.group'),
            draft = el.querySelector('.table');
        let Dy, L, S, I1, I2;
        if (draft.querySelector('.Dy')) {
            Dy = draft.querySelector('.Dy').querySelectorAll('td')
        }
        if (draft.querySelector('.L')) {
            L = draft.querySelector('.L').querySelectorAll('td')
        }
        if (draft.querySelector('.S')) {
            S = draft.querySelector('.S').querySelectorAll('td')
        }
        if (draft.querySelector('.I1')) {
            I1 = draft.querySelector('.I1').querySelectorAll('td')
        }
        if (draft.querySelector('.I2')) {
            I2 = draft.querySelector('.I2').querySelectorAll('td')
        }
        svg.forEach(function (el, i){
            const path = el.querySelectorAll('path')
            path.forEach(onePath => {
                onePath.style.transition = '0.4s'
                if (i === 0 && (draft.querySelector('.Dy') !== null)) {
                    Dy.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#000000'
                        })
                    })
                }
                if (i === 1 && (draft.querySelector('.L') !== null)) {
                    L.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#000000'
                        })
                    })
                }
                if (i === 2 && (draft.querySelector('.S') !== null)) {
                    S.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#000000'
                        })
                    })
                }
                if (i === 3 && (draft.querySelector('.I1') !== null)) {
                    I1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#000000'
                        })
                    })
                }
                if (i === 4 && (draft.querySelector('.I2') !== null)) {
                    I2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#000000'
                        })
                    })
                }
            })
        })
    })
})()