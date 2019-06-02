const throttle = (func, delay) => {
  let isThrottle;
  return function() {
    let args = arguments;
    let context = this;
    if (!isThrottle) {
      isThrottle = true;
      func.apply(context, args);
      setTimeout(() => (isThrottle = false), delay);
    }
  };
};

export default throttle;
