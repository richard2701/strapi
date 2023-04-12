// Import Strapi's query API


module.exports = {
  async find(params) {
    const entries = await strapi.entityService.findMany('api::contact.contact', {
      ...params,
    });

    // Return the retrieved data
    return entries;
  },
};