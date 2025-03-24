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
            link: '/contacts',
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
        link: '/contacts',
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
    mobileMenu: {
      payload: {
        icon: '',
        logo: '/images/logo.png',
        title: 'Меню',
        showDescription: false,
      },
    },
    phoneCall: {
      payload: {
        icon: '',
        title: 'Заявка на звонок',
        subtitle:
          'Оставьте ваши контактные данные и мы перезвоним вам в течение 15 минут',
        buttonText: 'Заказать звонок',
        showDescription: true,
        body: ['name', 'phone'],
      },
    },
    askQuestion: {
      payload: {
        icon: '',
        title: 'Задайте вопрос',
        subtitle:
          'Оставьте ваши контактные данные и мы ответим на ваш вопрос в течение 15 минут',
        buttonText: 'Задать вопрос',
        showDescription: true,
        body: ['name', 'phone', 'email', 'message'],
      },
    },
    auth: {
      payload: {
        title: 'Вход в систему',
        buttonText: 'Войти',
        showDescription: false,
      },
    },
    modalSettings: {
      description: `Отправляя форму, вы даете <mark><a href="/">согласие</a></mark> на обработку своих персональных данных и
                    соглашаетесь с
                    <mark><a href="/">политикой обработки персональных данных</a></mark>`,
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
