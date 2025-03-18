const emptyRule = (value) => {
  return !!value || 'Обязательно для заполнения';
};

export const namePules = [
  emptyRule,
  (value) => {
    return value.length >= 2 || 'Поле должно содержать больше 1 символа';
  },
  (value) => {
    return /^[а-яёa-z\s]+$/i.test(value) || 'Поле должно содержать только буквы';
  }
];

export const phonePules = [
  emptyRule,
  (value) => {
    return /^(\+?7|8)9\d{9}$/i.test(value.replace(/\D/g, '')) || 'Поле должно быть действительным номером телефона';
  }
];

export const emailPules = [
  (value) => {
    return (
      !value || /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value) || 'Поле должно быть действительной почтой'
    );
  }
];