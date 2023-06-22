// Импортируем функцию createAsyncThunk из пакета @reduxjs/toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Импортируем функции addContacts, delContacts и getContacts из файла 'redux/operations'
import { addContacts, delContacts, fetchContacts } from './api';

 // Создаем асинхронное Thunk-действие с помощью функции createAsyncThunk
 export const getContactsThunk = createAsyncThunk(
	// Указываем строку действия (action) для получения всех контактов
	'contacts/fetchAll',
	async (_, { reject }) => {
		try {
			// Вызываем функцию fetchContacts для получения контактов
			const data = fetchContacts();
			// Возвращаем полученные данные в качестве результата Thunk-действия
			return data;
		} catch (error) {
			// В случае ошибки, вызываем reject с сообщением об ошибке
			return reject(error.message);
		}
	}
 )

  // Создаем асинхронное Thunk-действие для добавления контакта
  export const addContactsThunk = createAsyncThunk(
	// Указываем строку действия (action) для добавления контакта
	'contacts/addContact',
	async (contact, { reject }) => {
		try {
			// Вызываем функцию addContacts для добавления контакта
			const data = addContacts(contact);
			// Возвращаем полученные данные в качестве результата Thunk-действия
			return data;
		} catch (error) {
			// В случае ошибки, вызываем reject с сообщением об ошибке
			return reject(error.message);
		}
	}
 )

 // Создаем асинхронное Thunk-действие для удаления контакта
 export const delContactsThunk = createAsyncThunk(
	 // Указываем строку действия (action) для удаления контакта
	'contacts/deleteContacts',
	async (id, { reject }) => {
		try {
			// Вызываем функцию delContacts для удаления контакта
			const data = delContacts(id);
			// Возвращаем полученные данные в качестве результата Thunk-действия
			return data;
		} catch (error) {
			// В случае ошибки, вызываем reject с сообщением об ошибке
			return reject(error.message);
		}
	}
 )
 // Здесь мы используем функцию createAsyncThunk из пакета @reduxjs/toolkit для создания асинхронных Thunk-действий.
// getContactsThunk - Thunk-действие для получения всех контактов. Оно вызывает функцию getContacts и возвращает полученные данные или отклоняет с ошибкой.
// addContactsThunk - Thunk-действие для добавления контакта. Оно вызывает функцию addContacts с переданным контактом и возвращает полученные данные или отклоняет с ошибкой.
// delContactsThunk - Thunk-действие для удаления контакта. Оно вызывает функцию delContacts с переданным идентификатором контакта и возвращает полученные данные или отклоняет с ошибкой.
// Эти Thunk-действия позволяют выполнять асинхронные операции в Redux, взаимодействуя с внешними источниками данных, и обрабатывать успешные и ошибочные сценарии.