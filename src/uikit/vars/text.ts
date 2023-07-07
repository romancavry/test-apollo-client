const FONTS = {
  OPEN_SANS: 'Open Sans',
};

const PRIMARY_FONT = `
  font-family: ${FONTS.OPEN_SANS};
`;

const H1 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
`;

const MAIN = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const MAIN_BOLD = `
  ${MAIN};
  font-weight: 600;
`;

export default {
  H1,
  MAIN,
  MAIN_BOLD,

  PRIMARY_FONT,
};
