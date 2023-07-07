import * as React from 'react';
import type { IndexRouteProps } from 'react-router-dom';

import Chat from './Chat';

const definition: IndexRouteProps = {
  element: <Chat />,
  index: true,
};

export default definition;
