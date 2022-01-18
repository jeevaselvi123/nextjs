import React from "react";
import Link from "next/link";
import data from "../data";
import excel from "../helper/excel";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useRef, useState } from "react";

const Export = () => {
  const [linestate, setLineState] = useState(null);
  const [legendstate, setLegendState] = useState(null);

  const exportLineChart = () => {
    excel(linestate, data);
  };
  const convertSVG = async (ref, islegend) => {
    if (ref && ref.container) {
      let svg = ref.container.children[0];
      var svgString = new XMLSerializer().serializeToString(svg);
      setLineState("data:image/svg+xml;base64," + window.btoa(svgString));
    }
  };

  return (
    <div>
      <LineChart
        ref={(ref) =>
          setTimeout(() => {
            convertSVG(ref, false), 5000;
          })
        }
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      {/* <button onClick={exportLineChart}>Export</button> */}
    </div>
  );
};

export default Export;
