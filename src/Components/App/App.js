import React, { useState, useEffect } from 'react';

import Contacts from '../Contacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

const parseLocalStorage = () =>
  JSON.parse(localStorage.getItem('contacts')) ?? [];

export default function App() {
  const [contacts, setContacts] = useState(parseLocalStorage);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    setContacts(state => {
      if (state.some(el => el.name === contact.name)) {
        alert(`${contact.name} is already in contacts!`);
        return;
      }
      return [...state, contact];
    });
  };

  const handleFilter = filter => {
    setFilter(filter);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleButtonDelete = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  return (
    <section className="section">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <Filter name={filter} onChangeFilter={handleFilter} />
      )}
      <Contacts
        contacts={visibleContacts}
        onDeleteContact={handleButtonDelete}
      />
    </section>
  );
}
