import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function AddMember() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.add_member))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.add_member))
    }, [])

    return (
        <div>
            Add Member Page
        </div>
    )
}

export default AddMember
