import { GLOBAL_CONFIG } from '~/configs/global'

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
        cards: [
          {
            slug: 'avtokredit',
            title: 'Автокредит',
            text: 'Статьи об автокредитовании',
            image: '/images/pages/main/management.png',
            cardVariant: 'outline',
            link: '/articles/avtokredit',
            articles: [
              {
                slug: 'mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                title: 'Могут ли приставы забрать автомобиль за долги?',
                subtitle: 'Разбираемся в правах приставов и должников',
                text: 'В ситуации с долгами многие автовладельцы задаются вопросом: могут ли судебные приставы забрать их автомобиль? Эта статья поможет разобраться в правах и обязанностях всех участников процесса, а также расскажет о законных способах защиты своего имущества.',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                cardVariant: 'outline',
                tags: [
                  'Автокредит',
                  'Автомобиль',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Введение',
                    subtitle: 'Права приставов и должников',
                    description:
                      'Разбираемся в законодательстве и правах всех участников процесса',
                    explanation:
                      'Судебные приставы имеют право накладывать арест на имущество должника, включая автомобиль, но это право ограничено законом. Важно понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Знание своих прав и обязанностей поможет избежать незаконных действий со стороны приставов и защитить свое имущество.',
                    hash: '#introduction',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Законные основания для изъятия автомобиля',
                        text: 'Судебные приставы могут забрать автомобиль должника только на основании исполнительного листа, выданного судом. Этот документ должен содержать четкое указание на возможность ареста и изъятия транспортного средства. Важно отметить, что приставы не имеют права самостоятельно определять, какое именно имущество подлежит изъятию – это должно быть указано в исполнительном листе. Если в документе не указано конкретно транспортное средство, а есть только общая формулировка об аресте имущества, то приставы должны сначала провести опись имущества и только потом принимать решение об изъятии. Кроме того, должник имеет право указать, какое именно имущество он готов передать для погашения долга, и приставы обязаны это учитывать.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Какие автомобили защищены от изъятия',
                        text: 'Законом установлен перечень автомобилей, которые не могут быть изъяты приставами. К ним относятся автомобили, необходимые должнику для работы, если это его основной источник дохода. Например, если должник работает таксистом или курьером, и автомобиль является его рабочим инструментом. Также защищены от изъятия автомобили, которые используются для перевозки инвалидов или других членов семьи с ограниченными возможностями. Важно, что должник должен доказать, что автомобиль действительно необходим для этих целей, предоставив соответствующие документы. Если автомобиль является единственным средством передвижения для должника и его семьи, проживающих в местности с неразвитым общественным транспортом, это также может быть основанием для защиты от изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Процедура изъятия автомобиля приставами',
                        text: 'Процедура изъятия автомобиля приставами строго регламентирована законом и состоит из нескольких этапов. Сначала приставы должны уведомить должника о начале исполнительного производства, вручив ему постановление. Затем они имеют право прийти по месту жительства должника или месту нахождения автомобиля для описи имущества. При этом приставы обязаны составить акт описи, в котором должны быть указаны все характеристики автомобиля, включая марку, модель, год выпуска, VIN-номер и другие идентифицирующие признаки. Должник имеет право присутствовать при описи и вносить замечания в акт. После описи приставы могут наложить арест на автомобиль, что означает запрет на его отчуждение, но не означает немедленное изъятие. Только если должник не погашает долг в течение установленного срока, приставы могут принять решение об изъятии автомобиля и его последующей продаже с торгов.',
                      },
                    ],
                  },
                  {
                    title: 'Защита прав должника',
                    subtitle: 'Как защитить свой автомобиль от изъятия',
                    description:
                      'Практические советы по защите имущества от приставов',
                    hash: '#protection',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Как защитить свой автомобиль от изъятия',
                        text: 'Существует несколько законных способов защитить свой автомобиль от изъятия приставами. Первый и самый эффективный способ – это добровольное погашение долга или заключение соглашения о рассрочке платежей с кредитором. Если у должника нет возможности сразу погасить всю сумму, он может обратиться в суд с заявлением о предоставлении рассрочки или отсрочки исполнения решения суда. Второй способ – это доказать, что автомобиль является необходимым для работы или жизнедеятельности должника и его семьи. Для этого нужно собрать соответствующие документы (трудовой договор, медицинские справки и т.д.) и представить их приставу. Третий способ – это указать приставу на другое имущество, которое может быть изъято вместо автомобиля. Важно помнить, что приставы обязаны учитывать интересы должника и его семьи при выборе имущества для изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Последствия незаконного изъятия автомобиля',
                        text: 'Если приставы изъяли автомобиль с нарушением закона, должник имеет право обжаловать их действия. Для этого необходимо обратиться в суд с заявлением об оспаривании постановления пристава или действий пристава. В заявлении нужно указать, какие именно нарушения закона были допущены, и приложить соответствующие доказательства. Если суд признает действия приставов незаконными, он может обязать их вернуть автомобиль должнику и возместить причиненный ущерб. Кроме того, должник может обратиться с жалобой на действия пристава к старшему судебному приставу или в прокуратуру. Важно действовать быстро, так как срок для обжалования действий приставов ограничен. Если автомобиль уже был продан с торгов, то вернуть его будет практически невозможно, поэтому важно своевременно защищать свои права.',
                      },
                      {
                        icon: 'IconCircle',
                        title:
                          'Альтернативные способы решения проблемы с долгами',
                        text: 'Вместо того чтобы ждать изъятия автомобиля приставами, должник может рассмотреть альтернативные способы решения проблемы с долгами. Одним из таких способов является банкротство физического лица, которое позволяет списать долги и начать жизнь с чистого листа. Однако этот способ подходит не всем и имеет свои последствия, такие как ограничение на выезд за границу и запрет на занятие определенных должностей. Другим способом является реструктуризация долга, при которой кредитор соглашается на изменение условий договора, например, на снижение процентной ставки или увеличение срока кредитования. Также можно рассмотреть возможность продажи автомобиля самостоятельно и использования вырученных средств для погашения долга, что может быть более выгодным, чем изъятие автомобиля приставами. В любом случае, важно действовать proactively и не ждать, пока ситуация станет критической.',
                      },
                    ],
                  },
                  {
                    title: 'Заключение',
                    subtitle: 'Что нужно знать каждому автовладельцу',
                    description:
                      'Защита автомобиля от изъятия приставами требует знания своих прав и своевременных действий. Важно помнить, что не каждый автомобиль может быть изъят, особенно если он является источником дохода или необходим для жизнеобеспечения. При взаимодействии с приставами следует всегда проверять законность их действий и наличие необходимых документов. Существует множество легальных способов защитить свой автомобиль, включая реструктуризацию долга и заключение мирового соглашения. В случае незаконных действий со стороны приставов необходимо незамедлительно обжаловать их в суде. Помните, что своевременное решение проблем с долгами поможет избежать крайних мер. Сохранение диалога с кредиторами и приставами увеличивает шансы найти компромиссное решение.',
                    explanation:
                      'Знание своих прав и обязанностей – ключ к защите своего имущества от незаконных действий приставов. Каждый автовладелец должен понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Важно своевременно реагировать на требования приставов и использовать все законные способы защиты своего имущества. Помните, что в большинстве случаев можно найти компромиссное решение, которое позволит сохранить автомобиль и погасить долг.',
                    hash: '#conclusion',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-1',
                title: 'Статья 1',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-1',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-2',
                title: 'Статья 2',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-2',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-3',
                title: 'Статья 3',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-3',
                cardVariant: 'outline',
            image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-4',
                title: 'Статья 4',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-4',
            cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автомобиль', 'Долги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-5',
                title: 'Статья 5',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-5',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-6',
                title: 'Статья 6',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-6',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              // другие статьи
            ],
          },
          {
            slug: 'avtokredit',
            title: 'Автокредит',
            text: 'Статьи об автокредитовании',
            image: '/images/pages/main/management.png',
            cardVariant: 'outline',
            link: '/articles/avtokredit',
            articles: [
              {
                slug: 'mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                title: 'Могут ли приставы забрать автомобиль за долги?',
                subtitle: 'Разбираемся в правах приставов и должников',
                text: 'В ситуации с долгами многие автовладельцы задаются вопросом: могут ли судебные приставы забрать их автомобиль? Эта статья поможет разобраться в правах и обязанностях всех участников процесса, а также расскажет о законных способах защиты своего имущества.',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                cardVariant: 'outline',
                tags: [
                  'Автокредит',
                  'Автомобиль',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Введение',
                    subtitle: 'Права приставов и должников',
                    description:
                      'Разбираемся в законодательстве и правах всех участников процесса',
                    explanation:
                      'Судебные приставы имеют право накладывать арест на имущество должника, включая автомобиль, но это право ограничено законом. Важно понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Знание своих прав и обязанностей поможет избежать незаконных действий со стороны приставов и защитить свое имущество.',
                    hash: '#introduction',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Законные основания для изъятия автомобиля',
                        text: 'Судебные приставы могут забрать автомобиль должника только на основании исполнительного листа, выданного судом. Этот документ должен содержать четкое указание на возможность ареста и изъятия транспортного средства. Важно отметить, что приставы не имеют права самостоятельно определять, какое именно имущество подлежит изъятию – это должно быть указано в исполнительном листе. Если в документе не указано конкретно транспортное средство, а есть только общая формулировка об аресте имущества, то приставы должны сначала провести опись имущества и только потом принимать решение об изъятии. Кроме того, должник имеет право указать, какое именно имущество он готов передать для погашения долга, и приставы обязаны это учитывать.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Какие автомобили защищены от изъятия',
                        text: 'Законом установлен перечень автомобилей, которые не могут быть изъяты приставами. К ним относятся автомобили, необходимые должнику для работы, если это его основной источник дохода. Например, если должник работает таксистом или курьером, и автомобиль является его рабочим инструментом. Также защищены от изъятия автомобили, которые используются для перевозки инвалидов или других членов семьи с ограниченными возможностями. Важно, что должник должен доказать, что автомобиль действительно необходим для этих целей, предоставив соответствующие документы. Если автомобиль является единственным средством передвижения для должника и его семьи, проживающих в местности с неразвитым общественным транспортом, это также может быть основанием для защиты от изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Процедура изъятия автомобиля приставами',
                        text: 'Процедура изъятия автомобиля приставами строго регламентирована законом и состоит из нескольких этапов. Сначала приставы должны уведомить должника о начале исполнительного производства, вручив ему постановление. Затем они имеют право прийти по месту жительства должника или месту нахождения автомобиля для описи имущества. При этом приставы обязаны составить акт описи, в котором должны быть указаны все характеристики автомобиля, включая марку, модель, год выпуска, VIN-номер и другие идентифицирующие признаки. Должник имеет право присутствовать при описи и вносить замечания в акт. После описи приставы могут наложить арест на автомобиль, что означает запрет на его отчуждение, но не означает немедленное изъятие. Только если должник не погашает долг в течение установленного срока, приставы могут принять решение об изъятии автомобиля и его последующей продаже с торгов.',
                      },
                    ],
                  },
                  {
                    title: 'Защита прав должника',
                    subtitle: 'Как защитить свой автомобиль от изъятия',
                    description:
                      'Практические советы по защите имущества от приставов',
                    hash: '#protection',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Как защитить свой автомобиль от изъятия',
                        text: 'Существует несколько законных способов защитить свой автомобиль от изъятия приставами. Первый и самый эффективный способ – это добровольное погашение долга или заключение соглашения о рассрочке платежей с кредитором. Если у должника нет возможности сразу погасить всю сумму, он может обратиться в суд с заявлением о предоставлении рассрочки или отсрочки исполнения решения суда. Второй способ – это доказать, что автомобиль является необходимым для работы или жизнедеятельности должника и его семьи. Для этого нужно собрать соответствующие документы (трудовой договор, медицинские справки и т.д.) и представить их приставу. Третий способ – это указать приставу на другое имущество, которое может быть изъято вместо автомобиля. Важно помнить, что приставы обязаны учитывать интересы должника и его семьи при выборе имущества для изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Последствия незаконного изъятия автомобиля',
                        text: 'Если приставы изъяли автомобиль с нарушением закона, должник имеет право обжаловать их действия. Для этого необходимо обратиться в суд с заявлением об оспаривании постановления пристава или действий пристава. В заявлении нужно указать, какие именно нарушения закона были допущены, и приложить соответствующие доказательства. Если суд признает действия приставов незаконными, он может обязать их вернуть автомобиль должнику и возместить причиненный ущерб. Кроме того, должник может обратиться с жалобой на действия пристава к старшему судебному приставу или в прокуратуру. Важно действовать быстро, так как срок для обжалования действий приставов ограничен. Если автомобиль уже был продан с торгов, то вернуть его будет практически невозможно, поэтому важно своевременно защищать свои права.',
                      },
                      {
                        icon: 'IconCircle',
                        title:
                          'Альтернативные способы решения проблемы с долгами',
                        text: 'Вместо того чтобы ждать изъятия автомобиля приставами, должник может рассмотреть альтернативные способы решения проблемы с долгами. Одним из таких способов является банкротство физического лица, которое позволяет списать долги и начать жизнь с чистого листа. Однако этот способ подходит не всем и имеет свои последствия, такие как ограничение на выезд за границу и запрет на занятие определенных должностей. Другим способом является реструктуризация долга, при которой кредитор соглашается на изменение условий договора, например, на снижение процентной ставки или увеличение срока кредитования. Также можно рассмотреть возможность продажи автомобиля самостоятельно и использования вырученных средств для погашения долга, что может быть более выгодным, чем изъятие автомобиля приставами. В любом случае, важно действовать proactively и не ждать, пока ситуация станет критической.',
                      },
                    ],
                  },
                  {
                    title: 'Заключение',
                    subtitle: 'Что нужно знать каждому автовладельцу',
                    description:
                      'Защита автомобиля от изъятия приставами требует знания своих прав и своевременных действий. Важно помнить, что не каждый автомобиль может быть изъят, особенно если он является источником дохода или необходим для жизнеобеспечения. При взаимодействии с приставами следует всегда проверять законность их действий и наличие необходимых документов. Существует множество легальных способов защитить свой автомобиль, включая реструктуризацию долга и заключение мирового соглашения. В случае незаконных действий со стороны приставов необходимо незамедлительно обжаловать их в суде. Помните, что своевременное решение проблем с долгами поможет избежать крайних мер. Сохранение диалога с кредиторами и приставами увеличивает шансы найти компромиссное решение.',
                    explanation:
                      'Знание своих прав и обязанностей – ключ к защите своего имущества от незаконных действий приставов. Каждый автовладелец должен понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Важно своевременно реагировать на требования приставов и использовать все законные способы защиты своего имущества. Помните, что в большинстве случаев можно найти компромиссное решение, которое позволит сохранить автомобиль и погасить долг.',
                    hash: '#conclusion',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-1',
                title: 'Статья 1',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-1',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-2',
                title: 'Статья 2',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-2',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-3',
                title: 'Статья 3',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-3',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-4',
                title: 'Статья 4',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-4',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автомобиль', 'Долги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-5',
                title: 'Статья 5',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-5',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-6',
                title: 'Статья 6',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-6',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              // другие статьи
            ],
          },
          {
            slug: 'avtokredit',
            title: 'Автокредит',
            text: 'Статьи об автокредитовании',
            image: '/images/pages/main/management.png',
            cardVariant: 'outline',
            link: '/articles/avtokredit',
            articles: [
              {
                slug: 'mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                title: 'Могут ли приставы забрать автомобиль за долги?',
                subtitle: 'Разбираемся в правах приставов и должников',
                text: 'В ситуации с долгами многие автовладельцы задаются вопросом: могут ли судебные приставы забрать их автомобиль? Эта статья поможет разобраться в правах и обязанностях всех участников процесса, а также расскажет о законных способах защиты своего имущества.',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                cardVariant: 'outline',
                tags: [
                  'Автокредит',
                  'Автомобиль',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Введение',
                    subtitle: 'Права приставов и должников',
                    description:
                      'Разбираемся в законодательстве и правах всех участников процесса',
                    explanation:
                      'Судебные приставы имеют право накладывать арест на имущество должника, включая автомобиль, но это право ограничено законом. Важно понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Знание своих прав и обязанностей поможет избежать незаконных действий со стороны приставов и защитить свое имущество.',
                    hash: '#introduction',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Законные основания для изъятия автомобиля',
                        text: 'Судебные приставы могут забрать автомобиль должника только на основании исполнительного листа, выданного судом. Этот документ должен содержать четкое указание на возможность ареста и изъятия транспортного средства. Важно отметить, что приставы не имеют права самостоятельно определять, какое именно имущество подлежит изъятию – это должно быть указано в исполнительном листе. Если в документе не указано конкретно транспортное средство, а есть только общая формулировка об аресте имущества, то приставы должны сначала провести опись имущества и только потом принимать решение об изъятии. Кроме того, должник имеет право указать, какое именно имущество он готов передать для погашения долга, и приставы обязаны это учитывать.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Какие автомобили защищены от изъятия',
                        text: 'Законом установлен перечень автомобилей, которые не могут быть изъяты приставами. К ним относятся автомобили, необходимые должнику для работы, если это его основной источник дохода. Например, если должник работает таксистом или курьером, и автомобиль является его рабочим инструментом. Также защищены от изъятия автомобили, которые используются для перевозки инвалидов или других членов семьи с ограниченными возможностями. Важно, что должник должен доказать, что автомобиль действительно необходим для этих целей, предоставив соответствующие документы. Если автомобиль является единственным средством передвижения для должника и его семьи, проживающих в местности с неразвитым общественным транспортом, это также может быть основанием для защиты от изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Процедура изъятия автомобиля приставами',
                        text: 'Процедура изъятия автомобиля приставами строго регламентирована законом и состоит из нескольких этапов. Сначала приставы должны уведомить должника о начале исполнительного производства, вручив ему постановление. Затем они имеют право прийти по месту жительства должника или месту нахождения автомобиля для описи имущества. При этом приставы обязаны составить акт описи, в котором должны быть указаны все характеристики автомобиля, включая марку, модель, год выпуска, VIN-номер и другие идентифицирующие признаки. Должник имеет право присутствовать при описи и вносить замечания в акт. После описи приставы могут наложить арест на автомобиль, что означает запрет на его отчуждение, но не означает немедленное изъятие. Только если должник не погашает долг в течение установленного срока, приставы могут принять решение об изъятии автомобиля и его последующей продаже с торгов.',
                      },
                    ],
                  },
                  {
                    title: 'Защита прав должника',
                    subtitle: 'Как защитить свой автомобиль от изъятия',
                    description:
                      'Практические советы по защите имущества от приставов',
                    hash: '#protection',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Как защитить свой автомобиль от изъятия',
                        text: 'Существует несколько законных способов защитить свой автомобиль от изъятия приставами. Первый и самый эффективный способ – это добровольное погашение долга или заключение соглашения о рассрочке платежей с кредитором. Если у должника нет возможности сразу погасить всю сумму, он может обратиться в суд с заявлением о предоставлении рассрочки или отсрочки исполнения решения суда. Второй способ – это доказать, что автомобиль является необходимым для работы или жизнедеятельности должника и его семьи. Для этого нужно собрать соответствующие документы (трудовой договор, медицинские справки и т.д.) и представить их приставу. Третий способ – это указать приставу на другое имущество, которое может быть изъято вместо автомобиля. Важно помнить, что приставы обязаны учитывать интересы должника и его семьи при выборе имущества для изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Последствия незаконного изъятия автомобиля',
                        text: 'Если приставы изъяли автомобиль с нарушением закона, должник имеет право обжаловать их действия. Для этого необходимо обратиться в суд с заявлением об оспаривании постановления пристава или действий пристава. В заявлении нужно указать, какие именно нарушения закона были допущены, и приложить соответствующие доказательства. Если суд признает действия приставов незаконными, он может обязать их вернуть автомобиль должнику и возместить причиненный ущерб. Кроме того, должник может обратиться с жалобой на действия пристава к старшему судебному приставу или в прокуратуру. Важно действовать быстро, так как срок для обжалования действий приставов ограничен. Если автомобиль уже был продан с торгов, то вернуть его будет практически невозможно, поэтому важно своевременно защищать свои права.',
                      },
                      {
                        icon: 'IconCircle',
                        title:
                          'Альтернативные способы решения проблемы с долгами',
                        text: 'Вместо того чтобы ждать изъятия автомобиля приставами, должник может рассмотреть альтернативные способы решения проблемы с долгами. Одним из таких способов является банкротство физического лица, которое позволяет списать долги и начать жизнь с чистого листа. Однако этот способ подходит не всем и имеет свои последствия, такие как ограничение на выезд за границу и запрет на занятие определенных должностей. Другим способом является реструктуризация долга, при которой кредитор соглашается на изменение условий договора, например, на снижение процентной ставки или увеличение срока кредитования. Также можно рассмотреть возможность продажи автомобиля самостоятельно и использования вырученных средств для погашения долга, что может быть более выгодным, чем изъятие автомобиля приставами. В любом случае, важно действовать proactively и не ждать, пока ситуация станет критической.',
                      },
                    ],
                  },
                  {
                    title: 'Заключение',
                    subtitle: 'Что нужно знать каждому автовладельцу',
                    description:
                      'Защита автомобиля от изъятия приставами требует знания своих прав и своевременных действий. Важно помнить, что не каждый автомобиль может быть изъят, особенно если он является источником дохода или необходим для жизнеобеспечения. При взаимодействии с приставами следует всегда проверять законность их действий и наличие необходимых документов. Существует множество легальных способов защитить свой автомобиль, включая реструктуризацию долга и заключение мирового соглашения. В случае незаконных действий со стороны приставов необходимо незамедлительно обжаловать их в суде. Помните, что своевременное решение проблем с долгами поможет избежать крайних мер. Сохранение диалога с кредиторами и приставами увеличивает шансы найти компромиссное решение.',
                    explanation:
                      'Знание своих прав и обязанностей – ключ к защите своего имущества от незаконных действий приставов. Каждый автовладелец должен понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Важно своевременно реагировать на требования приставов и использовать все законные способы защиты своего имущества. Помните, что в большинстве случаев можно найти компромиссное решение, которое позволит сохранить автомобиль и погасить долг.',
                    hash: '#conclusion',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-1',
                title: 'Статья 1',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-1',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-2',
                title: 'Статья 2',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-2',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-3',
                title: 'Статья 3',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-3',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-4',
                title: 'Статья 4',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-4',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автомобиль', 'Долги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-5',
                title: 'Статья 5',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-5',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-6',
                title: 'Статья 6',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-6',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              // другие статьи
            ],
          },
          {
            slug: 'avtokredit',
            title: 'Автокредит',
            text: 'Статьи об автокредитовании',
            image: '/images/pages/main/management.png',
            cardVariant: 'outline',
            link: '/articles/avtokredit',
            articles: [
              {
                slug: 'mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                title: 'Могут ли приставы забрать автомобиль за долги?',
                subtitle: 'Разбираемся в правах приставов и должников',
                text: 'В ситуации с долгами многие автовладельцы задаются вопросом: могут ли судебные приставы забрать их автомобиль? Эта статья поможет разобраться в правах и обязанностях всех участников процесса, а также расскажет о законных способах защиты своего имущества.',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/mogut-li-pristavy-zabrat-avtomobil-za-dolgi',
                cardVariant: 'outline',
                tags: [
                  'Автокредит',
                  'Автомобиль',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Введение',
                    subtitle: 'Права приставов и должников',
                    description:
                      'Разбираемся в законодательстве и правах всех участников процесса',
                    explanation:
                      'Судебные приставы имеют право накладывать арест на имущество должника, включая автомобиль, но это право ограничено законом. Важно понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Знание своих прав и обязанностей поможет избежать незаконных действий со стороны приставов и защитить свое имущество.',
                    hash: '#introduction',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Законные основания для изъятия автомобиля',
                        text: 'Судебные приставы могут забрать автомобиль должника только на основании исполнительного листа, выданного судом. Этот документ должен содержать четкое указание на возможность ареста и изъятия транспортного средства. Важно отметить, что приставы не имеют права самостоятельно определять, какое именно имущество подлежит изъятию – это должно быть указано в исполнительном листе. Если в документе не указано конкретно транспортное средство, а есть только общая формулировка об аресте имущества, то приставы должны сначала провести опись имущества и только потом принимать решение об изъятии. Кроме того, должник имеет право указать, какое именно имущество он готов передать для погашения долга, и приставы обязаны это учитывать.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Какие автомобили защищены от изъятия',
                        text: 'Законом установлен перечень автомобилей, которые не могут быть изъяты приставами. К ним относятся автомобили, необходимые должнику для работы, если это его основной источник дохода. Например, если должник работает таксистом или курьером, и автомобиль является его рабочим инструментом. Также защищены от изъятия автомобили, которые используются для перевозки инвалидов или других членов семьи с ограниченными возможностями. Важно, что должник должен доказать, что автомобиль действительно необходим для этих целей, предоставив соответствующие документы. Если автомобиль является единственным средством передвижения для должника и его семьи, проживающих в местности с неразвитым общественным транспортом, это также может быть основанием для защиты от изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Процедура изъятия автомобиля приставами',
                        text: 'Процедура изъятия автомобиля приставами строго регламентирована законом и состоит из нескольких этапов. Сначала приставы должны уведомить должника о начале исполнительного производства, вручив ему постановление. Затем они имеют право прийти по месту жительства должника или месту нахождения автомобиля для описи имущества. При этом приставы обязаны составить акт описи, в котором должны быть указаны все характеристики автомобиля, включая марку, модель, год выпуска, VIN-номер и другие идентифицирующие признаки. Должник имеет право присутствовать при описи и вносить замечания в акт. После описи приставы могут наложить арест на автомобиль, что означает запрет на его отчуждение, но не означает немедленное изъятие. Только если должник не погашает долг в течение установленного срока, приставы могут принять решение об изъятии автомобиля и его последующей продаже с торгов.',
                      },
                    ],
                  },
                  {
                    title: 'Защита прав должника',
                    subtitle: 'Как защитить свой автомобиль от изъятия',
                    description:
                      'Практические советы по защите имущества от приставов',
                    hash: '#protection',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'Как защитить свой автомобиль от изъятия',
                        text: 'Существует несколько законных способов защитить свой автомобиль от изъятия приставами. Первый и самый эффективный способ – это добровольное погашение долга или заключение соглашения о рассрочке платежей с кредитором. Если у должника нет возможности сразу погасить всю сумму, он может обратиться в суд с заявлением о предоставлении рассрочки или отсрочки исполнения решения суда. Второй способ – это доказать, что автомобиль является необходимым для работы или жизнедеятельности должника и его семьи. Для этого нужно собрать соответствующие документы (трудовой договор, медицинские справки и т.д.) и представить их приставу. Третий способ – это указать приставу на другое имущество, которое может быть изъято вместо автомобиля. Важно помнить, что приставы обязаны учитывать интересы должника и его семьи при выборе имущества для изъятия.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'Последствия незаконного изъятия автомобиля',
                        text: 'Если приставы изъяли автомобиль с нарушением закона, должник имеет право обжаловать их действия. Для этого необходимо обратиться в суд с заявлением об оспаривании постановления пристава или действий пристава. В заявлении нужно указать, какие именно нарушения закона были допущены, и приложить соответствующие доказательства. Если суд признает действия приставов незаконными, он может обязать их вернуть автомобиль должнику и возместить причиненный ущерб. Кроме того, должник может обратиться с жалобой на действия пристава к старшему судебному приставу или в прокуратуру. Важно действовать быстро, так как срок для обжалования действий приставов ограничен. Если автомобиль уже был продан с торгов, то вернуть его будет практически невозможно, поэтому важно своевременно защищать свои права.',
                      },
                      {
                        icon: 'IconCircle',
                        title:
                          'Альтернативные способы решения проблемы с долгами',
                        text: 'Вместо того чтобы ждать изъятия автомобиля приставами, должник может рассмотреть альтернативные способы решения проблемы с долгами. Одним из таких способов является банкротство физического лица, которое позволяет списать долги и начать жизнь с чистого листа. Однако этот способ подходит не всем и имеет свои последствия, такие как ограничение на выезд за границу и запрет на занятие определенных должностей. Другим способом является реструктуризация долга, при которой кредитор соглашается на изменение условий договора, например, на снижение процентной ставки или увеличение срока кредитования. Также можно рассмотреть возможность продажи автомобиля самостоятельно и использования вырученных средств для погашения долга, что может быть более выгодным, чем изъятие автомобиля приставами. В любом случае, важно действовать proactively и не ждать, пока ситуация станет критической.',
                      },
                    ],
                  },
                  {
                    title: 'Заключение',
                    subtitle: 'Что нужно знать каждому автовладельцу',
                    description:
                      'Защита автомобиля от изъятия приставами требует знания своих прав и своевременных действий. Важно помнить, что не каждый автомобиль может быть изъят, особенно если он является источником дохода или необходим для жизнеобеспечения. При взаимодействии с приставами следует всегда проверять законность их действий и наличие необходимых документов. Существует множество легальных способов защитить свой автомобиль, включая реструктуризацию долга и заключение мирового соглашения. В случае незаконных действий со стороны приставов необходимо незамедлительно обжаловать их в суде. Помните, что своевременное решение проблем с долгами поможет избежать крайних мер. Сохранение диалога с кредиторами и приставами увеличивает шансы найти компромиссное решение.',
                    explanation:
                      'Знание своих прав и обязанностей – ключ к защите своего имущества от незаконных действий приставов. Каждый автовладелец должен понимать, что не любой автомобиль может быть изъят, и не в любой ситуации приставы имеют право на такие действия. Важно своевременно реагировать на требования приставов и использовать все законные способы защиты своего имущества. Помните, что в большинстве случаев можно найти компромиссное решение, которое позволит сохранить автомобиль и погасить долг.',
                    hash: '#conclusion',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-1',
                title: 'Статья 1',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-1',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-2',
                title: 'Статья 2',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-2',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: [
                  'Автокредит',
                  'Налоги',
                  'Приставы',
                  'Судебные приставы',
                  'Автомобиль',
                  'Долги',
                  'Приставы',
                  'Судебные приставы',
                ],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-3',
                title: 'Статья 3',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-3',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-4',
                title: 'Статья 4',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-4',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автомобиль', 'Долги', 'Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-5',
                title: 'Статья 5',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-5',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Автокредит', 'Налоги'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              {
                slug: 'avtokredit-st-6',
                title: 'Статья 6',
                subtitle: 'Подзаголовок статьи',
                text: 'Краткое описание для карточки',
                date: '2023-04-07',
                author: 'Александр Иванов',
                link: '/articles/avtokredit/avtokredit-st-6',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                tags: ['Приставы', 'Судебные приставы'],
                content: [
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section1',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description: 'Описание раздела, 20-300 символов',
                    explanation: 'Дополнительное объяснение, 50-500 символов',
                    hash: '#section2',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Заголовок раздела, 5-70 символов',
                    subtitle: ' Подзаголовок раздела, 10-100 символов',
                    description:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    explanation:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                    hash: '#section3',
                  },
                ],
              },
              // другие статьи
            ],
          },
          // другие категории на А
        ],
        cols: 4,
        gap: 'gap-4',
      },
      {
        title: 'Б',
        cardType: 'cardWithLink',
        cards: [
          {
            slug: 'pattern',
            title: 'Название категории',
            text: 'Короткое описание категории',
            image: '/images/pages/main/management.png',
            cardVariant: 'outline',
            link: '/articles/pattern',
            articles: [
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения',
                description: 'описание статьи 5 предложений',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложений (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения',
                description: 'описание статьи 5 предложений',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения',
                description: 'описание статьи 5 предложений',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },

              // Другие статьи
            ],
          },
          {
            slug: 'pattern',
            title: 'Название категории',
            text: 'Короткое описание категории',
            image: '/images/pages/main/management.png',
            cardVariant: 'outline',
            link: '/articles/pattern',
            articles: [
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения',
                description: 'описание статьи 5 предложений',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения',
                description: 'описание статьи 5 предложений',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения',
                description: 'описание статьи 5 предложений',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },
              {
                slug: 'name-article',
                title: 'Название статьи',
                subtitle: 'описание статьи 2-3 предложения 43',
                description: 'описание статьи 5 предложений йййй',
                date: 'дата статьи',
                author: 'автор статьи',
                link: '/',
                cardVariant: 'outline',
                image: '/images/pages/main/management.png',
                content: [
                  {
                    title: 'Название параграфа',
                    subtitle: 'подзаголовок если нужен ',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                    list: [
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'текст списка 4-5 предложений',
                      },
                      {
                        icon: 'IconCircle',
                        title: 'заголовок списка',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                      },
                    ],
                  },
                  {
                    title: 'Название параграфа 3',
                    subtitle: 'подзаголовок если нужен',
                    title: 'Название параграфа 2',
                    subtitle: 'подзаголовок если нужен',
                    description:
                      'Короткое описание параграфа 2-3 предложения (если нужен)',
                    explanation:
                      'Короткое объяснение параграфа 2-3 предложения (если нужен)',
                  },
                ],
              },

              // Другие статьи
            ],
          },
        ],
        cols: 4,
        gap: 'gap-4',
      },

      // Другие категории
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
      fieldsForSearch: ['title', 'subtitle', 'description'],
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
