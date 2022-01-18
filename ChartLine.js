import {
  FunnelChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Funnel,
  LabelList,
} from "recharts";
import { useState } from "react";
import styles from "../styles/Chart.module.css";
import excel from "../helper/excel";
import Link from "next/link";

const ChartLine = (props) => {
  //Logic for no of channel lines creation
  const [linestate, setLineState] = useState(null);
  const convertSVG = async (ref) => {
    if (ref && ref.container) {
      let svg = ref.container.children[0];
      var svgString = new XMLSerializer().serializeToString(svg);
      setLineState("data:image/svg+xml;base64," + window.btoa(svgString));
    }
    const temp = document.querySelector("svg");
    const temp1 = new XMLSerializer().serializeToString(temp);
    console.log("data:image/svg+xml;base64," + window.btoa(temp1));
  };
  const tempImg = '';
  const exportLineChart = () => {
    excel(linestate, props.chartdata.data);
  };
  return (
    <>
      <h1 className="text-heading">Funnel Chart Using Rechart</h1>
      <ResponsiveContainer width="60%" aspect={3}>
        <FunnelChart
          width={350}
          height={250}
          ref={(ref) =>
            setTimeout(() => {
              convertSVG(ref, false), 5000;
            })
          }
        >
          <Funnel
            data={props.chartdata.data}
            dataKey={props.chartdata.dataPlotterKey}
            label
          >
            <LabelList
              position="right"
              fill="#000"
              stroke="none"
              dataKey={props.chartdata.funnelLabel}
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
      <button onClick={exportLineChart}>Excel Export</button>
    </>
  );
};
export default ChartLine;
