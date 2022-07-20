import getConfig from 'next/config';

export function resolveHost() {
  if (typeof window !== 'undefined') {
    return getConfig().publicRuntimeConfig.config.API_HOST;
  }
  return getConfig().publicRuntimeConfig.config.INTERNAL_API_HOST;
}
