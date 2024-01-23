import { errorMessages } from './consts';
class NotFoundElement extends Error {
    constructor(element) {
        super(element + errorMessages.elementNotFound);
        this.name = 'NotFoundElement';
    }
}
export { NotFoundElement };
//# sourceMappingURL=errors.js.map