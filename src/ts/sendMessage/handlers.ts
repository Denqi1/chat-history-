import {sendMessageElements} from './uiElements';
import {addMessageToPage} from './view';
import {createMessage} from './logic';
import {NotFoundElement} from './errors';
import {empty} from './consts';

function addMessageFormHandler(event: Event) {
	event.preventDefault();

	if (sendMessageElements.formInput === null) {
		throw new NotFoundElement('elements.formInput');
	}

	const inputValue = sendMessageElements.formInput.value.trim();

	if (!inputValue) {
		sendMessageElements.formInput.value = empty;
		// Сдесь сделать какую нибудь всплывашу или надпись в UI,
		// что пользователь хотел отправить пустое сообщение и оно не отправилось
		return;
	}

	addMessageToPage(createMessage, inputValue);
	sendMessageElements.formInput.value = empty;
}

export {addMessageFormHandler};
