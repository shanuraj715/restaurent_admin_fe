import React from 'react'
import {
    Row,
    Col,
} from 'react-bootstrap'
import MyAlert from '../../../components/_app/Alert/Alert';
import genericFunctions from '../../../../utility/genericFunctions';
import { useSelector } from 'react-redux';

function OrdersHeader(props) {
    const authState = useSelector(state => state.auth.auth)

    const { totalEarningsToday = 0, totalOrdersToday = 0, success = 0, pending = 0, calcelled = 0 } = props;

    return (
        <>
            <Row>
                <Col lg={4}>
                    <MyAlert closable={false} text={`Total Earnings Today: ${genericFunctions.withRupeeSign(totalEarningsToday)}`} variant="dark" leftBorder={true} outlineVariant="danger" />
                </Col>
                {authState.userType === 'admin' && <Col lg={4}>
                    <MyAlert closable={false} text={`Total Orders Today: ${totalOrdersToday}`} variant="info" leftBorder={true} />
                </Col>}
            </Row>
            <Row>
                {authState.userType !== 'admin' && <Col lg={3} md={6}>
                    <MyAlert closable={false} text={`Total #: ${totalOrdersToday}`} variant="info" />
                </Col>}
                <Col lg={3} md={6}>
                    <MyAlert closable={false} text={`Success: ${success}`} variant="success" />
                </Col>
                <Col lg={3} md={6}>
                    <MyAlert closable={false} text={`Pending: ${pending}`} variant="warning" />
                </Col>
                <Col lg={3} md={6}>
                    <MyAlert closable={false} text={`Cancelled: ${calcelled}`} variant="danger" />
                </Col>
            </Row>
        </>
    )
}

export default OrdersHeader
