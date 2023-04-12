import { request } from '@strapi/helper-plugin';

const contactsRequest = {
  getAllContacts: async () => {
    return await request('/contacts', { method: 'GET' });
  }
}

export default contactsRequest;