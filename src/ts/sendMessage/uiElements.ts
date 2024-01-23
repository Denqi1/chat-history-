type TypeSendMessageElements = {
	formInput: HTMLInputElement;
	form: HTMLFormElement;
	template: HTMLTemplateElement;
	templateRoot: HTMLUListElement;
	templateTextList: NodeListOf<HTMLParagraphElement>;
	templateUserList: NodeListOf<HTMLParagraphElement>;
};

const sendMessageElements: TypeSendMessageElements = {
	formInput: document.querySelector('.chat-footer-form__input')!,
	form: document.querySelector('.chat-footer-form')!,
	template: document.querySelector('#message')!,
	templateRoot: document.querySelector('.chat-body-content__list')!,
	templateTextList: document.querySelectorAll('.chat-body-content__text'),
	templateUserList: document.querySelectorAll('.user-name'),
};

export {sendMessageElements, type TypeSendMessageElements};
