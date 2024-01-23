"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMessages = exports.addMessageToPage = void 0;
const uiElements_1 = require("./uiElements");
function addMessageToPage(createMessage, formInputValue) {
    if (uiElements_1.elements.templateRoot === null) {
        throw new Error('templateRoot не существует');
    }
    const templateContent = createMessage(uiElements_1.elements.templateRoot);
    uiElements_1.elements.templateRoot.append(templateContent);
    const messagesElementList = document.querySelectorAll(`
      .chat-body-content__text
    `);
    const lastElement = messagesElementList[messagesElementList.length - 1];
    if (lastElement === undefined) {
        throw new Error('Не могу найти последний элемент в messagesElementList');
    }
    lastElement.textContent = `Я: ${formInputValue}`;
    if (uiElements_1.elements.templateRoot.lastElementChild) {
        uiElements_1.elements.templateRoot.lastElementChild.classList.add('posted-by-me');
    }
    else {
        throw new Error('Не смог найти последний элемент в elements.templateRoot');
    }
}
exports.addMessageToPage = addMessageToPage;
function renderMessages(data, createMessage) {
    if (uiElements_1.elements.templateRoot === null) {
        throw new Error('elements.templateRoot not found');
    }
    for (let index = 0; index < data.length; index++) {
        const templateContent = createMessage(uiElements_1.elements.templateRoot);
        uiElements_1.elements.templateRoot.append(templateContent);
        const messagesElementList = document.querySelectorAll(`
      .chat-body-content__text
    `);
        messagesElementList[index].textContent = `
		  ${data[index].user}: ${data[index].message}
		`;
        if (data[index].user === 'Я' && uiElements_1.elements.templateRoot.lastElementChild !== null) {
            uiElements_1.elements.templateRoot.lastElementChild.classList.add('posted-by-me');
        }
        else if (uiElements_1.elements.templateRoot.lastElementChild === null) {
            throw new Error('Уже надоели эти ваши проверки');
        }
    }
}
exports.renderMessages = renderMessages;
//# sourceMappingURL=view.js.map