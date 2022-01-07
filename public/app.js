(function (){
    const item1 = document.getElementById('hover1').querySelectorAll('td')
    const item2 = document.getElementById('hover2')
    const item3 = document.getElementById('imgHover1')
    const item4 = document.getElementById('imgHover2')
    const item5 = document.getElementById('mainDraft')
    const item6 = document.getElementById('Dy')
    const item7 = document.getElementById('Ly')
    const object1 = document.getElementById('object1')
    // const object2 = document.getElementById('object2')
    // const object3 = document.getElementById('object3')
    const item9 = document.getElementById('Ly2')

    item1.forEach(function (el){
        const data = object1.contentDocument,
            svg = data.getElementById('qwerty').querySelectorAll('path');
        svg.forEach(function (el){
            el.style.transition = '0.4s'
        })
        el.addEventListener('mouseenter', function (){
            svg.forEach(function (el){
                el.style.fill = '#ff0000'
            })
        })
        el.addEventListener('mouseleave', function (){
            svg.forEach(function (el){
                el.style.fill = '#000000'
            })
        })
    })
})()