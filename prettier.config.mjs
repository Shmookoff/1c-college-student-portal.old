/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    'server-only',
    '<THIRD_PARTY_MODULES>',
    '^@/lib/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/server/(.*)$',
    '^@/public/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
