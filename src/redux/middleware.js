import {CREATE_POST} from "./types";
import {showAlert} from "./action";

const forbidden = [
    'fuck',
    'php',
    'spam'
];

export const forbiddenWordsMiddleware = ({dispatch}) => (next) => (action) => {
    if (action.type === CREATE_POST) {
        const found = forbidden.some((w) => action.payload.title.includes(w));
        if (found) {
            return dispatch(showAlert('Вы спамер!'));
        }
    }
    return next(action);

};
