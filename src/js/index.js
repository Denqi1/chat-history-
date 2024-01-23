import Cookies from 'js-cookie';
import { sendMessageElements } from './sendMessage/uiElements';
import { NotFoundElement } from './sendMessage/errors';
import { addMessageFormHandler } from './sendMessage/handlers';
import { createMessage } from './sendMessage/logic';
import { authorizationConfirmElements, authorizationElements } from './authorization/signIn/uiElements';
import { authorizationConfirmBackHandler, authorizationGetHandler, authorizationSetHandler, authorizedConfirmHandler, validationInputHandler } from './authorization/signIn/handlers';
import { settingsElements } from './changeName/uiElements';
import { closeSettingsModalHandler, openSettingsModalHandler, setNameHandler } from './changeName/handlers';
import { authorizationKey } from './authorization/signIn/consts';
import { signOutElements } from './authorization/signOut/uiElements';
import { signOutHandler } from './authorization/signOut/handlers';
import { renderHistoryMessages } from './messageHistoryUpload/renderMessages';
if (sendMessageElements.form === null || authorizationElements.modalButtonGet === null || authorizationElements.modalButtonEnter === null || settingsElements.modalOpenButton === null || settingsElements.modalCloseButton === null || settingsElements.modalSetButton === null || signOutElements.button === null) {
    // Как сделать так, что-бы не писать такоую гору?!
    // Найти решение обработки
    throw new NotFoundElement('elements.form or authorizationElements.modalButtonGet or authorizationElements.modalButtonEnter');
}
const notAuthorized = Cookies.get(authorizationKey) === undefined || Cookies.get(authorizationKey) === null;
if (notAuthorized) {
    authorizationElements.modal.showModal();
    authorizationElements.modalInput.addEventListener('input', validationInputHandler);
    authorizationElements.modalButtonGet.addEventListener('click', authorizationGetHandler);
    authorizationElements.modalButtonEnter.addEventListener('click', authorizationSetHandler);
    authorizationConfirmElements.modalBackButton.addEventListener('click', authorizationConfirmBackHandler);
    authorizationConfirmElements.modalButton.addEventListener('click', authorizedConfirmHandler);
}
sendMessageElements.form.addEventListener('submit', addMessageFormHandler);
settingsElements.modalOpenButton.addEventListener('click', openSettingsModalHandler);
settingsElements.modalCloseButton.addEventListener('click', closeSettingsModalHandler);
settingsElements.modalSetButton.addEventListener('click', setNameHandler);
signOutElements.button.addEventListener('click', signOutHandler);
const token = Cookies.get(authorizationKey);
if (token) {
    void renderHistoryMessages(createMessage, sendMessageElements, token);
}
//# sourceMappingURL=index.js.map