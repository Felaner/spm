'use strict'

const {Router} = require('express');
const router = Router();
const mailer = require('../mailer/mail');
const request = require('request')
const {SECRET_KEY, SITE_KEY, EMAIL_TO} = require('../keys')

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Главная',
        isHome: true,
        sitekey: SITE_KEY
    });
});

router.post('/', async (req, res) => {
    if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
    {
        return res.sendStatus(501);
    }
    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET_KEY + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    request(verificationURL,function(error,response,body) {
        body = JSON.parse(body);
        if(body.success !== undefined && !body.success) {
            return res.sendStatus(501);
        }
        try {
            let Model = req.body,
                messageBody = '',
                contactsBody = '';
            Object.keys(Model).forEach((el) => {
                if (el === 'customer') {
                    const contacts = Model[el]
                    contactsBody += `<li>Имя: ${contacts['name']}<br>Номер телефона: ${contacts['phone']}<br>E-mail: ${contacts['email']}<br>Комментарий: ${contacts['comment']}</li><br>`
                } else if (el !== 'g-recaptcha-response') {
                    messageBody += '<li>'
                    Model[el].forEach((el, i) => {
                        if (i === 0) {
                            messageBody += `${el}<br>`
                        } else if (i === 1) {
                            messageBody += `Покрытие: ${el}<br>`
                        } else if (i === 2) {
                            messageBody += `Количество: ${el} шт.<br>`
                        } else if (i === 3) {
                            messageBody += `Размер: ${el}<br>`
                        }
                    })
                    messageBody += '</li><br>'
                }
            })
            const message = {
                to: EMAIL_TO,
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
    });
})

module.exports = router;