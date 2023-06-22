import { configureStore } from '@reduxjs/toolkit'; // Импортируем функцию configureStore из пакета @reduxjs/toolkit для создания хранилища Redux

import { sliceContacts } from './sliceContacts'; // Импортируем срез (slice) sliceContact из файла './sliceContact'
import { sliceFilter } from './sliceFilter'; // Импортируем срез (slice) sliceFilter из файла './sliceFilter'

export const store = configureStore({
  // Создаем хранилище Redux с помощью функции configureStore
  reducer: {
    contacts: sliceContacts.reducer, // Устанавливаем срез sliceContact как редьюсер для состояния контактов в хранилище
    filter: sliceFilter.reducer, // Устанавливаем срез sliceFilter как редьюсер для состояния фильтра в хранилище
  },
});

















// // import { configureStore } from "@reduxjs/toolkit";
// // import { sliceContacts } from './sliceContacts';
// // import { sliceFilter } from './sliceFilter';

// // export const store = configureStore({
// // 	reducer: {
// // 		contacts: sliceContacts.reducer,
// // 		filter: sliceFilter.reducer,
// // 	}
// // });
// 


// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { sliceContacts } from './sliceContacts';
// import { sliceFilter } from './sliceFilter';

// // Конфигурация для сохранения состояния в localStorage с использованием redux-persist
// const persistConfig = {
//   key: 'contacts', // Ключ, по которому состояние будет сохраняться
//   storage, // Хранилище, в данном случае, localStorage
//   whiteList: ['contacts'], // Список ключей состояния, которые нужно сохранить
// };

// // Комбинирование reducer'ов с использованием combineReducers из Redux Toolkit
// const rootReducer = combineReducers({
//   contacts: sliceContacts.reducer,
//   filter: sliceFilter.reducer,
// });

// // Создание персистентного reducer'а с использованием persistReducer из redux-persist
// const persistReducerContacts = persistReducer(persistConfig, rootReducer);

// // Создание и экспорт Redux store с использованием configureStore из Redux Toolkit
// export const store = configureStore({
//   reducer: persistReducerContacts, // Передача персистентного reducer'а в store
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Игнорирование определенных actions для сериализации
//       },
//     }),
// });

// // Создание и экспорт персистора для Redux store
// export const persistR = persistStore(store);


// // Этот код создает Redux store с использованием Redux Toolkit и настраивает сохранение состояния с помощью redux-persist. 
// // Весь стейт разделен на два редьюсера - sliceContact.reducer и sliceFilter.reducer, которые объединяются в rootReducer с помощью combineReducers.
// // Затем rootReducer передается в persistReducer вместе с конфигурацией persistConfig, чтобы создать персистентный редьюсер persistReducerContacts.
// // Функция configureStore используется для создания Redux store с переданным persistReducerContacts в качестве редьюсера. Здесь также настраивается 
// // middleware для проверки сериализуемости действий, и некоторые действия (FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER) игнорируются при сериализации.
// // Наконец, persistStore используется для создания и экспорта персистора, который используется для сохранения состояния Redux store в localStorage.
// // Комментарии помогают понять каждую часть кода и объясняют, что делает каждый шаг в конфигурации Redux store с использованием Redux Toolkit и redux-persist.
// 