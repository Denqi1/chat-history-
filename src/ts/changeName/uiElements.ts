import {type TypeSettingsElements} from './types';

const settingsElements: TypeSettingsElements = {
	modal: document.querySelector('#settings-popup')!,
	modalInput: document.querySelector('.settings__item-form-input')!,
	modalSetButton: document.querySelector('.settings__item-form-button')!,
	modalCloseButton: document.querySelector('#settings-popup-close-button')!,
	modalOpenButton: document.querySelector('#settings-popup-open-button')!,
};

export {settingsElements};
