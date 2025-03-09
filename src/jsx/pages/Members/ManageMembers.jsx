import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function ManageMembers() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.manage_members))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.manage_members))
    }, [])

    return (
        <div>
            Manage Menbers Page
        </div>
    )
}

export default ManageMembers
