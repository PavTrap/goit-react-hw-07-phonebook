// Комментарии по коду:
// 1.createSlice - функция из @reduxjs/toolkit, которая упрощает создание среза (slice) хранилища Redux. 
// 2.Она позволяет определить имя среза, начальное состояние и редукторы для обработки экшнов.
// 3.sliceContact - созданный срез хранилища Redux, содержащий информацию о контактах. Он будет иметь имя 'contacts' и начальное 
	// состояние с полем items, isLoading и error.
// 4.extraReducers - объект, содержащий определения редукторов для обработки экшнов, связанных с асинхронными операциями получения, 
	// добавления и удаления контактов.
// 5..addCase - метод extraReducers, используемый для определения редукторов для конкретных случаев (cases). Он принимает экшн и функцию-обработчик.
// 6.getContactsThunk.pending - экшн, представляющий статус ожидания (pending) для операции получения контактов.
// 7.getContactsThunk.rejected - экшн, представляющий статус отклонения (rejected) для операции получения контактов.
// 8.getContactsThunk.fulfilled - экшн, представляющий статус выполнения (fulfilled) для операции получения контактов.
// 9.addContactsThunk.pending - экшн, представляющий статус ожидания (pending) для операции добавления контакта.
// 10.addContactsThunk.rejected - экшн, представляющий статус отклонения (rejected) для операции добавления контакта.
// 11.addContactsThunk.fulfilled - экшн, представляющий статус выполнения (fulfilled) для операции добавления контакта.
// 12.delContactsThunk.pending - экшн, представляющий статус ожидания (pending) для операции удаления контакта.
// 13.delContactsThunk.rejected - экшн, представляющий статус отклонения (rejected) для операции удаления контакта.
// 14.delContactsThunk.fulfilled - экшн, представляющий статус выполнения (fulfilled) для операции удаления контакта.
// 15.Функции-обработчики, переданные в метод addCase, обновляют состояние хранилища на основе полученных данных и статусов выполнения операций. 
	// Они изменяют значения полей items, isLoading и error в состоянии хранилища.
// 16.addContactsActions - экшн-константа, представляющая операцию добавления контакта.
// 17.delContactsActions - экшн-константа, представляющая операцию удаления контакта.
// 18.contactsReducer - редуктор, созданный на основе среза sliceContact, который будет использоваться в конфигурации хранилища Redux.
// 19.add и remove - экшны, созданные на основе среза sliceContact, представляющие операции добавления и удаления контактов соответственно.

import { createSlice } from "@reduxjs/toolkit";
import { getContactsThunk, addContactsThunk, delContactsThunk } from './contactsThunk';

export const sliceContacts = createSlice({
	name: 'contacts',
	initialState: {
		items: [
			{
				id: '', 
				name: '', 
				number: '',
			},
		],
		isLoading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(getContactsThunk.pending, (state => { state.isLoading = true }))
			.addCase(getContactsThunk.rejected, (state, { payload }) => { state.error = payload })
			.addCase(getContactsThunk.fulfilled, (state, { payload }) => {
				state.items = payload;
				state.isLoading = false;
				state.error = null
			})
			.addCase(addContactsThunk.pending, (state => { state.isLoading = true }))
      	.addCase(addContactsThunk.rejected, (state, { payload }) => { state.error = payload })
     		.addCase(addContactsThunk.fulfilled, (state, { payload }) => {
      		state.items = [payload, ...state.items];
        		state.isLoading = false;
        		state.error = null
      	})
      	.addCase(delContactsThunk.pending, (state => { state.isLoading = true }))
      	.addCase(delContactsThunk.rejected, (state, { payload }) => { state.error = payload })
      	.addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        		state.items = state.items.filter(item => item.id !== payload.id);
        		state.isLoading = false;
        		state.error = null
     		 })
	}
}) 

export const { addContact, deleteContact } = sliceContacts.actions;
export const contactsReducer = sliceContacts.reducer;
export const { add, remove } = sliceContacts.actions; 
