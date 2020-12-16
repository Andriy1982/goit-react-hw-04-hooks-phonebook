import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './ContactsStyledComponent';

export default class Contacts extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
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
}
