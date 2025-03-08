import React from 'react';
//import { useNavigate } from "react-router-dom";

export const UPDATE_PAGE_TITLE = 'UPDATE_PAGE_TITLE';
export const UPDATE_HEADER_TEXT = 'UPDATE_HEADER_TEXT';



export const updateHeaderText = (text) => {
    return {
        type: UPDATE_HEADER_TEXT,
        payload: text,
    };
}

export const updatePageTitle = (title) => {
    return {
        type: UPDATE_PAGE_TITLE,
        payload: title,
    };
}