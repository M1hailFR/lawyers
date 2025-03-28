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
  },
})
