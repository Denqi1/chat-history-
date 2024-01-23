"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationModalButtonSetHandler = exports.closeSettingsModalHandler = exports.openSettingsModalHandler = exports.closeModal = exports.openModal = exports.createMessage = exports.formHandler = void 0;
const view_1 = require("./view");
const uiElements_1 = require("./uiElements");
const request_1 = require("./request");
function formHandler(event) {
    event.preventDefault();
    if (uiElements_1.elements.formInput === null) {
        throw new Error('element formInput not found');
    }
    const formInputValue = uiElements_1.elements.formInput.value.trim();
    if (!formInputValue) {
        uiElements_1.elements.formInput.value = '';
        return;
    }
    (0, view_1.addMessageToPage)(createMessage, formInputValue);
    const formInput = uiElements_1.elements.formInput;
    formInput.value = '';
}
exports.formHandler = formHandler;
function authorizationModalButtonSetHandler(event) {
    event.preventDefault();
    closeAuthorizationModal();
    const authorizationConfirmModal = uiElements_1.elements.authorizationConfirmModal;
    openModal(authorizationConfirmModal);
}
exports.authorizationModalButtonSetHandler = authorizationModalButtonSetHandler;
function closeAuthorizationModal() {
    const authorizationModal = uiElements_1.elements.authorizationModal;
    if (authorizationModal === null) {
        throw new Error('Не найдена кнопка получения кода');
    }
    authorizationModal.removeEventListener('click', request_1.authorizationModalButtonGetHandler);
    closeModal(authorizationModal);
}
function createMessage(templateRoot) {
    templateRoot.classList.add('chat-body-content__list');
    const template = uiElements_1.elements.template;
    const templateContent = template.content.cloneNode(true);
    return templateContent;
}
exports.createMessage = createMessage;
function openSettingsModalHandler() {
    const settingsModal = uiElements_1.elements.settingsModal;
    settingsModal.showModal();
}
exports.openSettingsModalHandler = openSettingsModalHandler;
function closeSettingsModalHandler() {
    const settingsModal = uiElements_1.elements.settingsModal;
    settingsModal.close();
}
exports.closeSettingsModalHandler = closeSettingsModalHandler;
function openModal(targetModal) {
    targetModal.showModal();
}
exports.openModal = openModal;
function closeModal(targetModal) {
    targetModal.close();
}
exports.closeModal = closeModal;
//# sourceMappingURL=logic.js.map