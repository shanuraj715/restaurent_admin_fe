import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

function FeedbackReviews() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.feedback_reviews))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.feedback_reviews))
    }, [])

    return (
        <div>
            Feedback and Reviews Page
        </div>
    )
}

export default FeedbackReviews
