'use strict'

const {Router} = require('express');
const router = Router();
const fs = require('fs');
const mailer = require('../mailer/mail');

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Главная',
        isHome: true
    });
});

router.post('/', async (req, res) => {
    try {
        let Model = {},
            messageBody = '',
            contactsBody = '';
        Object.keys(Model).forEach((el) => {
            if (el === 'customer') {
                const contacts = Model[el]
                contactsBody += `<li>Имя: ${contacts['name']}<br>Номер телефона: ${contacts['phone']}<br>E-mail: ${contacts['email']}</li><br>`
            } else {
                messageBody += '<li>'
                Model[el].forEach((el, i) => {
                    if (i === 0) {
                        messageBody += `Товар: ${el}<br>`
                    } else if (i === 1) {
                        messageBody += `Количество: ${el} шт.<br>`
                    } else if (i === 2) {
                        messageBody += `Размер: ${el}<br>`
                    }
                })
                messageBody += '</li><br>'
            }
        })
        const message = {
            to: "kirill.deykun1@gmail.com",
            html: `<ul>` +
                '<h3>Заказчик</h3>' +
                `${contactsBody}` +
                '<h3>Список товаров</h3>' +
                `${messageBody}` +
                `</ul>`,
            subject: 'Новый заказ!'
        };
        mailer(message)
        return res.sendStatus(200);
    } catch(e) {
        console.log(e);
    }
})

module.exports = router;