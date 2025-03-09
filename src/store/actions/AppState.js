import React from 'react';
import genericFunctions from '../../utility/genericFunctions';
import { color, cyan, cyanBG, cyanBright } from 'console-log-colors';

export const UPDATE_SELECTED_OUTLET = "UPDATE_SELECTED_OUTLET";
export const UPDATE_OUTLET_LIST = "UPDATE_OUTLET_LIST";
export const UPDATE_LOADER_STATE = "UPDATE_LOADER_STATE";
export const HIDE_MENU_SIDEBAR = "HIDE_MENU_SIDEBAR";
export const SHOW_MENU_SIDEBAR = "SHOW_MENU_SIDEBAR";

export const updateOutletList = (outletList) => {
    let hasError = false;
    if (!genericFunctions.typeChecker.isArray(outletList)) {
        console.log(color.bgYellowBright.black("INVALID OUTLET LIST TYPE"))
    }
    return {
        type: UPDATE_OUTLET_LIST,
        payload: hasError ? [] : outletList
    }
}

export const updateSelectedOutlet = (selectedOutlet) => {
    if (!(selectedOutlet instanceof Object && !(selectedOutlet instanceof Array))) {
        console.log(color.bgYellowBright.black("INVALID SELECTED OUTLET TYPE"))
    }
    return {
        type: UPDATE_SELECTED_OUTLET,
        payload: selectedOutlet
    }
}

export const setLoader = () => {
    return {
        type: UPDATE_LOADER_STATE,
        payload: true
    }
}

export const removeLoader = () => {
    return {
        type: UPDATE_LOADER_STATE,
        payload: false
    }
}

export const hideMenuSidebar = () => {
    return {
        type: HIDE_MENU_SIDEBAR,
    }
}

export const showMenuSidebar = () => {
    return {
        type: SHOW_MENU_SIDEBAR,
    }
}