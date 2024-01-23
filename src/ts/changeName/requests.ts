import {type TypeGetUserInfo} from '../authorization/signIn/types';
import {type TypeObjectNewName} from './types';

async function makeChangeNameRequest(newName: TypeObjectNewName, url: string, token: string | undefined) {
	const response = await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(newName),
	});
	return response.json();
}

async function getUserInfoRequest(url: string, token: string | undefined): Promise<TypeGetUserInfo> {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<TypeGetUserInfo>;
}

export {makeChangeNameRequest, getUserInfoRequest};
