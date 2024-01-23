function createMessage(sendMessageElements) {
    sendMessageElements.templateRoot.classList.add('chat-body-content__list');
    return sendMessageElements.template.content.cloneNode(true);
}
export { createMessage };
//# sourceMappingURL=logic.js.map