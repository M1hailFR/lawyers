import { GLOBAL_CONFIG } from '~/configs/global'

export const HEADER_DEFAULT_CONFIG = Object.freeze({
  block_fields: {
    logo: GLOBAL_CONFIG.logo,
    menu: GLOBAL_CONFIG.headerMenu,
    phone: GLOBAL_CONFIG.phone,
    email: GLOBAL_CONFIG.email,
    socials: GLOBAL_CONFIG.socials,
    phoneCall: GLOBAL_CONFIG.phoneCall,
    askQuestion: GLOBAL_CONFIG.askQuestion,
    auth: GLOBAL_CONFIG.auth,

    mobileMenu: {
      payload: {
        icon: '',
        logo: GLOBAL_CONFIG.logo,
        title: 'Меню',
        showDescription: false,
      },
    },
  },
})

export const FOOTER_DEFAULT_CONFIG = Object.freeze({
  block_fields: {
    logo: GLOBAL_CONFIG.logo,
    menu: GLOBAL_CONFIG.footerMenu,
    socials: GLOBAL_CONFIG.socials,
    contacts: GLOBAL_CONFIG.contacts,
    promptFormSettings: {
      title: `<span class="text-primary">Нужна помощь?</span>
      Проконсультируйтесь <br> с профессиональным юристом прямо сейчас`,
      buttonAskQuestion: 'Задать вопрос',
      buttonOrderCall: 'Заказать звонок',
      phoneCall: GLOBAL_CONFIG.phoneCall,
    },

    text: `Все права защищены. 2025. Вы даете <mark><a href="/">согласие</a></mark> на обработку своих персональных данных и
    соглашаетесь с <mark><a href="/">политикой обработки персональных данных</a></mark>`,
  },
})
