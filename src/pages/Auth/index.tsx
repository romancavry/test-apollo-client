import * as React from 'react';
import type { IndexRouteProps } from 'react-router-dom';

import Auth from './Auth';

const definition: IndexRouteProps = {
  element: <Auth />,
  index: true,
};

export default definition;
