const FONTS = {
  OPEN_SANS: 'OpenSans',
};

const PRIMARY_FONT = `
  font-family: ${FONTS.OPEN_SANS};
`;

const H1 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 48px;
  line-height: 64px;
`;

const MAIN = `
  ${PRIMARY_FONT};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export default {
  H1,
  MAIN,

  PRIMARY_FONT,
};
