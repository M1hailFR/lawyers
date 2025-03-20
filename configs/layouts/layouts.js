export const HEADER_DEFAULT_CONFIG = Object.freeze({
  block_fields: {
    logo: '/images/logo.png',
    menu: [
      {
        text: 'Услуги',
        childs: [
          {
            text: 'О компании',
            link: '/',
          },
          {
            text: 'Блог',
            link: '/',
          },
          {
            text: 'Отзывы',
            link: '/',
          },
          {
            text: 'Контакты',
            link: '/',
          },
        ],
      },
      {
        text: 'О компании',
        link: '/',
      },
      {
        text: 'Блог',
        link: '/',
      },
      {
        text: 'Отзывы',
        link: '/',
      },
      {
        text: 'Контакты',
        link: '/',
      },
    ],
    phone: ' + 7 555 444-33-22',
    email: 'info@mail.ru',
    socials: [
      {
        name: 'Telegram',
        link: '/',
      },
      {
        name: 'Whatsapp',
        link: '/',
      },
      {
        name: 'Viber',
        link: '/',
      },
    ],
    buttonText: 'Получить консультацию',
    formSettings: {
      title: 'Заявка на консультацию',
      subtitle: 'Заполните форму ниже. Мы ответим вам в течение N минут',
      buttonText: 'Отправить заявку',
      description: `Отправляя форму, вы даете <a href="/" class="text-brand-1">согласие</a> на обработку своих персональных данных и
                    соглашаетесь с
                    <a href="/" class="text-brand-1">политикой обработки персональных данных</a>`,
    },
  },
})

export const FOOTER_DEFAULT_CONFIG = Object.freeze({
  block_fields: {
    offers: [
      {
        text: 'Договор-оферта',
        link: '/about-company',
      },
      {
        text: 'Лицензия',
        link: 'https://google.com',
      },
      {
        text: 'Тарифы',
        link: '',
      },
    ],
  },
})
