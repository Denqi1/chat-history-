async function makeChangeNameRequest(newName, url, token) {
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
async function getUserInfoRequest(url, token) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
    return response.json();
}
export { makeChangeNameRequest, getUserInfoRequest };
//# sourceMappingURL=requests.js.map