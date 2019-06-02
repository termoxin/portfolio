export const getItem = name => {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {
    return {};
  }
};

export const setItem = (name, value) => {
  try {
    return localStorage.setItem(name, JSON.stringify(value));
  } catch (err) {
    return {};
  }
};
