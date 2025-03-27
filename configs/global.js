export const GLOBAL_CONFIG = Object.freeze({
  logo: '/images/logo.png',
  phone: ' + 7 555 444-33-22',
  phoneLink: 'tel:+75554443322',
  email: 'info@mail.ru',
  emailLink: 'mailto:info@mail.ru',
  socials: [
    {
      name: 'Telegram',
      link: 'https://t.me/jurist_bot',
    },
    {
      name: 'Whatsapp',
      link: 'https://wa.me/79999999999',
    },
    {
      name: 'Viber',
      link: 'https://viber.me/jurist_bot',
    },
  ],
  contacts: [
    {
      icon: 'IconPhone',
      name: 'Телефон',
      value: ' + 7 555 444-33-22',
      link: 'tel:+75554443322',
    },
    {
      icon: 'IconMail',
      name: 'Email',
      value: 'info@mail.ru',
      link: 'mailto:info@mail.ru',
    },
    {
      icon: 'IconGeo',
      name: 'Адрес',
      value: 'г. Москва, ул. Ленина, 1',
      link: 'https://yandex.ru/maps/1/moscow/?ll=37.622504%2C55.753960&z=17',
    },
  ],
  phoneCall: {
    payload: {
      icon: '',
      title: 'Заявка на звонок',
      subtitle:
        'Оставьте ваши контактные данные и мы перезвоним вам в течение 15 минут',
      buttonText: 'Заказать звонок',
      showDescription: true,
      body: ['name', 'phone'],
      description: `Отправляя форму, вы даете <mark class="primary"><a href="/">согласие</a></mark> на обработку своих персональных данных и
                    соглашаетесь с
                    <mark class="primary"><a href="/">политикой обработки персональных данных</a></mark>`,
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
      description: `Отправляя форму, вы даете <mark class="primary"><a href="/">согласие</a></mark> на обработку своих персональных данных и
                    соглашаетесь с
                    <mark class="primary"><a href="/">политикой обработки персональных данных</a></mark>`,
    },
  },
  formDescriptionPrimary: `Отправляя форму, вы даете <mark class="primary"><a href="/">согласие</a></mark> на обработку своих персональных данных и
                    соглашаетесь с
                    <mark class="primary"><a href="/">политикой обработки персональных данных</a></mark>`,
  formDescriptionSecondary: `Отправляя форму, вы даете <mark class="secondary"><a href="/">согласие</a></mark> на обработку своих персональных данных и
                    соглашаетесь с
                    <mark class="secondary"><a href="/">политикой обработки персональных данных</a></mark>`,
  auth: {
    payload: {
      title: 'Вход в систему',
      buttonText: 'Войти',
      showDescription: false,
    },
  },
  headerMenu: [
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
  footerMenu: [
    {
      text: 'Компания',
      childs: [
        {
          text: 'О проекте',
          link: '/',
        },
        {
          text: 'Контакты',
          link: '/',
        },
        {
          text: 'Новости',
          link: '/',
        },
        {
          text: 'Статьи',
          link: '/',
        },
        {
          text: 'Архиви',
          link: '/',
        },
        {
          text: 'Отзывы',
          link: '/',
        },
      ],
    },
    {
      text: 'Услуги',
      childs: [
        {
          text: 'Юристы',
          link: '/',
        },
        {
          text: 'Горячая линия',
          link: '/',
        },
        {
          text: 'Консультация',
          link: '/',
        },
        {
          text: 'Задать вопрос',
          link: '/',
        },
        {
          text: 'Юридические услуги',
          link: '/',
        },
        {
          text: 'Цены',
          link: '/',
        },
      ],
    },
    {
      text: 'Принимаем к оплате',
      icons: ['IconMir', 'IconMasterCard', 'IconSbp'],
      childs: [
        {
          text: 'Юридические заявки',
          link: '/',
        },
        {
          text: 'Вебмастерам',
          link: '/',
        },
        {
          text: 'Регистрация на сайте',
          link: '/',
        },
        {
          text: 'Пользовательское соглашение',
          link: '/',
        },
      ],
    },
  ],
})
