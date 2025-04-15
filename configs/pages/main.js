import { GLOBAL_CONFIG } from '~/configs/global'
import { SWIPER_DEFAULT_CONFIG, SWIPER_CREATIVE_CONFIG } from '~/configs/swiper'

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
  },
})

export const MAIN_STATISTICS_CONFIG = Object.freeze({
  desktopPadding: {
    top: '0px',
    bottom: '0px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '0px',
  },
  block_fields: {
    items: [
      {
        title: 'Больше 1000 +',
        text: 'Довольных клиентов',
        icon: 'IconSmiley',
        variant: 'outline',
      },
      {
        title: '95%',
        text: 'Выигранных дел',
        icon: 'IconTrophy',
        variant: 'outline',
      },
      {
        title: '10 лет',
        text: 'Опыт работы',
        icon: 'IconPlus',
        variant: 'outline',
      },
      {
        title: '24 часа в неделю',
        text: 'Поддержка клиентов',
        icon: 'IconService',
        variant: 'outline',
      },
      {
        title: 'Более 500 +',
        text: 'Судебных заседаний',
        icon: 'IconLaw',
        variant: 'outline',
      },
      {
        title: '15 мин',
        text: 'Среднее время ответа',
        icon: 'IconTimer',
        variant: 'outline',
      },
      {
        title: 'Более 50 +',
        text: 'Юристов в штате',
        icon: 'IconTeam',
        variant: 'outline',
      },
    ],
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
    image: '/images/shared/banners/operator.png',
    phone: {
      text: 'Звоните, мы работаем 24/7',
      value: GLOBAL_CONFIG.phone,
      description:
        'Профессиональные юристы готовы помочь вам решить любую правовую проблему',
      link: GLOBAL_CONFIG.phoneLink,
    },
    layers: true,
  },
})

export const MAIN_CONSULTATIONS_SLIDER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Последние консультации',
    cardType: 'cardWithLogo',
    swiperSettings: SWIPER_DEFAULT_CONFIG,
    cards: [
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',

        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',

        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',

        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
    ],
  },
})

export const MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Зачем нужны консультации юристов онлайн?',
    list: [
      {
        icon: 'IconCircle',
        title: 'Срочная юридическая помощь',
        text: 'Оперативная консультация при заключении рискованных сделок и оценке правомерности действий для владельцев бизнеса. Мы понимаем, что каждая минута промедления может привести к серьезным последствиям, поэтому обеспечиваем максимально быструю реакцию на ваш запрос.',
      },
      {
        icon: 'IconCircle',
        title: 'Экспертная оценка документов',
        text: 'Профессиональный анализ договоров, выявление рисков и неоднозначных формулировок до подписания важных документов. Наши специалисты тщательно изучат все условия и помогут избежать подводных камней в юридических документах, обеспечивая вашу безопасность.',
      },
      {
        icon: 'IconCircle',
        title: 'Актуальная правовая поддержка',
        text: 'Гарантированная помощь с учетом действующего законодательства, особенно в сделках с недвижимостью и важных бизнес-решениях. В отличие от устаревшей информации в интернете, мы предоставляем актуальные решения, основанные на последних изменениях в законодательстве.',
      },
    ],
  },
})

export const MAIN_REVIEWS_SLIDER_CONFIG = Object.freeze({
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
    swiperSettings: SWIPER_CREATIVE_CONFIG,
    cards: [
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        rating: 4.5,
        date: '17 мар. 2025',
        name: 'Иван Иванов',
        cardVariant: 'outline',
      },
    ],
  },
})

export const MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Консультация юриста - онлайн чат',
    list: [
      {
        icon: 'IconCircle',
        title: 'Бесплатная онлайн-консультация',
        text: 'Получите профессиональную юридическую консультацию в любое удобное для вас время, без необходимости регистрации и раскрытия личных данных. Наши специалисты оперативно ответят на ваши вопросы в чате, предоставят конкретные рекомендации и ссылки на актуальные законодательные акты. Первый ответ вы получите уже в течение часа, что поможет вам быстро разобраться в ситуации и избежать возможных ошибок при решении правовых вопросов. Современные технологии позволяют нам обеспечивать качественную юридическую поддержку в режиме онлайн.',
      },
      {
        icon: 'IconCircle',
        title: 'Персональная правовая поддержка',
        text: 'Разработаем грамотную стратегию защиты ваших прав и поможем с оформлением всех необходимых документов. Востребованность профессиональной юридической помощи растет с каждым днем, поэтому мы предлагаем комплексный подход к решению ваших задач. При необходимости более детального обсуждения вашей ситуации, вы можете заказать звонок для личной беседы с юристом и получить развернутую консультацию. Наши специалисты помогут вам избежать многочисленных проблем с оформлением документов, представлением интересов в суде и других ситуациях, требующих профессионального юридического сопровождения.',
      },
    ],
  },
})

export const MAIN_HOW_IT_WORKS_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '0px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '0px',
  },
  block_fields: {
    title: 'Как это работает?',
    subtitle: 'Мы предлагаем три основных способа получения юридической помощи',
    cardType: 'cardWithIndex',
    cards: [
      {
        title: 'Бесплатная онлайн-консультация',
        text: 'Получите профессиональную юридическую консультацию в любое удобное для вас время, без необходимости регистрации и раскрытия личных данных.',
        askQuestion: GLOBAL_CONFIG.askQuestion,
        buttonText: 'Задать вопрос',
        cardVariant: 'flat',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Бесплатная онлайн-консультация',
        text: 'Получите профессиональную юридическую консультацию в любое удобное для вас время, без необходимости регистрации и раскрытия личных данных.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Бесплатная онлайн-консультация',
        icon: 'IconCircle',
        text: 'Получите профессиональную юридическую консультацию в любое удобное для вас время, без необходимости регистрации и раскрытия личных данных.',
        cardVariant: 'outline',
      },
    ],
    cols: 3,
    gap: 'gap-4',
  },
})

export const MAIN_PHONE_BANNER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '16px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    image: '/images/shared/banners/operator.png',
    title: 'Задайте вопрос юристу онлайн',
    subtitle:
      'Опишите вашу ситуацию подробнее, чтобы юрист мог более детально в ней сориентироваться и дать на него квалифицированный ответ',
    formSettings: {
      buttonText: 'Задать вопрос',
      showDescription: true,
      body: ['phone'],
      description: GLOBAL_CONFIG.formDescriptionSecondary,
    },
  },
})

export const MAIN_SERVICES_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Услуги наших юристов',
    subtitle:
      'Юридические услуги от «100 Юристов» - это гарантированная помощь по защите прав в любой ситуации. С полным перечнем направлений работы ознакомьтесь в каталоге.',
    cardType: 'cardWithIndex',
    cards: [
      {
        title: 'Гражданские дела',
        text: 'Юрист поможет в решении вопросов с муниципальными, образовательными, имущественными и земельными спорами. В зависимости от ситуации возможно применение досудебного или судебного урегулирования.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Уголовные дела',
        text: 'Помощь опытного адвоката тем, кто стал обвиняемым, пострадавшим или свидетелем преступления. При необходимости будет разработана стратегия действий.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Семейные дела',
        text: 'Многие спорные ситуации требуют вмешательства юриста и адвоката. И в этом случае специалисты сервиса готовы прийти на помощь, предоставив полный объем услуг.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Наследство',
        text: 'Часто наследственные дела проходят с конфликтами. Особенно это касается ситуаций, когда умерший не оставил завещания. При необходимости готовы представить интересы клиента в суде.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Кредиты',
        text: 'Юрист проконсультирует при оформлении кредита или выгодных условий. При финансовом положении не позволяющем оплачивать уже имеющийся долг, поможем найти решение.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
      {
        title: 'Трудовые споры',
        text: 'Самое популярное направление, по которому часто обращаются за юридической консультацией. Поможем если ваши права как работника той или иной организации нарушены.',
        cardVariant: 'outline',
        textColor: 'neutral2',
        icon: 'IconCircle',
      },
    ],
    cols: 3,
    gap: 'gap-4',
  },
})

export const MAIN_OUR_LAWYERS_SLIDER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Наши юристы и адвокаты',
    link: '/',
    buttonRedirectText: 'Все юристы',
    buttonRedirectIcon: '',
    cardType: 'cardWithExtendedLink',
    swiperSettings: SWIPER_DEFAULT_CONFIG,
    cards: [
      {
        image: '/images/pages/main/management.png',
        title: 'Иванов Петр Сергеевич',
        subtitle: 'Адвокат, Москва',
        text: 'Уголовные дела, Семейные споры',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Смирнова Анна Владимировна',
        subtitle: 'Юрист, Санкт-Петербург',
        text: 'Недвижимость, Договоры',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Козлов Дмитрий Александрович',
        subtitle: 'Адвокат, Казань',
        text: 'Банкротство, Арбитраж',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Попова Елена Михайловна',
        subtitle: 'Юрист, Новосибирск',
        text: 'Трудовые споры, Защита прав',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Морозов Андрей Игоревич',
        subtitle: 'Адвокат, Екатеринбург',
        text: 'Корпоративное право, Налоги',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Соколова Мария Дмитриевна',
        subtitle: 'Юрист, Владивосток',
        text: 'Медицинские споры, Страхование',
        link: '/',
        cardVariant: 'outline',
      },
    ],
  },
})

export const MAIN_ACHIEVEMENTS_CONFIG = Object.freeze({
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
    image: '/images/pages/main/management.png',
    items: [
      {
        title: 'Больше 100 тыс',
        text: 'Успешных дел',
        icon: 'IconTrophy',
        variant: 'flat',
      },
      {
        title: '10 лет',
        text: 'Успешной работы',
        icon: 'IconPlus',
        variant: 'flat',
      },
      {
        title: 'Более 50 +',
        text: 'Опытных юристов',
        icon: 'IconTeam',
        variant: 'flat',
      },
    ],
  },
})

export const MAIN_REFERENCE_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Правовой справочник',
    cardType: 'cardWithList',
    compactMobile: true,
    maxHeight: 250,
    cards: [
      {
        title: 'А',
        list: [
          {
            title: 'Автокредит',
            link: '/articles/avtokredit',
          },
          {
            title: 'Авторское право',
            link: '/',
          },
          {
            title: 'Административное право',
            link: '/',
          },
        ],
      },
      {
        title: 'Б',
        list: [
          {
            title: 'Банкротство',
            link: '/',
          },
          {
            title: 'Бизнес-право',
            link: '/',
          },
          {
            title: 'Брачный договор',
            link: '/',
          },
        ],
      },
      {
        title: 'В',
        list: [
          {
            title: 'Военное право',
            link: '/',
          },
          {
            title: 'Вексельное право',
            link: '/',
          },
          {
            title: 'Взыскание долгов',
            link: '/',
          },
        ],
      },
      {
        title: 'Г',
        list: [
          {
            title: 'Гражданское право',
            link: '/',
          },
          {
            title: 'Государственные закупки',
            link: '/',
          },
          {
            title: 'Градостроительное право',
            link: '/',
          },
        ],
      },
      {
        title: 'Ж',
        list: [
          {
            title: 'Жилищное право',
            link: '/',
          },
          {
            title: 'Жалобы',
            link: '/',
          },
          {
            title: 'ЖКХ',
            link: '/',
          },
        ],
      },
      {
        title: 'З',
        list: [
          {
            title: 'Защита прав потребителей',
            link: '/',
          },
          {
            title: 'Земельное право',
            link: '/',
          },
          {
            title: 'Залоговое право',
            link: '/',
          },
        ],
      },
      {
        title: 'И',
        list: [
          {
            title: 'Ипотека',
            link: '/',
          },
          {
            title: 'Интеллектуальная собственность',
            link: '/',
          },
          {
            title: 'Иммиграционное право',
            link: '/',
          },
        ],
      },
      {
        title: 'К',
        list: [
          {
            title: 'Корпоративное право',
            link: '/',
          },
          {
            title: 'Кредиты',
            link: '/',
          },
          {
            title: 'Коммерческое право',
            link: '/',
          },
        ],
      },
      {
        title: 'М',
        list: [
          {
            title: 'Медицинское право',
            link: '/',
          },
          {
            title: 'Миграционное право',
            link: '/',
          },
          {
            title: 'Международное право',
            link: '/',
          },
        ],
      },
      {
        title: 'Н',
        list: [
          {
            title: 'Наследственное право',
            link: '/',
          },
          {
            title: 'Налоговое право',
            link: '/',
          },
          {
            title: 'Недвижимость',
            link: '/',
          },
        ],
      },
      {
        title: 'П',
        list: [
          {
            title: 'Патентное право',
            link: '/',
          },
          {
            title: 'Предпринимательское право',
            link: '/',
          },
          {
            title: 'Пенсионное право',
            link: '/',
          },
        ],
      },
      {
        title: 'С',
        list: [
          {
            title: 'Семейное право',
            link: '/',
          },
          {
            title: 'Страхование',
            link: '/',
          },
          {
            title: 'Соцобеспечение',
            link: '/',
          },
        ],
      },
      {
        title: 'Т',
        list: [
          {
            title: 'Таможенное право',
            link: '/',
          },
          {
            title: 'Трудовое право',
            link: '/',
          },
          {
            title: 'Транспортное право',
            link: '/',
          },
        ],
      },
      {
        title: 'У',
        list: [
          {
            title: 'Уголовное право',
            link: '/',
          },
          {
            title: 'Услуги',
            link: '/',
          },
          {
            title: 'Учредительные документы',
            link: '/',
          },
        ],
      },
      {
        title: 'Ю',
        list: [
          {
            title: 'Юридические услуги',
            link: '/',
          },
          {
            title: 'Юридическая экспертиза',
            link: '/',
          },
          {
            title: 'Юридические консультации',
            link: '/',
          },
        ],
      },
    ],
    cols: 4,
    gap: 'gap-6',
  },
})

export const MAIN_PHONE_BANNER2_CONFIG = Object.freeze({
  desktopPadding: {
    top: '16px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Заказать обратный звонок',
    phone: {
      text: 'Звоните, мы работаем 24/7',
      value: GLOBAL_CONFIG.phone,
      description: 'Позвоните нам',
      link: GLOBAL_CONFIG.phoneLink,
    },
    formSettings: {
      buttonText: 'Задать вопрос',
      showDescription: true,
      body: ['phone'],
      description: GLOBAL_CONFIG.formDescriptionSecondary,
    },
  },
})

export const MAIN_ADVANTAGES_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Преимущества помощи от «NN»',
    subtitle:
      'Онлайн-консультация на нашей платформе обладает множеством преимуществ',
    cardType: 'cardWithIcon',
    cards: [
      {
        title: 'Высокая скорость ответа',
        text: 'У сотрудников, работающих в формате онлайн, есть определённые графики, по которому они предоставляют ответы на ваши вопросы. Многие юридические фирмы делают такой выбор и предлагают клиентам удалённую форму консультирования. На нашем сайте задать вопрос и в кратчайшие сроки получить на него квалифицированный и понятный ответ, можно круглосуточно. Необходимо просто зарегистрироваться на траве и написать нам в офис.',
        icon: 'IconCircle',
        cardVariant: 'outline',
      },
      {
        title: 'Экономия',
        text: 'Онлайн-консультации практически все являются платными. Средняя стоимость обращения не требует больших вложений и достижима для многих клиентов. Наш сервис предлагает своим клиентам бесплатную помощь квалифицированных специалистов. Некоторые услуги предоставляются платно. Но стоимость онлайн а гораздо для каждого желающего.',
        icon: 'IconCircle',
        cardVariant: 'outline',
      },
      {
        title: 'Удобство',
        text: 'Получить консультацию можно в любой точке земли. При наличии интернета воспользоваться помощью юридического сервиса смогут абсолютно все люди, так и из крупных городов а также во время деловых и частных поездок. В некоторых случаях работа с клиентами с ограниченными возможностями.',
        icon: 'IconCircle',
        cardVariant: 'outline',
      },
      {
        title: 'Анонимность',
        text: 'Иногда крайне важна защита прав требуется в условиях жесткой конфиденциальности. В законе предусмотрено право сделать все со 100% гарантией не всегда означает безопасно. Общение-онлайн или по телефону обеспечивает вам эффективнее и безопаснее.',
        icon: 'IconCircle',
        cardVariant: 'outline',
      },
      {
        title: 'Компетентность',
        text: 'Многие бояться обращаться к правозащитникам через интернет, считая, что люди с низкой квалификацией за консультацией. Да, сайте юридических компаний, работает индивидуально. На нашем сайте, имеет реальный опыт и профессионализм, подкрепленный документально.',
        icon: 'IconCircle',
        cardVariant: 'outline',
      },
    ],
    cols: 2,
    gap: 'gap-4',
  },
})

export const MAIN_MATERIALS_GRID_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Новые правовые материалы',
    link: '/',
    buttonRedirectText: 'Все материалы',
    buttonRedirectIcon: '',
    cardType: 'cardWithLink',
    cards: [
      {
        image: '/images/pages/main/management.png',
        title: 'Аннулирование свидетельства о праве на наследство нотариусом',
        text: 'Как аннулируется свидетельство о праве на наследство? Процедура',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Оспаривание кадастровой стоимости недвижимости в 2025 году',
        text: 'Новый порядок оспаривания. Необходимые документы и сроки рассмотрения',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Изменения в процедуре банкротства физических лиц',
        text: 'Упрощенная процедура банкротства: кто может воспользоваться и какие документы потребуются',
        link: '/',
        cardVariant: 'outline',
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Новые правила регистрации недвижимости через нотариуса',
        text: 'Электронная регистрация сделок с недвижимостью: преимущества и особенности процедуры',
        link: '/',
        cardVariant: 'outline',
      },
    ],
    cols: 4,
    gap: 'gap-4',
  },
})

export const MAIN_QUESTIONS_CALLBACK_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Задайте вопрос юристу',
    cardType: 'cardWithExtendedLink',
    isBackground: true,
    isReverse: true,
    isResize: true,
    // isEquals: true,
    formSettings: {
      title: 'Задайте вопрос юристу онлайн',
      subtitle:
        'Опишите вашу ситуацию подробнее, чтобы юрист мог более детально в ней сориентироваться и дать на него квалифицированный ответ',
      buttonText: 'Задать вопрос',
      showDescription: true,
      body: ['name', 'phone', 'message'],
      description: GLOBAL_CONFIG.formDescriptionSecondary,
    },
    cards: [
      {
        image: '/images/pages/main/management.png',
        title: 'Иванов Петр Сергеевич',
        subtitle: 'Адвокат, Москва',
        text: 'Уголовные дела, Семейные споры',
        link: '/',
        cardVariant: 'outline',
        isCompact: true,
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Смирнова Анна Владимировна',
        subtitle: 'Юрист, Санкт-Петербург',
        text: 'Недвижимость, Договоры',
        link: '/',
        cardVariant: 'outline',
        isCompact: true,
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Козлов Дмитрий Александрович',
        subtitle: 'Адвокат, Казань',
        text: 'Банкротство, Арбитраж',
        link: '/',
        cardVariant: 'outline',
        isCompact: true,
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Попова Елена Михайловна',
        subtitle: 'Юрист, Новосибирск',
        text: 'Трудовые споры, Защита прав',
        link: '/',
        cardVariant: 'outline',
        isCompact: true,
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Морозов Андрей Игоревич',
        subtitle: 'Адвокат, Екатеринбург',
        text: 'Корпоративное право, Налоги',
        link: '/',
        cardVariant: 'outline',
        isCompact: true,
      },
      {
        image: '/images/pages/main/management.png',
        title: 'Соколова Мария Дмитриевна',
        subtitle: 'Юрист, Владивосток',
        text: 'Медицинские споры, Страхование',
        link: '/',
        cardVariant: 'outline',
        isCompact: true,
      },
    ],
  },
})

export const MAIN_FQA_COLLAPSE_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'Часто задаваемые вопросы',
    subtitle:
      'Вы можете задать вопрос бесплатно, используя форму на сайте или обратившись к нам по телефону',
    buttonText: 'Задать вопрос',
    askQuestion: GLOBAL_CONFIG.askQuestion,
    image: '/images/pages/main/management.png',
    items: [
      {
        title: 'Как задать вопрос бесплатно?',
        text: 'Бесплатное консультирование доступно через онлайн-форму на нашем сайте или по телефону горячей линии. На странице есть специальная форма, которую необходимо заполнить и отправить - мы работаем круглосуточно. На оформление заявления уходит не более 10 минут. Перед обращением рекомендуем тщательно продумать вопрос и максимально точно сформулировать его. Предоставление личных данных необязательно, мы гарантируем 100% конфиденциальность.',
      },
      {
        title: 'Сколько времени ждать ответа?',
        text: 'Первичный ответ на ваш вопрос вы получите в течение 60 минут после отправки заявки. Наши специалисты работают круглосуточно, чтобы обеспечить быструю обратную связь. В случае сложных юридических вопросов может потребоваться дополнительное время для подготовки развернутой консультации. При необходимости срочной консультации вы можете воспользоваться опцией приоритетного рассмотрения. Мы всегда стараемся предоставить максимально оперативный и качественный ответ.',
      },
      {
        title: 'Какие документы потребуются?',
        text: 'Для получения первичной консультации документы не требуются - достаточно описать вашу ситуацию. При необходимости углубленной проработки вопроса юрист может запросить копии relevant документов. Все документы передаются через защищенные каналы связи с соблюдением требований о конфиденциальности. Мы принимаем документы в любом удобном для вас формате: сканы, фотографии или электронные копии. Наши специалисты помогут определить, какие именно документы потребуются в вашем случае.',
      },
      {
        title: 'Как происходит консультация?',
        text: 'Консультация начинается с заполнения онлайн-формы, где вы описываете суть проблемы. После обработки запроса юрист связывается с вами выбранным способом: чат, телефон или видеосвязь. В ходе консультации специалист анализирует ситуацию и предлагает возможные решения. При необходимости составляется план дальнейших действий и оценивается перспектива дела. Вы получаете письменное заключение с основными выводами и рекомендациями.',
      },
      {
        title: 'Какие гарантии конфиденциальности?',
        text: 'Мы обеспечиваем полную конфиденциальность всей получаемой информации в соответствии с законодательством. Используются современные методы шифрования данных при передаче и хранении информации. Доступ к информации имеют только авторизованные сотрудники, связанные обязательством о неразглашении. Вся переписка и документация хранятся на защищенных серверах. По вашему запросу информация может быть полностью удалена из нашей базы.',
      },
      {
        title: 'Что делать после консультации?',
        text: 'После консультации вы получаете четкий план действий и рекомендации по вашей ситуации. При необходимости мы можем организовать дальнейшее юридическое сопровождение вашего дела. Все материалы консультации сохраняются в вашем личном кабинете для последующего доступа. Вы всегда можете задать дополнительные вопросы по итогам консультации. Наши специалисты остаются на связи и готовы оказать поддержку на всех этапах решения вашего вопроса.',
      },
    ],
  },
})

export const MAIN_ABOUT_US_LIST_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px',
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px',
  },
  block_fields: {
    title: 'О компании NN',
    list: [
      {
        icon: 'IconCircle',
        title: 'Опыт и развитие с 2008 года',
        text: 'Мы, IT-компания "NN", занимаемся разработкой интернет-проектов с 2008 года, а в сфере LegalTech — с 2012 года. NN.com — это онлайн-маркетплейс юридических услуг с огромной аудиторией. Мы соединяем людей по всей России, которым нужна юридическая помощь, с профессиональными юристами через удобный сервис взаимодействия.',
      },
      {
        icon: 'IconCircle',
        title: 'От CRM до масштабной платформы',
        text: 'Изначально проект был внутренним для нашей юридической компании и представлял собой CRM-систему, через которую мы взаимодействовали с нашими оффлайн-клиентами. Благодаря стремительному росту в 2014 году стало понятно, что эта система переросла в нечто более масштабное, так как мы начали работать удаленно с клиентами из различных регионов России без личной встречи.',
      },
      {
        icon: 'IconCircle',
        title: 'Лидеры рынка юридических услуг',
        text: 'Так появился проект "NN", и на сегодняшний день он является одним из крупнейших в юридической отрасли. Мы предоставляем доступ к нашей системе всем желающим юристам, которые ищут клиентов и готовы помогать им независимо от местонахождения обеих сторон.',
      },
    ],
  },
})
