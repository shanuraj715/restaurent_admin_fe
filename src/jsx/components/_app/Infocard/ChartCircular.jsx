import React from "react";
import { Doughnut } from "react-chartjs-2";

const ChartDoughnut2 = ({
    value,
    backgroundColor = "#000",
    backgroundColor2,
    width = 50,
    cutout = 40,
    height = 100,
}) => {
    const data = {
        weight: 0,
        defaultFontFamily: "Poppins",
        datasets: [
            {
                data: [value, 100 - value],
                borderWidth: 0,
                backgroundColor: [backgroundColor, backgroundColor2],
            },
        ],
    };

    const options = {
        width,
        cutout,
        responsive: false,
        maintainAspectRatio: true,
        tooltips: { enabled: false },
        hover: { mode: null },
    };

    return (
        <div className="donught-chart" style={{ marginTop: "-10px" }}>
            <Doughnut
                data={data}
                options={options}
                height={height}
                width={width}
            />
        </div>
    );
};

export default ChartDoughnut2;
