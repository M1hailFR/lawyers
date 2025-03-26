import { isString } from '~/core/utils';

export const isExternalUrl = (link) => {
  if (!isString(link)) return false;

  if (link.startsWith('mailto:') ||
      link.startsWith('tel:') ||
      link.startsWith('sms:') ||
      link.startsWith('whatsapp:') ||
      link.startsWith('viber:') ||
      link.startsWith('telegram:')) {
    return true;
  }

  let url;

  try {
    url = new URL(link);
  } catch (e) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};
