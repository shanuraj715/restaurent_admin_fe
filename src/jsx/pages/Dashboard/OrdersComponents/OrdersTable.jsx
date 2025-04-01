/* eslint-disable react/prop-types */
import React from 'react'
import {
    Table,
    OverlayTrigger,
    Tooltip,
    Badge,
    Dropdown
} from 'react-bootstrap'
import genericFunctions from '../../../../utility/genericFunctions';


const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24"></rect>
            <circle fill="#000000" cx="5" cy="12" r="2"></circle>
            <circle fill="#000000" cx="12" cy="12" r="2"></circle>
            <circle fill="#000000" cx="19" cy="12" r="2"></circle>
        </g>
    </svg>
);

function OrdersTable(props) {

    const { tableData = [], isSidebarVisible, handleOrderClick = () => { } } = props;

    return (
        <Table responsive className='table-hover'>
            <thead>
                <tr>
                    <th className="width120">
                        <strong>O. ID</strong>
                    </th>
                    <th className='width200'>
                        <strong>Name</strong>
                    </th>
                    <th>
                        <strong>Address</strong>
                    </th>
                    <th className='width140'>
                        <strong>Time/Day</strong>
                    </th>
                    <th className='width130'>
                        <strong>STATUS</strong>
                    </th>
                    <th className='width130'>
                        <strong>PRICE</strong>
                    </th>
                    <th className='width130'>
                        <strong>ACTION</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.slice(0, 9)?.map((data, index) => {
                    return (
                        <tr key={index} onClick={() => handleOrderClick(data.orderId)}>
                            <td>
                                <strong>{data.orderId}</strong>
                            </td>
                            <td className={'cursor-pointer'}>{data.name}</td>
                            <td className="cursor-pointer">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 300, hide: 400 }}
                                    overlay={<Tooltip id={data.orderId}>{data.address}</Tooltip>}
                                >
                                    <span className="ellipsisText">{genericFunctions.limitCharcaterLength(data.address, isSidebarVisible ? 22 : 55)}</span>
                                </OverlayTrigger>
                                {/* {genericFunctions.limitCharcaterLength(data.address, 50)} */}
                            </td>
                            <td>{genericFunctions.timestampToTimeandTodayYesterday(data.timestamp)}</td>
                            <td>
                                <Badge
                                    bg={genericFunctions.getClassFromOrderStatus(data.status)}
                                >
                                    {genericFunctions.getOrderStatusTextFromOrderStatus(data.status)}
                                </Badge>
                            </td>
                            <td>{genericFunctions.withRupeeSign(data.amount)}</td>
                            <td onClick={(e) => e.stopPropagation()}>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant={genericFunctions.getClassFromOrderStatus(data.status)}
                                        className="light sharp i-false"
                                    >
                                        {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default OrdersTable
