import fetch1c from '@/server/1c/fetch';

import { publicProcedure } from '../../procedures';
import { GroupsListResponseBody } from './schema';

const groupsListUrl = '/groups';

const groupsList = publicProcedure(() => {
  return fetch1c<GroupsListResponseBody>(groupsListUrl);
});

export default groupsList;
