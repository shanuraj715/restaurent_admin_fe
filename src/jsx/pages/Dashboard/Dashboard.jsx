import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateHeaderText, updatePageTitle } from '../../../store/actions/PageData';
import CONSTANTS from '../../../constants';
import Infocard from '../../components/_app/Infocard/InfoCard';
import genericFunctions from '../../../utility/genericFunctions';

const cardIcons = [
    <i key={0} className="fa-solid fa-utensils"></i>,
    <i key={1} className="fa-solid fa-coins"></i>,
    <i key={2} className="fa-solid fa-bars"></i>,
];

function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.dashbaord));
        dispatch(updateHeaderText(CONSTANTS.PAGE_HEADER_TITLE.dashboard));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addedAmount = genericFunctions.increaseAmountWithFixedPercentWithRounding(2700, 10);

    return (
        <div className="row">
            <div className="col-xl-4 col-xxl-6 col-sm-6">
                <Infocard
                    progress={(200 / 327) * 100}
                    heading="Completed / Today Orders"
                    value={'315/327'}
                    Icon={cardIcons[0]}
                />
            </div>
            <div className="col-xl-4 col-xxl-6 col-sm-6">
                <Infocard
                    progress={(2700 / addedAmount) * 100}
                    heading={`Total Revenue (Target: ${addedAmount})`}
                    value={genericFunctions.withRupeeSign(2700)}
                    Icon={cardIcons[1]}
                />
            </div>
            <div className="col-xl-4 col-xxl-6 col-sm-6">
                <Infocard
                    progress={0}
                    heading="Total Menus"
                    value={'73'}
                    Icon={cardIcons[2]}
                />
            </div>
        </div>
    );
}

export default Dashboard;
