const debounce = (func, delay) => {
  let inDebounce;

  return function() {
    let args = arguments;
    let context = this;

    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

export default debounce;
