import initializeBasicAuth from 'nextjs-basic-auth';
import getConfig from 'next/config';

export async function basicAuth(props) {
  const { config } = getConfig().publicRuntimeConfig;
  if (config.USE_BASIC_AUTH === 'true') {
    const users = [{ user: config.BASIC_USER, password: config.BASI_PASSWORD }];
    const basicAuthCheck = initializeBasicAuth({
      users,
    });
    const { req, res } = props;

    await basicAuthCheck(req, res);
  }
}
