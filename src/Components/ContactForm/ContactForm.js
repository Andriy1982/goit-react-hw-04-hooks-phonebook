import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactFormStyledComponent';

export default function Contactform({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  console.log(onAddContact);

  const handleSubmit = e => {
    e.preventDefault();
    // const { name, number } = this.state;
    onAddContact({ id: uuidv4(), name, number });
    setName('');
    setNumber('');
    // this.setState({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          name="name"
          onChange={handleInput}
          placeholder="Name*"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="number"
          value={number}
          name="number"
          onChange={handleInput}
          placeholder="111-11-11*"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

// export default class ContactForm extends Component {
//   static propTypes = {
//     onAddContact: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleInput = ({ target: { name, value } }) => {
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContact({ id: uuidv4(), name, number });
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormLabel>
//           Name
//           <FormInput
//             type="text"
//             value={name}
//             name="name"
//             onChange={this.handleInput}
//             placeholder="Name*"
//             required
//           />
//         </FormLabel>
//         <FormLabel>
//           Number
//           <FormInput
//             type="number"
//             value={number}
//             name="number"
//             onChange={this.handleInput}
//             placeholder="111-11-11*"
//             required
//           />
//         </FormLabel>
//         <FormButton type="submit">Add contact</FormButton>
//       </Form>
//     );
//   }
// }
