import { GLOBAL_CONFIG } from '~/configs/global'

export const QUESTIONS_CREATE_CONFIG = Object.freeze({
  desktopPadding: {
    top: '32px',
    bottom: '32px'
  },
  mobilePadding: {
    top: '16px',
    bottom: '16px'
  },
  block_fields: {
    isBackground: true,
    formSettings: {
      title: 'Задайте вопрос юристу онлайн',
      subtitle: 'Опишите вашу ситуацию подробнее, чтобы юрист мог более детально в ней сориентироваться и дать на него квалифицированный ответ',
      buttonText: 'Задать вопрос',
      showDescription: true,
      showLabel: true,
      body: ['name', 'phone', 'message'],
      description: GLOBAL_CONFIG.formDescriptionSecondary,
    },
    text: `<p class="mt-4">Высокий темп жизни требует максимальной мобильности, умения незамедлительно принимать правильные решения. Но без профессиональной помощи такое не всегда реально. В большей степени это касается юридических вопросов. Если вы столкнулись с проблемой, требующей участия специалистов, на нашем сайте можно бесплатно задать вопрос юристу.</p>
    <p class="mt-4">Это намного удобнее, чем личная встреча в офисе. И необходимую информацию получите в кратчайшие сроки. Сервис «100 Юристов» работает круглосуточно и бесплатно для тех, кто не знает, как поступить в той или иной ситуации.</p>`
  },
})
