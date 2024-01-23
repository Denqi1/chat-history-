import {type TypePostData} from './types';

async function makeAuthorizationRequest(postData: TypePostData, url: string) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(postData),
	});

	return response.json();
}

export {makeAuthorizationRequest};
