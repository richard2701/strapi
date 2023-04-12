/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import contactsRequest  from '../../api/contact';
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";


import { EmptyStateLayout } from '@strapi/design-system';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const rep = await contactsRequest.getAllContacts();
      console.log('rep', rep);
      setContacts(rep);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getContacts();
  }, [])
  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <Layout>
      <BaseHeaderLayout
        title="Reservas realizadas"
        subtitle="Listao de reservas realizadas"
        as="h2"
      />
      <div>
        <h1>Contacts</h1>
        <div>
          {/* <input type="date" onChange={handleDateChange} value={selectedDate}></input> */}
  {/*         <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
          /> */}
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default HomePage;
