import genericFunctions from '../../utility/genericFunctions';
import {
    UPDATE_SELECTED_OUTLET,
    UPDATE_OUTLET_LIST,
    UPDATE_LOADER_STATE,
} from '../actions/AppState';
import { appState } from '../default/AppState'
import { color, cyan, cyanBG, cyanBright } from 'console-log-colors';

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
    return state;
}

