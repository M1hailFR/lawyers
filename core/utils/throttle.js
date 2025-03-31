export default function (fn, timeout = 300) {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      fn(...args);

      if (timer) {
        clearTimeout(timer);
      }
      timer = null;
    }, timeout);
  };
}
