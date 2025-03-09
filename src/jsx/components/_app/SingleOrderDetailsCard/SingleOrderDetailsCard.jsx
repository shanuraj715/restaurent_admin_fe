/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import {
    Card,
    Col,
    Badge
} from 'react-bootstrap'
import InnerLoader from '../InnerLoader/InnerLoader';
import clsx from 'clsx';
import allOrders from '../../../pages/Dashboard/orders.json'

function SingleOrderDetailsCard(props) {

    const { onClose, orderId } = props;
    const [orderDetails, setOrderDetails] = React.useState(null);
    const [isVegOnly, setIsVegOnly] = React.useState(true)

    console.log(orderId)
    console.log(allOrders)

    useEffect(() => {
        const order = allOrders.find((order) => order.orderId === orderId);
        if (order) {
            setOrderDetails(order);
            // setIsVegOnly(order.isVegOnly);
        }
    }, [orderId])

    useEffect(() => {
        const isVegOnlyFromAllItems = orderDetails?.items.every((item) => item.isVeg);
        setIsVegOnly(isVegOnlyFromAllItems);
    }, [orderDetails]);

    return (
        <Col lg={4}>
            <Card className='position-relative text-center overflow-hidden'>
                <Card.Header>
                    <Card.Title className='fw-bold text-secondary d-flex align-items-center gap-3'>
                        <span>
                            {orderId} : Order Details
                        </span>
                        {isVegOnly !== null && <span>
                            <Badge as="a" href="" bg={`${isVegOnly ? 'success' : 'danger'} badge-rounded`} className={clsx(isVegOnly && 'px-3', 'badge-sm')}>
                                {isVegOnly ? "Veg" : "Non Veg"}
                            </Badge>
                        </span>}
                    </Card.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                </Card.Header>
                <Card.Body className=' custom-tab-1'>
                </Card.Body>
                {/* <InnerLoader /> */}
            </Card>
        </Col>
    )
}

export default SingleOrderDetailsCard
