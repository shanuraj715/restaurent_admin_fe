/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import {
    Card,
    Col,
    Badge,
    ListGroup,
    Accordion,
    Table
} from 'react-bootstrap'
import InnerLoader from '../InnerLoader/InnerLoader';
import clsx from 'clsx';
import allOrders from '../../../pages/Dashboard/orders.json'
import genericFunctions from '../../../../utility/genericFunctions';

import { Link } from 'react-router-dom';

const defaultAccordion = [
    {
        title: "Accordion Header One",
        text:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
        bg: "primary",
    },
    {
        title: "Accordion Header Two",
        text:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

        bg: "info",

    },
    {
        title: "Accordion Header Three",
        text:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

        bg: "success",
    },
];

function SingleOrderDetailsCard(props) {

    const { onClose, orderId } = props;
    const { isVegOnlyOrder } = genericFunctions;
    const [orderDetails, setOrderDetails] = React.useState(null);
    const [isVegOnly, setIsVegOnly] = React.useState(true)
    const [distance, setDistance] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)

    console.log(orderId)
    console.log(allOrders)

    useEffect(() => {
        const order = allOrders.find((order) => order.orderId === orderId);
        if (order) {
            setOrderDetails(order);
            // setIsVegOnly(order.isVegOnly);
        }
    }, [orderId])

    const successFunction = (position) => {
        console.log(position)
        const lat = position?.coords.latitude;
        const long = position?.coords.longitude;

        const lat2 = 28.639615
        const long2 = 77.269492

        setDistance(genericFunctions.calculateDistance(lat, long, lat2, long2))
    }

    const errorFunction = (error) => {
        console.log(error)
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
            console.log(location)


        } else {
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
        }
    }

    useEffect(() => {
        setIsVegOnly(isVegOnlyOrder(orderDetails));
        getLocation()
    }, [orderDetails]);

    return (
        <Col lg={4} className='position-relative'>
            <Card className='position-relative text-center overflow-hidden pb-1' style={{ maxHeight: '810.79px', height: '100%' }}>
                <Card.Header>
                    <Card.Title className='fw-bold text-secondary d-flex align-items-center gap-3 w-100 justify-content-between pe-3'>
                        <span className="d-flex text-start w-100 align-items-center gap-2">
                            {orderId}<span className='d-md-block d-lg-none d-xl-block'> : Order Details</span>
                        </span>
                        {isVegOnly !== null && <span>
                            <Badge as="a" href="" bg={`${isVegOnly ? 'success' : 'danger'} badge-rounded`} className={clsx(isVegOnly && 'px-3', 'badge-sm')}>
                                {isVegOnly ? "Veg" : "Non Veg"}
                            </Badge>
                        </span>}
                    </Card.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                </Card.Header>
                <Card.Body className='overflow-auto custom-tab-1 px-2 py-2'>
                    <Table responsive striped className="header-border text-start">
                        <thead>
                            <tr className='text-start'>
                                <th className='width100 py-0'></th>
                                <th className='py-0'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-primary">
                                    Name
                                </td>
                                <td>
                                    Shanu
                                </td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-primary">
                                    Order Type
                                </td>
                                <td>
                                    Delivery
                                </td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-primary">
                                    Distance
                                </td>
                                <td>
                                    {distance?._distanceInKm > 0 ? `${distance?.distanceInKm} KM` : `${distance?._distanceInM} M`}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card className='position-relative text-center overflow-hidden mb-3'>
                        <Card.Header className="ps-1">
                            <Card.Title className='text-secondary d-flex align-items-center gap-3 w-100 justify-content-between pe-3'>
                                <span>Items List</span>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className='overflow-auto custom-tab-1 px-1 py-2'>
                            {/* <div className="basic-list-group"> */}
                            <ListGroup className=''>
                                {orderDetails?.items?.map((item, i) => (
                                    <ListGroup.Item
                                        className="d-flex justify-content-between align-items-center"
                                        key={i}
                                    >
                                        <div className="d-flex flex-column align-items-baseline">
                                            <span className=''>
                                                {item.itemName}
                                            </span>
                                            <span className='small'>
                                                Size: {item.size}
                                            </span>
                                        </div>
                                        <Badge bg={`${item.isVeg ? "success" : "danger"}`} pill>
                                            {item.quantity}
                                        </Badge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            {/* </div> */}
                        </Card.Body>
                    </Card>

                </Card.Body>
                {isLoading && <InnerLoader />}
            </Card>
        </Col >
    )
}

export default SingleOrderDetailsCard
