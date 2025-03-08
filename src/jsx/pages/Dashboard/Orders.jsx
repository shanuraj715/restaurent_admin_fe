import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePageTitle } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    OverlayTrigger,
    Tooltip,
    // ProgressBar,
} from "react-bootstrap";
import MyAlert from '../../components/_app/Alert/Alert';
import genericFunctions from '../../../utility/genericFunctions';
import { ToastContainer, toast } from "react-toastify";

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

const dummyData = [
    {
        orderId: "X_001",
        name: "Shanu Raj",
        address: "A-373 Main Market. Behind Barista, Defence Colony, New Delhi, Delhi 110024, India",
        timeDay: "Sunday, 9 March 2025 3:22:17 AM GMT+05:30",
        status: 'success',
        amount: 1200,
    },
    {
        orderId: "X_002",
        name: "Mr. Bobby",
        address: "SHOP NO 2, PLOT NO. 2, JWALA HERI Road PASCHIM VIHAR NEAR LAXMI NARYAN MANDIR &, opposite GREEN APPARTMENT, New Delhi, Delhi 110063, India",
        timeDay: "Saturday, 8 March 2025 6:22:17 PM GMT+05:30",
        status: 'cancelled',
        amount: 100,
    },
    {
        orderId: "X_003",
        name: "Mr. Bobby",
        address: "Shop No 12, 28, nr. HDFC Bank, Block J, Rajouri Garden, New Delhi, Delhi 110027, India",
        timeDay: "Sunday, 9 March 2025 1:22:17 PM GMT+05:30",
        status: 'pending',
        amount: 1220,
    },
    {
        orderId: "X_004",
        name: "Mr. Bobby",
        address: "Punj House, M-108, IInd Floor, Radial Rd Number 7, Block M, Connaught Place, New Delhi, Delhi 110001, India",
        timeDay: "Sunday, 9 March 2025 1:52:17 PM GMT+05:30",
        status: 'cancelled',
        amount: 9200,
    },
    {
        orderId: "X_005",
        name: "Mr. Bobby",
        address: "Scindia House, 7, Connaught Cir, Connaught Place, New Delhi, Delhi 110001, India",
        timeDay: "Thursday, 6 March 2025 1:22:17 PM GMT+05:30",
        status: 'pending',
        amount: 1220,
    },
    {
        orderId: "X_006",
        name: "Mr. Bobby",
        address: "No.9, PVR Anupam Saket, Community Center, Opp HDFC Bank, Saket, New Delhi, Delhi 110017, India",
        timeDay: "Sunday, 9 March 2025 1:22:17 AM GMT+05:30",
        status: 'cancelled',
        amount: 9200,
    }
]

function Orders() {
    const dispatch = useDispatch();
    const [filters, setFilters] = React.useState(['success', 'pending', 'cancelled']);
    const [tableData, setTableData] = React.useState(dummyData);

    useEffect(() => {
        setTableData(dummyData.filter((data) => filters.includes(data.status)));
    }, [filters])

    const handleFilterClick = (e) => {
        const filterName = e.target.getAttribute('data-type');
        if (filters.includes(filterName)) {
            if (filters.length === 1) {
                return toast.error("Atleast one filter should be selected");
            }
            setFilters(filters.filter((filter) => filter !== filterName));
        } else {
            setFilters([...filters, filterName]);
        }
    }

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.orders))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        {/* <ToastContainer /> */}
        {/* TODO : Add check here (entire row) to not show the amount alert card if user type is not admin */}
        <Row>
            <Col lg={4}>
                <MyAlert closable={false} text={`Total Earnings Today: ${genericFunctions.withRupeeSign(1200)}`} variant="dark" leftBorder={true} outlineVariant="danger" />
            </Col>
            <Col lg={4}>
                <MyAlert closable={false} text={`Total Orders Today: 200`} variant="info" leftBorder={true} />
            </Col>
        </Row>
        <Row>
            <Col lg={3} md={6}>
                <MyAlert closable={false} text={`Total #: 200`} variant="info" />
            </Col>
            <Col lg={3} md={6}>
                <MyAlert closable={false} text={`Success: 200`} variant="success" />
            </Col>
            <Col lg={3} md={6}>
                <MyAlert closable={false} text={`Pending: 200`} variant="warning" />
            </Col>
            <Col lg={3} md={6}>
                <MyAlert closable={false} text={`Cancelled: 200`} variant="danger" />
            </Col>
            <Col lg={12}>
                <Card>
                    <Card.Header>
                        <Card.Title className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                                Manage Orders
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <span className="text-muted fs-16">Filters</span>
                                <Badge className='cursor-pointer' data-type={'success'} onClick={handleFilterClick} bg={`${filters?.includes('success') ? 'success' : 'dark'} badge-sm`}  >Success</Badge>
                                <Badge className='cursor-pointer' data-type={'pending'} onClick={handleFilterClick} bg={`${filters?.includes('pending') ? 'warning' : 'dark'} badge-sm`}  >Pending</Badge>
                                <Badge className='cursor-pointer' data-type={'cancelled'} onClick={handleFilterClick} bg={`${filters?.includes('cancelled') ? 'danger' : 'dark'} badge-sm`}  >Cancelled</Badge>
                            </div>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
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
                                {tableData?.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <strong>{data.orderId}</strong>
                                            </td>
                                            <td className={'cursor-pointer'}>{data.name}</td>
                                            <td className="cursor-pointer">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id={data.orderId}>{data.address}</Tooltip>}
                                                >
                                                    <span className="ellipsisText">{genericFunctions.limitCharcaterLength(data.address, 64)}</span>
                                                </OverlayTrigger>
                                                {/* {genericFunctions.limitCharcaterLength(data.address, 50)} */}
                                            </td>
                                            <td>{genericFunctions.timestampToTimeandTodayYesterday(data.timeDay)}</td>
                                            <td>
                                                <Badge bg={data.status === 'success' ? 'success' : data.status === 'cancelled' ? 'danger' : 'warning'}>{data.status === 'success' ? 'Successful' : data.status === 'cancelled' ? 'Canceled' : 'Pending'}</Badge>
                                            </td>
                                            <td>{genericFunctions.withRupeeSign(data.amount)}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant={data.status === 'success' ? 'success' : data.status === 'cancelled' ? 'danger' : 'warning'}
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
                                {/* <tr>
                                    <td>
                                        <strong>01</strong>
                                    </td>
                                    <td>Shanu Raj</td>
                                    <td>Lorem ipsum dolar sit amet...</td>
                                    <td>Dr. Jackson</td>
                                    <td>
                                        <Badge bg="success light">Successful</Badge>
                                    </td>
                                    <td>$21.56</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant="success"
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
                                <tr>
                                    <td>
                                        <strong>02</strong>
                                    </td>
                                    <td>Mr. Bobby</td>
                                    <td>Dr. Jackson</td>
                                    <td>Dr. Jackson</td>
                                    <td>
                                        <Badge bg="danger light">Canceled</Badge>
                                    </td>
                                    <td>$21.56</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant="danger"
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
                                <tr>
                                    <td>
                                        <strong>03</strong>
                                    </td>
                                    <td>Mr. Bobby</td>
                                    <td>Dr. Jackson</td>
                                    <td>Dr. Jackson</td>
                                    <td>
                                        <Badge bg="warning light">Pending</Badge>
                                    </td>
                                    <td>$21.56</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant="warning"
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
                                </tr> */}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
    )
}

export default Orders
