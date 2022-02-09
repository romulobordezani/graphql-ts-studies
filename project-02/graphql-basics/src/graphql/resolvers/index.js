/**
 * file: src/graphql/resolvers/index.js
 * description: file responsible for execute all the resolvers in the application.
 * date: 02/05/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { userQueries, userMutations, userFields } from './user';
import { postQueries, postMutations, postFields } from './post';
import { commentQueries, commentMutations, commentFields } from './comment';
import Subscription from './subscriptions';

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
    ...commentQueries,
  },

  Mutation: {
    ...userMutations,
    ...postMutations,
    ...commentMutations,
  },
  Subscription,
  ...userFields,
  ...postFields,
  ...commentFields,
};

export default resolvers;