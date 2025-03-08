import React from 'react';
import ChartCircular from './ChartCircular';

function InfoCard(props) {

    const {
        Icon,
        heading = "",
        value = "",
        progress = 0,
        className = "",
    } = props;

    return (
        <div className="card grd-card">
            <div className="card-body">
                <div className="media align-items-center">
                    <div className="media-body me-2">
                        <h2 className="text-white font-w600">{value}</h2>
                        <span className="text-white">{heading}</span>
                    </div>
                    <div className="d-inline-block position-relative donut-chart-sale">
                        <ChartCircular
                            backgroundColor="#FFFFFF"
                            backgroundColor2="#F6B4AF"
                            height="100"
                            width="100"
                            value={progress}
                        />
                        {/* {Icon} */}
                        <small className="text-primary">
                            {Icon}
                        </small>
                        <span className="circle bg-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
