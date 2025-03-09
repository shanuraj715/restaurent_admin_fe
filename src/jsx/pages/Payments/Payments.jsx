import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function Payments() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.payments))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.payments))
    }, [])

    return (
        <div>
            Payments Page
        </div>
    )
}

export default Payments
