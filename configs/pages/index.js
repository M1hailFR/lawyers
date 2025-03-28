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
        title: '1000+',
        text: 'Довольных клиентов',
        icon: 'IconChevron',
        variant: 'outline',
      },
      {
        title: '95%',
        text: 'Выигранных дел',
        icon: 'IconChevron',
        variant: 'outline',
      },
      {
        title: '10 лет',
        text: 'Опыт работы',
        icon: 'IconChevron',
        variant: 'outline',
      },
      {
        title: '24/7',
        text: 'Поддержка клиентов',
        icon: 'IconChevron',
        variant: 'outline',
      },
      {
        title: '500+',
        text: 'Судебных заседаний',
        icon: 'IconChevron',
        variant: 'outline',
      },
      {
        title: '15 мин',
        text: 'Среднее время ответа',
        icon: 'IconChevron',
        variant: 'outline',
      },
      {
        title: '50+',
        text: 'Юристов в штате',
        icon: 'IconChevron',
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
        icon: 'IconCross',
        title: 'Срочная юридическая помощь',
        text: 'Оперативная консультация при заключении рискованных сделок и оценке правомерности действий для владельцев бизнеса. Мы понимаем, что каждая минута промедления может привести к серьезным последствиям, поэтому обеспечиваем максимально быструю реакцию на ваш запрос.',
      },
      {
        icon: 'IconCross',
        title: 'Экспертная оценка документов',
        text: 'Профессиональный анализ договоров, выявление рисков и неоднозначных формулировок до подписания важных документов. Наши специалисты тщательно изучат все условия и помогут избежать подводных камней в юридических документах, обеспечивая вашу безопасность.',
      },
      {
        icon: 'IconCross',
        title: 'Актуальная правовая поддержка',
        text: 'Гарантированная помощь с учетом действующего законодательства, особенно в сделках с недвижимостью и важных бизнес-решениях. В отличие от устаревшей информации в интернете, мы предоставляем актуальные решения, основанные на последних изменениях в законодательстве.',
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
        icon: 'IconCross',
        title: 'Бесплатная онлайн-консультация',
        text: 'Получите профессиональную юридическую консультацию в любое удобное для вас время, без необходимости регистрации и раскрытия личных данных. Наши специалисты оперативно ответят на ваши вопросы в чате, предоставят конкретные рекомендации и ссылки на актуальные законодательные акты. Первый ответ вы получите уже в течение часа, что поможет вам быстро разобраться в ситуации и избежать возможных ошибок при решении правовых вопросов. Современные технологии позволяют нам обеспечивать качественную юридическую поддержку в режиме онлайн.',
      },
      {
        icon: 'IconCross',
        title: 'Персональная правовая поддержка',
        text: 'Разработаем грамотную стратегию защиты ваших прав и поможем с оформлением всех необходимых документов. Востребованность профессиональной юридической помощи растет с каждым днем, поэтому мы предлагаем комплексный подход к решению ваших задач. При необходимости более детального обсуждения вашей ситуации, вы можете заказать звонок для личной беседы с юристом и получить развернутую консультацию. Наши специалисты помогут вам избежать многочисленных проблем с оформлением документов, представлением интересов в суде и других ситуациях, требующих профессионального юридического сопровождения.',
      },
    ],
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
        title: '100 тыс',
        text: 'Успешных дел',
        icon: 'IconChevron',
        variant: 'flat',
      },
      {
        title: '10 лет',
        text: 'Успешной работы',
        icon: 'IconChevron',
        variant: 'flat',
      },
      {
        title: '50+ сотрудников',
        text: 'Опытных юристов',
        icon: 'IconChevron',
        variant: 'flat',
      },
    ],
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
        icon: 'IconCross',
        title: 'Опыт и развитие с 2008 года',
        text: 'Мы, IT-компания "NN", занимаемся разработкой интернет-проектов с 2008 года, а в сфере LegalTech — с 2012 года. NN.com — это онлайн-маркетплейс юридических услуг с огромной аудиторией. Мы соединяем людей по всей России, которым нужна юридическая помощь, с профессиональными юристами через удобный сервис взаимодействия.',
      },
      {
        icon: 'IconCross',
        title: 'От CRM до масштабной платформы',
        text: 'Изначально проект был внутренним для нашей юридической компании и представлял собой CRM-систему, через которую мы взаимодействовали с нашими оффлайн-клиентами. Благодаря стремительному росту в 2014 году стало понятно, что эта система переросла в нечто более масштабное, так как мы начали работать удаленно с клиентами из различных регионов России без личной встречи.',
      },
      {
        icon: 'IconCross',
        title: 'Лидеры рынка юридических услуг',
        text: 'Так появился проект "NN", и на сегодняшний день он является одним из крупнейших в юридической отрасли. Мы предоставляем доступ к нашей системе всем желающим юристам, которые ищут клиентов и готовы помогать им независимо от местонахождения обеих сторон.',
      },
    ],
  },
})

export const MAIN_CALLBACK_BANNER_CONFIG = Object.freeze({})
