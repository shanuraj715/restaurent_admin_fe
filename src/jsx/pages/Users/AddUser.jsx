import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function AddUser() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.add_user))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.add_user))
    }, [])

    return (
        <div>
            Add User Page
        </div>
    )
}

export default AddUser
