function isEmailValid(value: string, emailRegexp: RegExp) {
	return emailRegexp.test(value);
}

export {isEmailValid};
