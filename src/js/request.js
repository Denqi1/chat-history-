"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationModalButtonGetHandler = void 0;
const uiElements_1 = require("./uiElements");
const consts_1 = require("./consts");
function makePostRequest(postData, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        return response.json();
    });
}
function authorizationModalButtonGetHandler(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        if (uiElements_1.elements.authorizationModalButtonGet === null) {
            throw new Error('Кнопки получиь код не найдено');
        }
        const authorizationModalInput = uiElements_1.elements.authorizationModalInput;
        const email = authorizationModalInput.value;
        const postData = {
            email,
        };
        try {
            yield makePostRequest(postData, consts_1.url);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.authorizationModalButtonGetHandler = authorizationModalButtonGetHandler;
//# sourceMappingURL=request.js.map