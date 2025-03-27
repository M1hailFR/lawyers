import { GLOBAL_CONFIG } from '~/configs/global'

export const MAIN_FORM_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    promptFormSettings: {
      title: `<span class="text-primary">Бесплатная </span> <br> юридическая <span class="text-primary">консультация </span> онлайн`,
      subtitle: `<span class="text-primary">Нужна помощь?</span> Проконсультируйтесь <br> с профессиональным юристом прямо сейчас`,
      buttonAskQuestion: 'Задать вопрос',
      buttonOrderCall: 'Заказать звонок',
      image: '/images/index/form-image.jpg',
      phoneCall: {
        payload: {
          icon: '',
          title: 'Заявка на звонок',
          subtitle:
            'Оставьте ваши контактные данные и мы перезвоним вам в течение 15 минут',
          buttonText: 'Заказать звонок',
          showDescription: true,
          body: ['name', 'phone'],
          description: GLOBAL_CONFIG.formDescriptionPrimary,
        },
      },
    },
  },
})

export const MAIN_INFO_BANNER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    smallImage: '/images/index/banners/banner4.png',
    phone: {
      text: 'Звоните, мы работаем 24/7',
      value: GLOBAL_CONFIG.phone,
      description: 'Профессиональные юристы готовы помочь вам решить любую правовую проблему',
      link: GLOBAL_CONFIG.phoneLink,
    },
    layers: true,
  },
})

export const MAIN_PHONE_BANNER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    smallImage: '/images/index/banners/banner4.png',
    title: 'Задайте вопрос юристу онлайн',
    subtitle: 'Опишите вашу ситуацию подробнее, чтобы юрист мог более детально в ней сориентироваться и дать на него квалифицированный ответ',
    formSettings: {
      buttonText: 'Задать вопрос',
      showDescription: true,
      body: ['phone'],
      description: GLOBAL_CONFIG.formDescriptionSecondary,
    },
  },
})

export const MAIN_ACHIEVEMENTS_BANNER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Почему стоит выбрать нас?',
    text: 'Срочно понадобились услуги профессионального юриста или адвоката? Решение есть! Наша горячая юридическая линия – возможность оперативно, абсолютно бесплатно получить ответ на любой вопрос',
    items: [
      {
        title: '1000+',
        text: 'Довольных клиентов',
        icon: 'IconChevron',
      },
      {
        title: '1000+',
        text: 'Довольных клиентов',
        icon: 'IconChevron',
      },
      {
        title: '1000+',
        text: 'Довольных клиентов',
        icon: 'IconChevron',
      },
    ],
    bigImage: '/images/index/banners/banner3.png',
    phone: {
      text: 'Звоните, мы работаем 24/7',
      value: GLOBAL_CONFIG.phone,
      description: 'Позвоните нам',
      link: GLOBAL_CONFIG.phoneLink,
    },
    phoneCall: {
      payload: {
        title: 'Закажите бесплатный звонок',
        subtitle:
          'На вопросы отвечают юристы со всей России. Среднее время ответа: 15 мину',
        buttonText: 'Заказать звонок',
        showDescription: true,
        body: ['phone'],
        description: GLOBAL_CONFIG.formDescriptionSecondary,
      },
    },
  },
})

export const MAIN_CALLBACK_BANNER_CONFIG = Object.freeze({})
