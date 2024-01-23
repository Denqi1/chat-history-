import { colon } from '../sendMessage/consts';
import { historyUrl } from './consts';
import { getHistoryMessages } from './requests';
async function renderHistoryMessages(createMessage, sendMessageElements, token) {
    if (sendMessageElements.templateRoot === null) {
        throw new Error('elements.templateRoot not found');
    }
    const messagesList = await getHistoryMessages(historyUrl, token);
    messagesList === null || messagesList === void 0 ? void 0 : messagesList.messages.reverse().forEach(message => {
        const userName = message.user.name;
        const userMessage = message.text;
        const templateContent = createMessage(sendMessageElements);
        sendMessageElements.templateRoot.append(templateContent);
        const templateItem = sendMessageElements.templateRoot.lastElementChild;
        const templateItemInfo = templateItem === null || templateItem === void 0 ? void 0 : templateItem.firstElementChild;
        const templateUserName = templateItemInfo === null || templateItemInfo === void 0 ? void 0 : templateItemInfo.firstElementChild;
        const templateUserMessage = templateItemInfo === null || templateItemInfo === void 0 ? void 0 : templateItemInfo.lastElementChild;
        if (templateUserName && templateUserMessage) {
            templateUserName.textContent = userName + colon;
            templateUserMessage.textContent = userMessage;
        }
    });
}
export { renderHistoryMessages };
//# sourceMappingURL=renderMessages.js.map