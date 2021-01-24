const appLoader = document.getElementById('app-loader');

export const showAppLoader = () => appLoader.classList.add('spinner');
export const hideAppLoader = () => appLoader.classList.remove('spinner');