import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function Category() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.category))
    }, [])

    return (
        <div>
            Category Page
        </div>
    )
}

export default Category
