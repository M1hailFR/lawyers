import { GLOBAL_CONFIG } from '~/configs/global'

export const MAIN_PRICE_HERO_CONFIG = {
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: `<span class="text-primary">Цены </span> на <br> юридические <span class="text-primary">услуги</span>`,
    subtitle: `<span class="text-primary">Нужна помощь?</span> Проконсультируйтесь с профессиональным юристом по любым правовым вопросам`,
    buttonAskQuestion: 'Задать вопрос',
    buttonOrderCall: 'Заказать звонок',
    image: '/images/pages/main/management.png',
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
}
