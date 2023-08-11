/* eslint-disable no-unused-vars */

import type { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type RefetchQuery = (
  variables?: Partial<OperationVariables> | undefined,
) => Promise<ApolloQueryResult<any>>;
