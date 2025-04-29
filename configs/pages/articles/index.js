import { GLOBAL_CONFIG } from '~/configs/global'

import {
  CATEGORIES_WITH_SIMBOL_A_CONFIG,
  CATEGORIES_WITH_SIMBOL_B_CONFIG,
} from './categories'

let cachedArticles = null

let tagsArticles = [
  { icon: 'IconCircle', title: 'Автокредит' },
  { icon: 'IconCircle', title: 'Ипотека' },
  { icon: 'IconCircle', title: 'Кредитные карты' },
  { icon: 'IconCircle', title: 'Потребительские кредиты' },
  { icon: 'IconCircle', title: 'Страхование' },
  { icon: 'IconCircle', title: 'Налоги' },
  { icon: 'IconCircle', title: 'Пенсия' },
  { icon: 'IconCircle', title: 'Социальные выплаты' },
  { icon: 'IconCircle', title: 'Трудовое право' },
  { icon: 'IconCircle', title: 'Недвижимость' },
  { icon: 'IconCircle', title: 'Банкротство' },
  { icon: 'IconCircle', title: 'Защита прав потребителей' },
  { icon: 'IconCircle', title: 'Семейное право' },
  { icon: 'IconCircle', title: 'Наследство' },
  { icon: 'IconCircle', title: 'Бизнес' },
  { icon: 'IconCircle', title: 'Миграционное право' },
  { icon: 'IconCircle', title: 'Административное право' },
  { icon: 'IconCircle', title: 'Уголовное право' },
  { icon: 'IconCircle', title: 'Земельное право' },
  { icon: 'IconCircle', title: 'Международное право' },
  { icon: 'IconCircle', title: 'Авторское право' },
  { icon: 'IconCircle', title: 'Военное право' },
  { icon: 'IconCircle', title: 'Экологическое право' },
  { icon: 'IconCircle', title: 'Таможенное право' },
  { icon: 'IconCircle', title: 'Конституционное право' },
]

const getAllArticles = () => {
  if (cachedArticles) return cachedArticles
  cachedArticles = ARTICLES_GRID_CONFIG.block_fields.cards
    .flatMap((letterGroup) => letterGroup.cards)
    .flatMap((card) => card.articles)

  return cachedArticles
}

export const ARTICLES_HERO_CONFIG = {
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: `<span class="text-primary">Статьи по </span> <br> <span>юридическим темам</span>`,
    subtitle: `<span class="text-primary">Нужна помощь?</span> Проконсультируйтесь с профессиональным юристом прямо сейчас`,
    buttonAskQuestion: 'Задать вопрос',
    buttonOrderCall: 'Заказать звонок',
    image: '/images/pages/main/management.png',
    phoneCall: {
      payload: {
        icon: '',
        title: 'Заявка на консультацию',
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

export const ARTICLES_SIMPLE_BANNER_CONFIG = Object.freeze({
  block_fields: {
    image: '/images/shared/banners/operator.png',
    title: 'Хотите узнать, как решить вашу проблему?',
    subtitle:
      'Обращайтесь в форму онлайн-вопроса или звоните по телефону горячей линии.',
    phone: {
      text: 'Позвоните нам',
      value: GLOBAL_CONFIG.phone,
      description: 'Звонок бесплатный 24/7',
      link: GLOBAL_CONFIG.phoneLink,
    },
  },
})

export const ARTICLES_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Статьи по юридическим темам',
    subtitle:
      'Специалисты нашего портала подготовили и продолжают подготавливать справочные материалы на различные темы и вопросы. Материалы предназначены специально для вас чтобы вы смогли найти ответы на сложившиеся вопросы, а также разобраться в ситуации.',
    cardType: 'cardWithGrid',
    cards: [
      {
        title: 'А',
        cardType: 'cardWithLink',
        cards: CATEGORIES_WITH_SIMBOL_A_CONFIG,
        cols: 4,
        gap: 'gap-4',
      },
      {
        title: 'Б',
        cardType: 'cardWithLink',
        cards: CATEGORIES_WITH_SIMBOL_B_CONFIG,
        cols: 4,
        gap: 'gap-4',
      },

      // Другие символы А-Я
    ],

    gap: 'gap-4',
  },
})

export const ARTICLES_MATERIALS_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '0px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '0px',
  },
  block_fields: {
    title: 'Новые статьи',
    subtitle:
      'Специалисты нашего портала подготовили и продолжают подготавливать справочные материалы на различные темы и вопросы. Материалы предназначены специально для вас чтобы вы смогли найти ответы на сложившиеся вопросы, а также разобраться в ситуации.',
    cardType: 'cardWithLink',
    maxHeight: 520,
    compact: true,
    searchSettings: {
      fieldsForSearch: ['title', 'subtitle', 'description', 'tags'],
      cards: getAllArticles(),
      tags: tagsArticles,
      placeholder: 'Поиск по статьям',
      buttonText: 'Найти',
      buttonIcon: 'IconCircle',
    },
    cols: 4,
    gap: 'gap-4',
  },
})

export const ARTICLES_CATEGORY_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Автокредит',
    subtitle:
      'Узнайте все об автокредитовании: от базовых условий до тонкостей оформления. Разберем типичные ошибки и поможем избежать подводных камней. Расскажем, как выбрать оптимальные условия и сэкономить на выплатах. Поделимся реальным опытом и практическими советами от экспертов.',
    cards: ARTICLES_GRID_CONFIG.block_fields.cards,
    cardType: 'cardWithLink',
    gap: 'gap-4',
    cols: 4,
  },
})

export const ARTICLES_SLUG_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    cards: ARTICLES_GRID_CONFIG.block_fields.cards,
    cardType: 'cardWithLink',
    gap: 'gap-4',
    cols: 4,
  },
})
