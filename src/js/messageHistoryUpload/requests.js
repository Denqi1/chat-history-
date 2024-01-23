async function getHistoryMessagesRequest(historyUrl, token) {
    const response = await fetch(historyUrl, {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Не удалось получить историю сообщений');
    }
    return response.json();
}
async function getHistoryMessages(historyUrl, token) {
    try {
        if (token) {
            const data = await getHistoryMessagesRequest(historyUrl, token);
            return data;
        }
    }
    catch (error) {
        console.error(error);
    }
}
export { getHistoryMessages, getHistoryMessagesRequest };
//# sourceMappingURL=requests.js.map