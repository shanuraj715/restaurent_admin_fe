/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Nav, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyPagination(props) {
    const {
        size,
        gutter = true,
        variant = 'danger',
        bg = true,
        circle = false,
        active = 2,
        from = 1,
        to = 1,
        onClick = (e) => { console.log(e) },
    } = props;

    const onClickHandler = React.useCallback((e) => {
        const value = e.target.getAttribute('data-value');
        onClick(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items = [];
    const maxPagesToShow = 3; // Number of pages to show around the active page

    if (to - from + 1 <= maxPagesToShow + 4) {
        // If the range is small, show all pages
        for (let number = from; number <= to; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} data-value={number} onClick={onClickHandler}>
                    {number}
                </Pagination.Item>
            );
        }
    } else {
        // Always show the first page
        let isEllipsisPlacedAtLastIteration = false;
        items.push(
            <Pagination.Item key={from} active={from === active} data-value={from} onClick={onClickHandler}>
                {from}
            </Pagination.Item>
        );

        // Show pages near the start if the active page is close to the beginning
        if (active <= from + maxPagesToShow) {
            for (let number = from + 1; number <= from + maxPagesToShow; number++) {
                items.push(
                    <Pagination.Item key={number} active={number === active} data-value={number} onClick={onClickHandler}>
                        {number}
                    </Pagination.Item>
                );
                isEllipsisPlacedAtLastIteration = false;
            }
            if (!isEllipsisPlacedAtLastIteration)
                items.push(<Pagination.Ellipsis key="start-ellipsis" />);
            isEllipsisPlacedAtLastIteration = true;
        } else {
            // Show an ellipsis if the active page is not close to the start
            if (!isEllipsisPlacedAtLastIteration)
                items.push(<Pagination.Ellipsis key="start-ellipsis" />);
            isEllipsisPlacedAtLastIteration = true;
        }

        // Show pages around the active page
        if (active > from + maxPagesToShow && active < to - maxPagesToShow) {
            for (let number = active - 1; number <= active + 1; number++) {
                items.push(
                    <Pagination.Item key={number} active={number === active} data-value={number} onClick={onClickHandler}>
                        {number}
                    </Pagination.Item>
                );
                isEllipsisPlacedAtLastIteration = false;
            }
            if (!isEllipsisPlacedAtLastIteration)
                items.push(<Pagination.Ellipsis key="middle-ellipsis" />);
            isEllipsisPlacedAtLastIteration = true;
        }

        // Show pages near the end if the active page is close to the end
        if (active >= to - maxPagesToShow) {
            if (!isEllipsisPlacedAtLastIteration)
                items.push(<Pagination.Ellipsis key="end-ellipsis" />);
            for (let number = to - maxPagesToShow; number <= to; number++) {
                if (number !== from) {
                    items.push(
                        <Pagination.Item key={number} active={number === active} data-value={number} onClick={onClickHandler}>
                            {number}
                        </Pagination.Item>
                    );
                }
                isEllipsisPlacedAtLastIteration = false;
            }
        } else {
            // Always show the last page
            items.push(
                <Pagination.Item key={to} active={to === active} data-value={to} onClick={onClickHandler}>
                    {to}
                </Pagination.Item>
            );
        }
    }

    return (
        <Nav>
            <Pagination
                size={size}
                className={`mt-4  ${gutter ? 'pagination-gutter' : ''} ${variant && `pagination-${variant}`
                    } ${!bg && 'no-bg'} ${circle && 'pagination-circle'}`}
            >
                <li className='page-item page-indicator'>
                    <Link className='page-link' to='#'>
                        <i className='la la-angle-left' />
                    </Link>
                </li>
                {items}
                <li className='page-item page-indicator'>
                    <Link className='page-link' to='#'>
                        <i className='la la-angle-right' />
                    </Link>
                </li>
            </Pagination>
        </Nav>
    );
}

export default MyPagination;