import useSWR from 'swr';

import { GroupsListResponseBody } from '@/server/1c/student-portal/groups/list/schema';

export const useGroupsList = () =>
  useSWR<GroupsListResponseBody>('/api/groups');
