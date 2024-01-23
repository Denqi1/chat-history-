type TypePostData = {
	email: string;
};

type TypeGetUserInfo = {
	email: string;
	name: string;
	token: string;
	__v: number;
	_id: string;
	message?: string;
};

type TypeAuthorizationElements = {
	modal: HTMLDialogElement;
	modalInput: HTMLInputElement;
	modalButtonGet: HTMLButtonElement;
	modalButtonEnter: HTMLButtonElement;
	modalInputValidation: HTMLParagraphElement;
};

type TypeAuthorizationConfirmElements = {
	modal: HTMLDialogElement;
	modalInput: HTMLInputElement;
	modalButton: HTMLButtonElement;
	modalBackButton: HTMLButtonElement;
	modalValidationTokenResult: HTMLParagraphElement;
};

export type {TypePostData, TypeAuthorizationElements, TypeAuthorizationConfirmElements, TypeGetUserInfo};
