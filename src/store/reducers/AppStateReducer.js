import {
    UPDATE_SELECTED_OUTLET,
    UPDATE_OUTLET_LIST,
    UPDATE_LOADER_STATE,
    HIDE_MENU_SIDEBAR,
    SHOW_MENU_SIDEBAR
} from '../actions/AppState';
import { appState } from '../default/AppState'


const initialState = { ...appState };

export function AppDataReducer(state = initialState, action) {
    if (action.type === UPDATE_OUTLET_LIST) {
        return {
            ...state,
            outletList: action.payload,
            selectedOutlet: action.payload[0]
        };
    }
    if (action.type === UPDATE_SELECTED_OUTLET) {
        return {
            ...state,
            selectedOutlet: action.payload
        };
    }
    if (action.type === UPDATE_LOADER_STATE) {
        return {
            ...state,
            loader: action.payload
        };
    }
    if (action.type === HIDE_MENU_SIDEBAR) {
        return {
            ...state,
            isSidebarVisible: false
        };
    }
    if (action.type === SHOW_MENU_SIDEBAR) {
        return {
            ...state,
            isSidebarVisible: true
        };
    }
    return state;
}

