import {type TypeSendMessageElements} from './uiElements';

function createMessage(sendMessageElements: TypeSendMessageElements) {
	sendMessageElements.templateRoot.classList.add('chat-body-content__list');
	return sendMessageElements.template.content.cloneNode(true);
}

export {createMessage};
