import fetch1c from '@/server/1c/fetch';

import { publicProcedure } from '../../procedures';
import { GroupsReadResponseBody } from './schema';

export const generateGroupsReadUrl = (groupId: string) => {
  return `/groups/${groupId}`;
};

const groupsRead = publicProcedure((groupId: string) =>
  fetch1c<GroupsReadResponseBody>(generateGroupsReadUrl(groupId))
);

export default groupsRead;
