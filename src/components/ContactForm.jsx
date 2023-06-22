import React from 'react';
import css from './Contacts.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk, addContactsThunk } from '../store/contactsThunk';
// import { addContact } from '../store/sliceContacts';


export default function NewContactForm(){

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items)
  
  // console.log(contacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
 
  
  const reset = () => {
    setName('');
    setNumber('');
  };
  



  const handleSubmit = e => {
    const contact = {
      name: name,
      phone: number,
    };
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactsThunk(contact));
    }
    reset();
  };
// console.log(addContact())

  return(
    <form className={css.form} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          className={css.input}          
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          className={css.input} 
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          type="submit"
          className={css.button}
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
  )
}