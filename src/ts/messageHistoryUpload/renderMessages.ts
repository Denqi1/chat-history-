import {colon} from '../sendMessage/consts';
import {historyUrl} from './consts';
import {getHistoryMessages} from './requests';
import {Messages} from './typeMessages';
import {type TypeSendMessageElements} from '../sendMessage/uiElements';

async function renderHistoryMessages(createMessage: (sendMessageElements: TypeSendMessageElements) => Node, sendMessageElements: TypeSendMessageElements, token: string) {
	if (sendMessageElements.templateRoot === null) {
		throw new Error('elements.templateRoot not found');
	}

	const messagesList = await getHistoryMessages(historyUrl, token);

	messagesList?.messages.reverse().forEach(message => {
		const userName = message.user.name;
		const userMessage = message.text;

		const templateContent = createMessage(sendMessageElements);
		sendMessageElements.templateRoot.append(templateContent);

		const templateItem = sendMessageElements.templateRoot.lastElementChild;
		const templateItemInfo = templateItem?.firstElementChild;
		const templateUserName = templateItemInfo?.firstElementChild;
		const templateUserMessage = templateItemInfo?.lastElementChild;

		if (templateUserName && templateUserMessage) {
			templateUserName.textContent = userName + colon;
			templateUserMessage.textContent = userMessage;
		}
	});
}

export {renderHistoryMessages};
