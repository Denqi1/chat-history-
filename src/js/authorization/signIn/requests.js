async function makeAuthorizationRequest(postData, url) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    return response.json();
}
export { makeAuthorizationRequest };
//# sourceMappingURL=requests.js.map