import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function ManageUsers() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.manage_users))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.manage_members))
    }, [])

    return (
        <div>
            Manage Users Page
        </div>
    )
}

export default ManageUsers
