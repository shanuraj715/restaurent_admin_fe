import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function Coupons() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.coupons))
    }, [])

    return (
        <div>
            Coupons
        </div>
    )
}

export default Coupons
