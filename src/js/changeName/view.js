import { colon } from '../sendMessage/consts';
function changeName(newName, oldName) {
    const userNames = document.querySelectorAll('.user-name');
    userNames.forEach(name => {
        if (name.textContent === oldName) {
            name.textContent = newName + colon;
        }
    });
}
export { changeName };
//# sourceMappingURL=view.js.map