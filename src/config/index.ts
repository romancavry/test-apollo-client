/*
  Because library "dotenv-webpack" does not support destructing

  See: https://github.com/mrsteele/dotenv-webpack/issues/70
*/
const { REACT_APP_API_PROTOCOL } = process.env;
const { REACT_APP_API_HOST } = process.env;
const { REACT_APP_API_ENDPOINT } = process.env;

export {
  REACT_APP_API_PROTOCOL,
  REACT_APP_API_HOST,
  REACT_APP_API_ENDPOINT,
};

export const fullApiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}/${REACT_APP_API_ENDPOINT}`

