import React, { useState, useEffect } from 'react';

import Contacts from '../Contacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  // console.log(JSON.parse(localStorage.getItem('contacts')));

  useEffect(() => {
    // console.log('Nenenenen');
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

// export default class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   addContact = contact => {
//     this.setState(prevState => {
//       if (prevState.contacts.some(el => el.name === contact.name)) {
//         alert(`${contact.name} is already in contacts!`);
//         return;
//       }
//       return {
//         contacts: [...prevState.contacts, contact],
//       };
//     });
//   };

//   handleButtonDelete = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(
//           contact => contact.id !== contactId,
//         ),
//       };
//     });
//   };

//   handleFilter = filter => {
//     this.setState({ filter });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <section className="section">
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.addContact} />
//         <h2>Contacts</h2>
//         {contacts.length > 0 && (
//           <Filter name={filter} onChangeFilter={this.handleFilter} />
//         )}
//         <Contacts
//           contacts={visibleContacts}
//           onDeleteContact={this.handleButtonDelete}
//         />
//       </section>
//     );
//   }
// }
