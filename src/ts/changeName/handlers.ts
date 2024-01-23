import Cookies from 'js-cookie';

import {authorizationKey, url} from '../authorization/signIn/consts';
import {settingsElements} from './uiElements';
import {getUserInfoRequest, makeChangeNameRequest} from './requests';
import {getUrl, userKey} from './consts';
import {colon} from '../sendMessage/consts';
import {changeName} from './view';
import {type TypeObjectNewName} from './types';

async function setNameHandler(event: Event) {
	event.preventDefault();

	const token = Cookies.get(authorizationKey);

	const oldName = Cookies.get(userKey) + colon;
	const newName = settingsElements.modalInput.value;
	const objectNewName: TypeObjectNewName = {
		name: newName,
	};

	Cookies.set(userKey, newName);

	try {
		await makeChangeNameRequest(objectNewName, url, token);
		await getUserInfoRequest(getUrl, token);
		console.log(getUserInfoRequest(getUrl, token));
	} catch (error) {
		console.error(error);
	}

	if (oldName) {
		changeName(newName, oldName);
	} else {
		// Что-то придумать, так лучше не оставлять
		console.log('Старое имя не было найдено.');
	}
}

function openSettingsModalHandler() {
	settingsElements.modal.showModal();
}

function closeSettingsModalHandler() {
	settingsElements.modal.close();
}

export {openSettingsModalHandler, closeSettingsModalHandler, setNameHandler};
