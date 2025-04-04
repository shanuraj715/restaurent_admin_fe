import React, { useEffect } from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap'
import tabData from './tabs';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import genericFunctions from '../../../utility/genericFunctions';
import { useDispatch } from 'react-redux';
import { updatePageTitle, updateHeaderText } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';

const getActiveTab = (activeTab) => {
    const index = tabData.findIndex((data) => data.identifierInURL === activeTab);
    return index === -1 ? 0 : index;
}


function Settings() {

    const dispatch = useDispatch();

    const location = useLocation();
    const queryParams = genericFunctions.useQueryParams(location.search);

    console.log(queryParams)

    const [activeTab, setActiveTab] = React.useState(getActiveTab(queryParams.activeTab));

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.settings))
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.settings))
    }, [])

    const updateActiveTab = idx => {
        setActiveTab(idx);
    }

    const renderTabContent = () => {
        const data = tabData[activeTab];
        const Component = data.component;
        return <Tab.Pane eventKey={data.name.toLowerCase()} z>
            <Component />
        </Tab.Pane>
    }

    return <div>
        <Tab.Container defaultActiveKey={tabData[activeTab].name.toLowerCase()}>
            <Nav as='ul' className='nav-tabs'>
                {tabData.map((data, i) => (
                    <Nav.Item as='li' key={i} onClick={() => updateActiveTab(i)}>
                        <Nav.Link eventKey={data.name.toLowerCase()}>
                            <i className={`la la-${data.icon} me-2`} />
                            {data.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Tab.Content className='pt-4'>
                {/* {tabData.map((data, i) => {
                    const Component = data.component;
                    return <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                        <Component />
                    </Tab.Pane>
                })} */}
                {/* {tabData.find((data) => data.name.toLowerCase() === 'common')} */}
                {/* {renderTabContent(tabData.find((data, idx) => data.name.toLowerCase() === 'common'))} */}
                {renderTabContent()}
            </Tab.Content>
        </Tab.Container>
    </div>;
}

export default Settings;
