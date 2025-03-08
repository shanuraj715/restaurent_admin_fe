import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePageTitle } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function Payments() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.payments))
    }, [])

    return (
        <div>
            Payments Page
        </div>
    )
}

export default Payments
