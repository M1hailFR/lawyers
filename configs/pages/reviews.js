import { GLOBAL_CONFIG } from '~/configs/global'

export const REVIEWS_HERO_CONFIG = {
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: `<span class="text-primary">Отзывы </span> <br> наших клиентов`,
    subtitle: `<span class="text-primary">Нужна помощь?</span> Проконсультируйтесь с профессиональным юристом прямо сейчас`,
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

export const REVIEWS_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Отзывы наших клиентов',
    cardType: 'cardWithLogo',
    cards: [
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',

      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
      },
    ],
    cols: 3,
    gap: 'gap-4',
  },
})