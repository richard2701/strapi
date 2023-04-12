'use strict';

module.exports = ({ strapi }) => ({
  
  index: async (ctx) => {
    try {
      console.log('my-controller.js: index()', ctx.query);
      return strapi.plugin('contacts').services.myService.find(ctx.query)
    } catch (error) {
      ctx.trow(500, error)
    }
  }

  
});
