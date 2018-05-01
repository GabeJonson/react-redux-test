export const getStore = name => localStorage.getItem(name);
export const setStore = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
};
