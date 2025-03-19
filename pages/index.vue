<template>
  <div class="container">
    <div class="mt-10">index page</div>
    colors
    <div class="flex gap-2 mt-2 text-neutral2/30">
      <div class="w-10 h-10 bg-primary rounded-md border">p</div>
      <div class="w-10 h-10 bg-secondary rounded-md border">s</div>
      <div class="w-10 h-10 bg-neutral1 rounded-md border">1</div>
      <div class="w-10 h-10 bg-neutral2 rounded-md border">2</div>
      <div class="w-10 h-10 bg-neutral3 rounded-md border">3</div>
      <div class="w-10 h-10 bg-neutral4 rounded-md border">4</div>
      <div class="w-10 h-10 bg-neutral5 rounded-md border">5</div>
      <div class="w-10 h-10 bg-neutral6 rounded-md border">6</div>
      <div class="w-10 h-10 bg-background rounded-md border">bg</div>
      <div class="w-10 h-10 bg-danger rounded-md border">d</div>
    </div>
    <div class="my-2">
      VButton
      <div class="my-2">
        <VButton
          type="flat"
          size="small"
          >flat small</VButton
        >
        <VButton
          type="flat"
          size="normal"
          class="ml-2"
          >flat normal</VButton
        >
        <VButton
          type="flat"
          size="middle"
          class="ml-2"
          >flat middle</VButton
        >
      </div>
      <div class="my-2">
        <VButton
          type="outline"
          size="small"
          >outline small</VButton
        >
        <VButton
          type="outline"
          size="normal"
          class="ml-2"
          >outline normal</VButton
        >
        <VButton
          type="outline"
          size="middle"
          class="ml-2"
          >outline middle</VButton
        >
      </div>
      <div class="my-2">
        <VButton
          type="default"
          size="small"
          >default small</VButton
        >
        <VButton
          type="default"
          size="normal"
          class="ml-2"
          >default normal</VButton
        >
        <VButton
          type="default"
          size="middle"
          class="ml-2"
          >default middle</VButton
        >
      </div>
    </div>
    <div>
      VLink

      <div class="my-2">
        <VLink
          link="https://github.com/M1hailFR/resume/"
          target="_blank"
          >default</VLink
        >
        <VLink
          link="/"
          type="flat"
          class="ml-2 px-3 py-1"
          >flat</VLink
        >
        <VLink
          link="/"
          type="outline"
          class="ml-2 px-2 py-1"
          activeClass="text-primary"
          >outline</VLink
        >
      </div>
      <div class="my-2 w-1/2">
        VInput
        <VInput
          v-model="input"
          nativeType="text"
          clearable
          class="mt-2 text-sm" />
        <VInput
          v-model="input2"
          class="mt-2 text-xl"
          nativeType="text"
          error
          clearable />
      </div>

      <div class="my-2 w-1/2">
        VTextarea
        <VTextarea
          v-model="textarea"
          clearable
          class="mt-2 text-sm" />
        <VTextarea
          v-model="textarea2"
          class="mt-2 text-xl"
          error
          clearable />
      </div>

      <div class="my-2">
        VTitle
        <VTitle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          defaultClass="mt-2 " />
      </div>

      <div class="my-2">
        VVerticalPadding

        <VVerticalPadding
          :desktop-padding="desktopPadding"
          :mobile-padding="mobilePadding">
          VImage
          <div class="w-1/2 rounded-xl overflow-hidden">
            <VImage
              src="/images/assembly.jpg"
              class="" />
          </div>
        </VVerticalPadding>
      </div>

      <div class="my-2 w-1/2">
        VCollapse
        <VCollapse
          v-for="(item, idx) in collapseLists"
          :key="idx"
          :content="[item]"
          :title="item.title"
          :text="item.text"
          @change="showStages(item)"
          class="mt-2">
          <template #header="{ list }">
            <div
              class="flex flex-wrap gap-4 justify-between text-lx mb-4 flex-row w-full">
              <div class="collapse--title">
                {{ list?.[0].title }}
              </div>
              <div class="text-neutral3">
                {{ list?.[0].price }}
              </div>
              <div class="text-neutral3">
                {{ list?.[0].duration }}
              </div>
            </div>
          </template>

          <template #content>
            <v-title
              :title="item.text"
              tag="h5"
              defaultClass="text-sm text-neutral3" />
          </template>
        </VCollapse>
      </div>
      <div class="my-2 w-1/2">
        VList

        <div
          v-for="(item, idx) in vlistLists"
          :key="idx">
          <div class="h-[2px] bg-neutral2 my-6" />
          <v-list
            :list="item.list"
            divider
            customMark />
        </div>
      </div>
      <div class="my-2 mb-[200px] w-1/2">
        VDropdown
        <VDropdown
          class="block p-2 bg-neutral5 rounded-lg mt-2"
          icon="IconCross">
          <div>qwer</div>

          <template #options>
            <VDropdownOptions
              v-for="(item, idx) in dropdownList"
              :key="idx">
              {{ item.title }}
            </VDropdownOptions>
          </template>
        </VDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  VButton,
  VLink,
  VInput,
  VTextarea,
  VTitle,
  VVerticalPadding,
  VImage,
  VCollapse,
  VList,
  VDropdown,
  VDropdownOptions,
} from '~/components/ui'

const input = ref('')
const input2 = ref('')
const textarea = ref('')
const textarea2 = ref('')

const desktopPadding = {
  top: '16px',
  bottom: '16px',
}
const mobilePadding = {
  top: '8px',
  bottom: '8px',
}

const collapseLists = [
  {
    title: 'ЛЕНДИНГ',
    text: 'Создаем эффективные посадочные страницы, которые превращают посетителей в клиентов. Наша команда фокусируется на ключевых преимуществах вашего продукта, используя современные принципы веб-дизайна и маркетинга. Разрабатываем уникальные визуальные решения, которые выделяют ваш бренд среди конкурентов. Особое внимание уделяем оптимизации конверсии и скорости загрузки страницы для достижения максимальных результатов.',
    price: 'От 100 000 ₽',
    duration: '14-21 ДЕНЬ',
    stages: [
      { title: 'Брифинг', duration: '1 ДЕНЬ', price: 0 },
      { title: 'Аналитика', duration: '2 ДНЯ', price: 5000 },
      { title: 'Исследования', duration: '2 ДНЯ', price: 5000 },
      { title: 'Прототип', duration: '3 ДНЯ', price: 15000 },
      { title: 'Дизайн', duration: '4 ДНЯ', price: 20000 },
      { title: 'Адаптивы', duration: '2 ДНЯ', price: 15000 },
      { title: 'Анимация', duration: '3 ДНЯ', price: 15000 },
      { title: 'Макет сайта', duration: '1 ДЕНЬ', price: 5000 },
    ],
  },
  {
    title: 'КОРПОРАТИВНЫЙ САЙТ',
    text: 'Разрабатываем комплексные корпоративные решения, которые эффективно представляют ваш бизнес в цифровом пространстве. Создаем удобную структуру с интуитивной навигацией, позволяющую посетителям легко находить нужную информацию о компании, услугах и продуктах. Внедряем современные технологии и инструменты для управления контентом, обеспечивая простоту обновления информации. Уделяем особое внимание безопасности и масштабируемости решения для роста вместе с вашим бизнесом.',
    price: 'От 300 000 ₽',
    duration: '14-21 ДЕНЬ',
    stages: [
      { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
      { title: 'Аналитика', duration: '3 ДНЯ', price: 15000 },
      { title: 'Исследования', duration: '3 ДНЯ', price: 15000 },
      { title: 'Карта', duration: '2 ДНЯ', price: 20000 },
      { title: 'Прототип', duration: '5 ДНЕЙ', price: 35000 },
      { title: 'Дизайн', duration: '7 ДНЕЙ', price: 45000 },
      { title: 'Адаптивы', duration: '4 ДНЯ', price: 30000 },
      { title: 'Анимация', duration: '4 ДНЯ', price: 25000 },
      { title: 'Микроанимации', duration: '3 ДНЯ', price: 20000 },
      { title: 'Макет сайта', duration: '2 ДНЯ', price: 15000 },
    ],
  },
  {
    title: 'ИНТЕРНЕТ МАГАЗИН',
    text: 'Создаем современные торговые платформы с продуманной архитектурой и удобным процессом покупки. Разрабатываем интуитивный интерфейс каталога товаров с умными фильтрами и системой поиска для быстрого нахождения нужных товаров. Интегрируем надежные платежные системы и удобные способы доставки, обеспечивая безопасность транзакций. Внедряем инструменты аналитики и CRM-системы для эффективного управления продажами и маркетингом.',
    price: 'От 500 000 ₽',
    duration: '21-30 ДЕНЬ',
    stages: [
      { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
      { title: 'Аналитика', duration: '4 ДНЯ', price: 25000 },
      { title: 'Исследования', duration: '4 ДНЯ', price: 25000 },
      { title: 'Карта', duration: '3 ДНЯ', price: 30000 },
      { title: 'Проектирование', duration: '3 ДНЯ', price: 35000 },
      { title: 'Прототип', duration: '7 ДНЕЙ', price: 50000 },
      { title: 'Дизайн', duration: '10 ДНЕЙ', price: 70000 },
      { title: 'Дизайн-система', duration: '5 ДНЕЙ', price: 40000 },
      { title: 'Адаптивы', duration: '6 ДНЕЙ', price: 45000 },
      { title: 'Анимация', duration: '5 ДНЕЙ', price: 35000 },
      { title: 'Микроанимации', duration: '4 ДНЯ', price: 30000 },
      { title: 'Макет сайта', duration: '3 ДНЯ', price: 25000 },
    ],
  },
  {
    title: 'ДИЗАЙН ПРИЛОЖЕНИЙ',
    text: 'Создаем инновационные решения для мобильных и десктопных платформ с фокусом на пользовательский опыт. Разрабатываем интуитивно понятные интерфейсы, которые делают взаимодействие с приложением простым и приятным. Уделяем особое внимание производительности и оптимизации для различных устройств и операционных систем. Применяем современные паттерны проектирования и следуем лучшим практикам UI/UX дизайна для создания конкурентоспособного продукта.',
    price: 'От 500 000 ₽',
    duration: '21-30 ДЕНЬ',
    stages: [
      { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
      { title: 'Аналитика', duration: '4 ДНЯ', price: 25000 },
      { title: 'Исследования', duration: '4 ДНЯ', price: 25000 },
      { title: 'Карта', duration: '3 ДНЯ', price: 30000 },
      { title: 'Проектирование', duration: '5 ДНЕЙ', price: 45000 },
      { title: 'Прототип', duration: '7 ДНЕЙ', price: 50000 },
      { title: 'Дизайн', duration: '10 ДНЕЙ', price: 70000 },
      { title: 'Дизайн-система', duration: '6 ДНЕЙ', price: 45000 },
      { title: 'Адаптивы', duration: '5 ДНЕЙ', price: 40000 },
      { title: 'Анимация', duration: '5 ДНЕЙ', price: 35000 },
      { title: 'Микроанимации', duration: '4 ДНЯ', price: 30000 },
      { title: 'Макет', duration: '3 ДНЯ', price: 25000 },
    ],
  },
  {
    title: 'БРЕНДИНГ',
    text: 'Разрабатываем целостную айдентику, которая отражает ценности и философию вашего бренда. Создаем запоминающийся визуальный язык, который выделяет вас среди конкурентов и остается в памяти целевой аудитории. Формируем полноценную систему визуальных коммуникаций, от логотипа до корпоративных материалов. Обеспечиваем последовательность бренда во всех точках контакта с аудиторией, создавая сильный и узнаваемый образ.',
    price: 'От 300 000 ₽',
    duration: '21-30 ДЕНЬ',
    stages: [
      { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
      { title: 'Аналитика', duration: '4 ДНЯ', price: 20000 },
      { title: 'Исследования', duration: '3 ДНЯ', price: 20000 },
      { title: 'Позиционирование', duration: '3 ДНЯ', price: 25000 },
      { title: 'Разработка концепции', duration: '5 ДНЕЙ', price: 35000 },
      { title: 'Логотип и айдентика', duration: '7 ДНЕЙ', price: 50000 },
      { title: 'Фирменный стиль', duration: '6 ДНЕЙ', price: 45000 },
      { title: 'Брендбук', duration: '5 ДНЕЙ', price: 35000 },
      { title: 'Гайдлайн', duration: '4 ДНЯ', price: 30000 },
      { title: 'Подготовка макетов', duration: '3 ДНЯ', price: 20000 },
    ],
  },
]

const vlistLists = [
  {
    title: 'Наши услуги',
    list: [
      {
        icon: 'IconCross',
        title: 'Консультация юриста',
        text: 'Профессиональная юридическая консультация по любым правовым вопросам',
        link: '/services/consultation',
      },
      {
        icon: 'IconCross',
        title: 'Составление документов',
        text: 'Подготовка договоров, исков, заявлений и других юридических документов',
        link: '/services/documents',
      },
      {
        icon: 'IconCross',
        title: 'Представительство в суде',
        text: 'Защита ваших интересов во всех судебных инстанциях',
        link: '/services/court',
      },
    ],
  },
  {
    title: 'Практики',
    list: [
      {
        icon: 'IconCross',
        title: 'Семейное право',
        text: 'Разводы, алименты, раздел имущества, усыновление',
        link: '/practices/family',
      },
      {
        icon: 'IconCross',
        title: 'Уголовное право',
        text: 'Защита по уголовным делам любой сложности',
        link: '/practices/criminal',
      },
      {
        icon: 'IconCross',
        title: 'Корпоративное право',
        text: 'Юридическое сопровождение бизнеса',
        link: '/practices/corporate',
      },
    ],
  },
  {
    title: 'Преимущества',
    list: [
      {
        icon: 'IconCross',
        title: 'Опыт работы',
        text: 'Более 10 лет успешной практики в юридической сфере',
        link: '/about/experience',
      },
      {
        icon: 'IconCross',
        title: 'Команда профессионалов',
        text: 'Квалифицированные юристы с профильным образованием',
        link: '/about/team',
      },
      {
        icon: 'IconCross',
        title: 'Индивидуальный подход',
        text: 'Внимательное отношение к каждому клиенту',
        link: '/about/approach',
      },
    ],
  },
  {
    title: 'Отзывы',
    list: [
      {
        icon: 'IconCross',
        title: 'Иван Петров',
        text: 'Благодарен за профессиональную помощь в решении моего вопроса',
        link: '/reviews/1',
      },
      {
        icon: 'IconCross',
        title: 'ООО "Стройком"',
        text: 'Надежный партнер в юридических вопросах нашей компании',
        link: '/reviews/2',
      },
      {
        icon: 'IconCross',
        title: 'Анна Сидорова',
        text: 'Быстро и качественно помогли решить семейный спор',
        link: '/reviews/3',
      },
    ],
  },
]

const dropdownList = [
  {
    title: 'Консультация юриста',
    text: 'Профессиональная юридическая консультация по любым правовым вопросам',
    link: '/services/consultation',
  },
  {
    title: 'Составление документов',
    text: 'Подготовка договоров, исков, заявлений и других юридических документов',
    link: '/services/documents',
  },
  {
    title: 'Представительство в суде',
    text: 'Защита ваших интересов во всех судебных инстанциях',
    link: '/services/court',
  },
]
</script>

<style></style>
