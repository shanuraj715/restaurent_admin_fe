import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function QueriesTickets() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.queries_tickets))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.queries_tickets))
    }, [])

    return (
        <div>
            Queries and Tickets Page
        </div>
    )
}

export default QueriesTickets
