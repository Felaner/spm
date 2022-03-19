$(window).on('load', function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
});

(function (){
    let controller = new ScrollMagic.Controller()
    let scene;
    let draft = document.querySelectorAll('.product-draft');
    let gif = document.querySelectorAll('.product-gif');
    if ($(window).width() > 991) {
        gif.forEach(function (el, i) {
            let height = $(el).parent().height()
            $(el).addClass('animate__animated')
            $(el).addClass('animate__fadeOutLeft')
            scene = new ScrollMagic.Scene({
                triggerElement: el,
                duration: height,
                offset: -100
            })
                .on('start', (event) => {
                    if(event.scrollDirection === 'FORWARD') {
                        $(el).removeClass('animate__fadeOutLeft');
                        $(el).addClass('animate__fadeInLeft');
                    } else {
                        $(el).removeClass('animate__fadeInLeft');
                        $(el).addClass('animate__fadeOutLeft')
                    }
                })
                .on('end', (event) => {
                    if(event.scrollDirection === 'FORWARD') {
                        $(el).removeClass('animate__fadeInLeft');
                        $(el).addClass('animate__fadeOutLeft')
                    } else {
                        $(el).removeClass('animate__fadeOutLeft');
                        $(el).addClass('animate__fadeInLeft');
                    }
                })
                .addTo(controller)
        })

        draft.forEach(function (el, i) {
            let height = $(el).parent().height()
            $(el).addClass('animate__animated')
            $(el).addClass('animate__fadeOutRight')
            scene = new ScrollMagic.Scene({
                triggerElement: el,
                duration: height,
                offset: -100
            })
                .on('start', (event) => {
                    if(event.scrollDirection === 'FORWARD') {
                        $(el).removeClass('animate__fadeOutRight');
                        $(el).addClass('animate__fadeInRight');
                    } else {
                        $(el).removeClass('animate__fadeInRight');
                        $(el).addClass('animate__fadeOutRight')
                    }
                })
                .on('end', (event) => {
                    if(event.scrollDirection === 'FORWARD') {
                        $(el).removeClass('animate__fadeInRight');
                        $(el).addClass('animate__fadeOutRight')
                    } else {
                        $(el).removeClass('animate__fadeOutRight');
                        $(el).addClass('animate__fadeInRight');
                    }
                })
                .addTo(controller)
        })
    }

    const products = document.querySelectorAll('.product')

    products.forEach(function (el){
        const object = el.querySelector('object'),
            data = object.contentDocument,
            svg = data.querySelectorAll('.group'),
            draft = el.querySelector('.table');
        let A, D, Dy, Dh, D1, D2, d, dH, d1, d2, L, L1, L2, S, S1, S2, S3, S4, I, I1, I2, H, H1, H2, h, h1, h2, R, Deg, DN;
        if (draft.querySelector('.A')) {
            A = draft.querySelector('.A').querySelectorAll('td')
        }
        if (draft.querySelector('.D')) {
            D = draft.querySelector('.D').querySelectorAll('td')
        }
        if (draft.querySelector('.Dy')) {
            Dy = draft.querySelector('.Dy').querySelectorAll('td')
        }
        if (draft.querySelector('.Dh')) {
            Dh = draft.querySelector('.Dh').querySelectorAll('td')
        }
        if (draft.querySelector('.D1')) {
            D1 = draft.querySelector('.D1').querySelectorAll('td')
        }
        if (draft.querySelector('.D2')) {
            D2 = draft.querySelector('.D2').querySelectorAll('td')
        }
        if (draft.querySelector('.d')) {
            d = draft.querySelector('.d').querySelectorAll('td')
        }
        if (draft.querySelector('.dH')) {
            dH = draft.querySelector('.dH').querySelectorAll('td')
        }
        if (draft.querySelector('.d1')) {
            d1 = draft.querySelector('.d1').querySelectorAll('td')
        }
        if (draft.querySelector('.d2')) {
            d2 = draft.querySelector('.d2').querySelectorAll('td')
        }
        if (draft.querySelector('.L')) {
            L = draft.querySelector('.L').querySelectorAll('td')
        }
        if (draft.querySelector('.L1')) {
            L1 = draft.querySelector('.L1').querySelectorAll('td')
        }
        if (draft.querySelector('.L2')) {
            L2 = draft.querySelector('.L2').querySelectorAll('td')
        }
        if (draft.querySelector('.S')) {
            S = draft.querySelector('.S').querySelectorAll('td')
        }
        if (draft.querySelector('.S1')) {
            S1 = draft.querySelector('.S1').querySelectorAll('td')
        }
        if (draft.querySelector('.S2')) {
            S2 = draft.querySelector('.S2').querySelectorAll('td')
        }
        if (draft.querySelector('.S3')) {
            S3 = draft.querySelector('.S3').querySelectorAll('td')
        }
        if (draft.querySelector('.S4')) {
            S4 = draft.querySelector('.S4').querySelectorAll('td')
        }
        if (draft.querySelector('.I')) {
            I = draft.querySelector('.I').querySelectorAll('td')
        }
        if (draft.querySelector('.I1')) {
            I1 = draft.querySelector('.I1').querySelectorAll('td')
        }
        if (draft.querySelector('.I2')) {
            I2 = draft.querySelector('.I2').querySelectorAll('td')
        }
        if (draft.querySelector('.H')) {
            H = draft.querySelector('.H').querySelectorAll('td')
        }
        if (draft.querySelector('.H1')) {
            H1 = draft.querySelector('.H1').querySelectorAll('td')
        }
        if (draft.querySelector('.H2')) {
            H2 = draft.querySelector('.H2').querySelectorAll('td')
        }
        if (draft.querySelector('.h')) {
            h = draft.querySelector('.h').querySelectorAll('td')
        }
        if (draft.querySelector('.h1')) {
            h1 = draft.querySelector('.h1').querySelectorAll('td')
        }
        if (draft.querySelector('.h2')) {
            h2 = draft.querySelector('.h2').querySelectorAll('td')
        }
        if (draft.querySelector('.R')) {
            R = draft.querySelector('.R').querySelectorAll('td')
        }
        if (draft.querySelector('.Deg')) {
            Deg = draft.querySelector('.Deg').querySelectorAll('td')
        }
        if (draft.querySelector('.DN')) {
            DN = draft.querySelector('.DN').querySelectorAll('td')
        }
        svg.forEach(function (el, i){
            const path = el.querySelectorAll('path')
            path.forEach(onePath => {
                onePath.style.transition = '0.4s'
                if (i === 0 && (draft.querySelector('.A') !== null)) {
                    A.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 1 && (draft.querySelector('.D') !== null)) {
                    D.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 2 && (draft.querySelector('.Dy') !== null)) {
                    Dy.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 3 && (draft.querySelector('.Dh') !== null)) {
                    Dh.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 4 && (draft.querySelector('.D1') !== null)) {
                    D1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 5 && (draft.querySelector('.D2') !== null)) {
                    D2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 6 && (draft.querySelector('.d') !== null)) {
                    d.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 7 && (draft.querySelector('.dH') !== null)) {
                    dH.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 8 && (draft.querySelector('.d1') !== null)) {
                    d1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 9 && (draft.querySelector('.d2') !== null)) {
                    d2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 10 && (draft.querySelector('.L') !== null)) {
                    L.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 11 && (draft.querySelector('.L1') !== null)) {
                    L1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 12 && (draft.querySelector('.L2') !== null)) {
                    L2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 13 && (draft.querySelector('.S') !== null)) {
                    S.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 14 && (draft.querySelector('.S1') !== null)) {
                    S1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 15 && (draft.querySelector('.S2') !== null)) {
                    S2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 16 && (draft.querySelector('.S3') !== null)) {
                    S3.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 17 && (draft.querySelector('.S4') !== null)) {
                    S4.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 18 && (draft.querySelector('.I') !== null)) {
                    I.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 19 && (draft.querySelector('.I1') !== null)) {
                    I1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 20 && (draft.querySelector('.I2') !== null)) {
                    I2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 21 && (draft.querySelector('.H') !== null)) {
                    H.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 22 && (draft.querySelector('.H1') !== null)) {
                    H1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 23 && (draft.querySelector('.H2') !== null)) {
                    H2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 24 && (draft.querySelector('.h') !== null)) {
                    h.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 25 && (draft.querySelector('.h1') !== null)) {
                    h1.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 26 && (draft.querySelector('.h2') !== null)) {
                    h2.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 27 && (draft.querySelector('.R') !== null)) {
                    R.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 28 && (draft.querySelector('.Deg') !== null)) {
                    Deg.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
                if (i === 29 && (draft.querySelector('.DN') !== null)) {
                    DN.forEach(el => {
                        el.addEventListener('mouseenter', function () {
                            onePath.style.fill = '#ff0000'
                        })
                        el.addEventListener('mouseleave', function () {
                            onePath.style.fill = '#ffffff'
                        })
                    })
                }
            })
        })
    })

    products.forEach(el => {
        const input = el.querySelector('input[name=size]')
        el.querySelectorAll('tbody tr').forEach((el) => {
            el.querySelectorAll('td').forEach((el, indexTd) => {
                el.addEventListener('click', function () {
                    input.value = ''
                    el.parentNode.parentNode.querySelectorAll('td').forEach(el => {
                        el.style.backgroundColor = 'unset'
                    })
                    el.parentNode.parentNode.querySelectorAll("tr").forEach(el => {
                        if (el.querySelector(`td:nth-child(${indexTd + 2})`)) {
                            const scaleName = el.querySelector('th').innerHTML
                            const sizes = el.querySelector(`td:nth-child(${indexTd + 2})`)
                            sizes.style.backgroundColor = '#167AB6'
                            input.value += scaleName + ' : ' + sizes.innerHTML + '; '
                        }
                    })
                })
            })
        })
    })
})()