import React, { useEffect } from 'react'
import {
    useDispatch,
    // useSelector
} from 'react-redux'
import { hideMenuSidebar } from '../../../store/actions/AppState'
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';
import {
    Row,
    Col,
    Card,
    Badge,
} from "react-bootstrap";
import dummyOrders from './orders.json'
import { toast } from 'react-toastify';
import MyPagination from '../../components/_app/Pagination/Pagination';
import SingleOrderDetailsCard from '../../components/_app/SingleOrderDetailsCard/SingleOrderDetailsCard';
import OrdersTable from './OrdersComponents/OrdersTable';
import OrdersHeader from './OrdersComponents/OrdersHeader';

function Orders() {
    const dispatch = useDispatch();
    // const appState = useSelector(state => state.appState);
    const [filters, setFilters] = React.useState([...CONSTANTS.ORDER_STATUS_LIST]);
    const [tableData, setTableData] = React.useState(dummyOrders);
    // const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState(null);

    const handleOrderClick = (oid) => {
        setSelectedOrder(oid);
        dispatch(hideMenuSidebar());
        // TODO : add function here to fetch order ID.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const closeSidebar = React.useCallback(() => {
        setSelectedOrder(null);
    }, []);

    useEffect(() => {
        setTableData(dummyOrders.filter((data) => filters.includes(data.status)));
    }, [filters])

    const handleFilterClick = (e) => {
        const filterName = e.target.getAttribute('data-type');
        console.log(e)
        if (e.metaKey || e.ctrlKey) {
            /**
             * if clicked filter is already present in the filter array
             * then select all filters.
             */
            if (filters.length === 1 && filters[0] === filterName) {
                setFilters([...CONSTANTS.ORDER_STATUS_LIST]);
                return;
            }
            setFilters([filterName]);
            return
        }
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
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.orders))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        {/* TODO : Add check here (entire row) to not show the amount alert card if user type is not admin */}
        {/* TODO : Add check to render from backend. if backed allows then it will render for any user. */}
        {/* <OrdersHeader totalEarningsToday={2800} totalOrdersToday={300} success={200} pending={80} calcelled={20} /> */}
        <Row className="align-items-baseline">
            <Col lg={selectedOrder !== null ? 8 : 12}>
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
                                <Badge className='cursor-pointer' data-type={'onWay'} onClick={handleFilterClick} bg={`${filters?.includes('onWay') ? 'info' : 'dark'} badge-sm`}  >On Way</Badge>
                            </div>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <OrdersTable tableData={tableData} handleOrderClick={handleOrderClick} isSidebarVisible={selectedOrder !== null} />
                        <hr className="bg-danger border-2 border-top border-danger" />
                        <Row>
                            <Col lg={12} className='d-flex justify-content-end align-items-center'>
                                <MyPagination variant="danger" from={1} to={18} active={1} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            {selectedOrder !== null && <SingleOrderDetailsCard orderId={selectedOrder} onClose={closeSidebar} />}
        </Row>
    </>
    )
}

export default Orders
