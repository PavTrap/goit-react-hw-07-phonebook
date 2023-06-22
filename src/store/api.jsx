// Импортируем библиотеку axios для работы с HTTP-запросами
import axios from "axios";   

// Устанавливаем базовый URL для API
const BASEURL = 'https://648f6a4a75a96b6644451de4.mockapi.io';

// Создаем экземпляр axios с указанным базовым URL
export const contactAPI = axios.create({
	BaseURL: '648f6a4a75a96b6644451de4.mockapi.io/api/contacts'
});

// Функция для получения всех контактов
export const fetchContacts = async () => {

	// Выполняем GET-запрос на URL `${BASEURL}/contact` с помощью axios и получаем данные
	const { data } = await contactAPI.get(`${BASEURL}/contact`);

	// Возвращаем полученные данные
	return data;
};

// Функция для добавления контакта
export const addContacts = async contact => {

	// Выполняем POST-запрос на URL `${BASEURL}/contact` с переданным контактом и получаем данные
	const { data } = await contactAPI.post(`${BASEURL}/contact`, contact);

	// Возвращаем полученные данные
	return data;
};

// Функция для удаления контакта
export const delContacts = async id => {

	// Выполняем DELETE-запрос на URL `${BASEURL}/contact/${id}` с указанным идентификатором контакта и получаем данные
	const { data } = await contactAPI.delete(`${BASEURL}/contact/${id}`);

	// Возвращаем полученные данные
	return data;
}

// Здесь мы используем библиотеку axios для выполнения HTTP-запросов к API.
// contactAPI - экземпляр axios с базовым URL для API. Он будет использоваться для выполнения запросов к серверу.
// getContacts - функция для получения всех контактов. Она выполняет GET-запрос на URL ${BASEURL}/contact с помощью axios и возвращает полученные данные.
// addContacts - функция для добавления контакта. Она выполняет POST-запрос на URL ${BASEURL}/contact с переданным контактом и возвращает полученные данные.
// delContacts - функция для удаления контакта. Она выполняет DELETE-запрос на URL ${BASEURL}/contact/${id} с указанным идентификатором контакта и возвращает полученные данные.
// Все эти функции используют await для ожидания ответа от сервера и возвращают полученные данные.