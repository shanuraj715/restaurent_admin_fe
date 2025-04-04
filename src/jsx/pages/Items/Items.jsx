import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function Items() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.items))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.items))
    }, [])
    return (
        <div>
            Items Page
        </div>
    )
}

export default Items