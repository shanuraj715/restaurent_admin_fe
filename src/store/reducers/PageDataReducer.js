import {
    UPDATE_PAGE_TITLE,
    UPDATE_HEADER_TEXT
} from '../actions/PageData';

const initialState = {
    pageTitle: import.meta.env.VITE_APP_NAME ?? "Undefined title",
    headerText: "Dashboard"
};

export function PageDataReducer(state = initialState, action) {
    if (action.type === UPDATE_PAGE_TITLE) {
        return {
            ...state,
            pageTitle: action.payload,
        };
    }
    if (action.type === UPDATE_HEADER_TEXT) {
        return {
            ...state,
            headerText: action.payload,
        };
    }
    return state;
}