import 'server-only';

import auth from './auth';
import groups from './groups';
import schedule from './schedule';
import students from './students';

const studentPortalApi = {
  auth,
  students,
  groups,
  schedule,
};

export default studentPortalApi;
