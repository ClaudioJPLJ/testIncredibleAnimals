export default function debounce(callback, delay) {
  let timer;

  return () => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(callback, delay);
  };
}
