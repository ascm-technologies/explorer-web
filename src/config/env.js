const isProd = import.meta.env.PROD;

export const ENV = {
  SUPABASE_URL: isProd
    ? import.meta.env.VITE_SUPABASE_URL_PROD
    : import.meta.env.VITE_SUPABASE_URL_DEV,

  SUPABASE_ANON_KEY: isProd
    ? import.meta.env.VITE_SUPABASE_ANON_KEY_PROD
    : import.meta.env.VITE_SUPABASE_ANON_KEY_DEV,
};