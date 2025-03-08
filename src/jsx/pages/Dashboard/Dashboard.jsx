import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.dashbaord))
    }, [])

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
