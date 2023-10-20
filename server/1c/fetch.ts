import 'server-only';

import { env } from '@/env.mjs';

import { Fetch1CError } from './error-schema';

const basicAuth = (username: string, password: string) => {
  const encodedCredentials = String.fromCodePoint(
    ...new TextEncoder().encode(`${username}:${password}`)
  );
  return `Basic ${btoa(encodedCredentials)}`;
};

const fetch1c = async <R>(url: string, init?: RequestInit): Promise<R> => {
  const parsedUrl = new URL(`${env.S1C_HOST}${url}`);

  const headers = new Headers(init?.headers);
  const Authorization = headers.get('Authorization');
  if (Authorization)
    parsedUrl.searchParams.append('Authorization', Authorization);

  headers.set('Authorization', basicAuth(env.S1C_USERNAME, env.S1C_PASSWORD));

  const response = await fetch(parsedUrl, {
    ...init,
    headers,
  });
  const text = await response.text();

  if (!response.ok) {
    throw new Fetch1CError(response, text);
  }

  const data = JSON.parse(text);
  return data;
};

export default fetch1c;
