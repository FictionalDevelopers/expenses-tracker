const { SITE_PROTOCOL, SITE_DOMAIN, SITE_PORT } = process.env;

export default () => `${SITE_PROTOCOL}${SITE_DOMAIN}:${SITE_PORT}`;
