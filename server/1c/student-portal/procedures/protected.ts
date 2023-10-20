import 'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import publicProcedure, { ProcedureA } from './public';

const protectedProcedure = <A extends ProcedureA, R>(
  procedure: (access_token: string, ...rest: [...A]) => Promise<R>
) => {
  return (...rest: [...A]) => {
    const access_token = cookies().get('AccessToken');
    if (!access_token) redirect('/login');
    return publicProcedure(procedure)(access_token.value, ...rest);
  };
};

export default protectedProcedure;
