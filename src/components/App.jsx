import React from 'react';
import { useEffect } from 'react';
// import Notiflix from 'notiflix';
// import shortid from 'shortid';
import ContactList from './ContactList';
import Filter from './Filter';
import  NewContactForm  from './ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsThunk } from '../store/contactsThunk';
import css from './Contacts.module.css';




export const App = () => {
  const filter = useSelector(state => state.filter); // Получаем текущее значение фильтра из Redux
  const contacts = useSelector(state => state.contacts.items); // Получаем список контактов из Redux
  const isLoading = useSelector(state => state.contacts.isLoading); // Получаем состояние загрузки из Redux
  const error = useSelector(state => state.contacts.error); // Получаем ошибку из Redux
  const dispatch = useDispatch();

  useEffect(() => {
    // Используем хук useEffect для выполнения побочных эффектов при изменении зависимостей
    dispatch(getContactsThunk()); // Вызываем функцию getContactsThunk для получения контактов
  }, [dispatch]); // Передаем dispatch в качестве зависимости, чтобы хук следил за ее изменениями



const getVisibleContacts = () => {
  const normalizedFilter = filter.toLowerCase();
  return (contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  ));
};

const visibleContacts = getVisibleContacts();


  return (
        <div className={css.section}>
          <h1>Phonebook</h1>
    
          <NewContactForm />
          <h1>Contacts</h1>
          {/* <Filter value={} onChange={} /> */}
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>} 
          {/* <ContactList contacts={} onDeleteContact={} /> */}
          <ContactList contacts={visibleContacts} />
          {/* <ContactList /> */}
        </div>
      );


  };

































//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');


// useEffect(() => {
//   const storedContacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(storedContacts);
//   if (parsedContacts && parsedContacts.length > 0) {
//     setContacts(parsedContacts);
//   }
// }, [])

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);


// const deleteContact = contactId => {
//   setContacts(prevContacts =>
//     prevContacts.filter(contact => contact.id !== contactId)
//   );
// };

// const addContact = (name, number) => {
//   const hasName = contacts.some(
//     obj => obj.name.toLowerCase() === name.toLowerCase()
//   );

//   if (hasName) {
//     Notiflix.Notify.info(`${name} is already in contacts`);
//     return;
//   } else {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     setContacts(prevContacts => [contact, ...prevContacts]);
//   }
// };

// const changeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const visibleContacts = getVisibleContacts();


//   return (
//     <div className={css.section}>
//       <h1>Phonebook</h1>

//       <NewContactForm onSubmit={addContact} />
//       <h1>Contacts</h1>
//       <Filter value={filter} onChange={changeFilter} />

//       <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
//     </div>
//   );











