import Cookies from 'js-cookie';
import {NotFoundElement} from './errors';
import {type TypeSendMessageElements, sendMessageElements} from './uiElements';
import {colon} from './consts';

function addMessageToPage(createMessage: (sendMessageElements: TypeSendMessageElements) => Node, formInputValue: string) {
	if (sendMessageElements.templateRoot === null) {
		throw new NotFoundElement('elements.templateRoot');
	}

	const templateContent = createMessage(sendMessageElements);
	sendMessageElements.templateRoot.append(templateContent);

	const messagesElementList = document.querySelectorAll(`
      .chat-body-content__text
    `);
	const userNameList = document.querySelectorAll('.user-name');
	const lastMessageElement = messagesElementList[messagesElementList.length - 1];
	const lastUserElement = userNameList[userNameList.length - 1];

	if (lastMessageElement === undefined || lastUserElement === undefined) {
		throw new NotFoundElement('lastElement');
	}

	const userName = Cookies.get('userName');
	if (userName === undefined) {
		// Сделать свою ошибку, на то. Если имя пользователя не найдено.
		// Что делать в таком случае? Надо придумать...
		// Скорре всего сделать, что-бы пользователь авторизировался заного.
		throw new Error('username not found');
	}

	lastUserElement.textContent = userName + colon;
	lastMessageElement.textContent = formInputValue;

	if (sendMessageElements.templateRoot.lastElementChild === null) {
		throw new NotFoundElement('elements.templateRoot.lastElementChild');
	}

	sendMessageElements.templateRoot.lastElementChild.classList.add('posted-by-me');
}

export {addMessageToPage};
