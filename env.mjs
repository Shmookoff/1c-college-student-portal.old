import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    S1C_HOST: z.string().url(),
    S1C_USERNAME: z.string(),
    S1C_PASSWORD: z.string(),
  },
  client: {},
  runtimeEnv: {
    S1C_HOST: process.env.S1C_HOST,
    S1C_USERNAME: process.env.S1C_USERNAME,
    S1C_PASSWORD: process.env.S1C_PASSWORD,
  },
});
