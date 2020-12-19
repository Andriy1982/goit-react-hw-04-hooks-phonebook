import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './ContactsStyledComponent';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
}

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default Contacts;
