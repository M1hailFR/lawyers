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
    title: 'Задайте вопрос юристу онлайн',
    subtitle: 'Опишите вашу ситуацию подробнее, чтобы юрист мог более детально в ней сориентироваться и дать на него квалифицированный ответ',
    formSettings: {
      buttonText: 'Задать вопрос',
      showDescription: true,
      body: ['name', 'phone', 'message'],
      description: `Отправляя форму, вы даете <mark><a href="/">согласие</a></mark> на обработку своих персональных данных и
                    соглашаетесь с
                    <mark><a href="/">политикой обработки персональных данных</a></mark>`,
    },
  },
})
