export default function debounce(callback, delay) {
  let timer;

  return (...args) => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
