import * as React from 'react';
import type { IndexRouteProps } from 'react-router-dom';

import Home from './Home';

const definition: IndexRouteProps = {
  element: <Home />,
  index: true,
};

export default definition;
