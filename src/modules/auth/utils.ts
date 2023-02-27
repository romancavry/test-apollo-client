import { TOKEN_LS_KEY } from './constants';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_LS_KEY, JSON.stringify(token));
};

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_LS_KEY);

  if (token) {
    return JSON.parse(token);
  }

  return null;
};
