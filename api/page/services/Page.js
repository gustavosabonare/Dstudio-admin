'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/services.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params) {
    return strapi.query('page').find(params, ['background', 'banner.events.image', 'carrousels.events.image', 'cards.image', 'playlist.videos.image']);
  },
};
