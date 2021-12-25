'use strict';

const registerRouters = (fastify, routers, prefix = '') => {
  if (prefix[prefix.length - 1] !== '/') prefix += '/';

  const routersArr = Object.keys(routers);

  const extras = 'router'.length;

  for (const router of routersArr) {
    const routePrefix = prefix + router.slice(0, router.length - extras);
    fastify.register(routers[router], { prefix: routePrefix });
  }
};

module.exports = registerRouters;
