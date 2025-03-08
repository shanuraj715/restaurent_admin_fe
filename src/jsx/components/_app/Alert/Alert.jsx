/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Alert } from "react-bootstrap";
import clsx from 'clsx';

const outlineBorderMapping = (variant) => {
    switch (variant) {
        case 'primary':
            return 'alert-outline-primary';
        case 'secondary':
            return 'alert-outline-secondary';
        case 'success':
            return 'alert-outline-success';
        case 'danger':
            return 'alert-outline-danger';
        case 'warning':
            return 'alert-outline-warning';
        case 'info':
            return 'alert-outline-info';
        case 'light':
            return 'alert-outline-light';
        case 'dark':
            return 'alert-outline-dark';
        default:
            return '';
    }
}

function MyAlert(props) {

    const {
        icon,
        type = 'solid',
        onClose = (e) => { console.log(e) },
        closable = true,
        alertId = null,
        text,
        className = '',
        leftBorder = false,
        border = '',
        variant = 'primary',
        outlineVariant = "", // primary, secondary, etc...
    } = props;

    return (
        <Alert dismissible={closable} variant={variant} show={true} className={clsx(type, className, leftBorder && 'alert-alt', border, outlineBorderMapping(outlineVariant), 'd-flex align-items-center')}>
            {icon}
            <span className={clsx('flex-grow-1')}>{text}</span>
            {closable && <button className="btn-close" onClick={() => onClose(alertId)}>
                <span>
                </span>
            </button>}
        </Alert>
    )
}

// variant: primary, secondary, success, danger, warning, info, light, dark
// type: solid, outline
// leftBorder: true, false

export default MyAlert
