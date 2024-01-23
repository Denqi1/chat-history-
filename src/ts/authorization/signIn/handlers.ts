import {authorizationConfirmElements, authorizationElements} from './uiElements';
import {makeAuthorizationRequest} from './requests';
import {authorizationKey, emailRegexp, emptyValue, messageEmailIsInvalid, messageEmailIsValid, url} from './consts';
import {closeAuthorizationModal} from './view';
import {type TypePostData} from './types';
import Cookies from 'js-cookie';
import {isEmailValid} from './logic';
import {getUserInfoRequest} from '../../changeName/requests';
import {settingsElements} from '../../changeName/uiElements';
import {getUrl} from '../../changeName/consts';
import {renderHistoryMessages} from '../../messageHistoryUpload/renderMessages';
import {createMessage} from '../../sendMessage/logic';
import {sendMessageElements} from '../../sendMessage/uiElements';
import {getHistoryMessages} from '../../messageHistoryUpload/requests';
import {historyUrl} from '../../messageHistoryUpload/consts';

async function authorizationGetHandler(event: Event) {
	event.preventDefault();

	if (authorizationElements.modalButtonGet === null) {
		// Обработать по нормальному эту ошибку
		throw new Error('Кнопки получиь код не найдено');
	}

	const email = authorizationElements.modalInput.value;
	const postData: TypePostData = {
		email,
	};

	if (!isEmailValid(email, emailRegexp)) {
		return;
	}

	authorizationElements.modalInputValidation.textContent = messageEmailIsValid;
	authorizationElements.modalInputValidation.classList.toggle('code-sent');

	try {
		await makeAuthorizationRequest(postData, url);
	} catch (error) {
		// Обработать ошибку
		console.error(error);
	}

	closeAuthorizationModal();
	authorizationConfirmElements.modal.showModal();

	authorizationElements.modalInputValidation.classList.toggle('code-sent');
}

function authorizationSetHandler(event: Event) {
	event.preventDefault();

	closeAuthorizationModal();
	authorizationConfirmElements.modal.showModal();

	if (authorizationConfirmElements.modalButton === null) {
		// Обработать по человечески ошибку
		throw new Error('authorizationConfirmElements.modalButton такого элемента не найдено');
	}
}

async function authorizedConfirmHandler(event: Event) {
	event.preventDefault();

	const inputValue = authorizationConfirmElements.modalInput.value.trim();

	try {
		const data = await getUserInfoRequest(getUrl, inputValue);

		if (data.message === 'Authentication failed!') {
			throw new Error('Invalid token');
		}
	} catch (error) {
		authorizationConfirmElements.modalValidationTokenResult.textContent = 'Error: Invalid token!';

		throw new Error('Invalid token');
	}

	Cookies.set(authorizationKey, inputValue);

	authorizationConfirmElements.modal.close();

	await renderHistoryMessages(createMessage, sendMessageElements, inputValue);
}

function authorizationConfirmBackHandler() {
	authorizationConfirmElements.modal.close();
	authorizationElements.modal.showModal();
}

function validationInputHandler() {
	if (authorizationElements.modalInputValidation === null) {
		throw new Error('Не найден authorizationElements.modalInputValidation');
	}

	if (isEmailValid(authorizationElements.modalInput.value, emailRegexp)) {
		authorizationElements.modalInputValidation.textContent = emptyValue;
	} else {
		authorizationElements.modalInputValidation.textContent = messageEmailIsInvalid;
	}
}

export {authorizationGetHandler, authorizationSetHandler, validationInputHandler, authorizationConfirmBackHandler, authorizedConfirmHandler};
