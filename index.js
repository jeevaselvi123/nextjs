import Head from "next/head";
import Link from "next/link";
import ChartLine from "../Component/ChartLine";
import Navbar from "../Component/Navbar";

export default function Home() {
  const lineChartData = {
    xAxisKey: "month",
    yAxisLabel: "No of Logins",
    xAxisLabel: "Months",
    lines: [
      { lineKey: "CareerInsight", stroke: "blue" },
      { lineKey: "ProgramInsight", stroke: "green" },
    ],
    data: [
      { month: "April", ProgramInsight: 85, CareerInsight: 60 },
      { month: "May", ProgramInsight: 50, CareerInsight: 98 },
      { month: "June", ProgramInsight: 75, CareerInsight: 55 },
      { month: "July", ProgramInsight: 30, CareerInsight: 48 },
    ],
  };

  const funnelChartData = {
    name: "College",
    dataPlotterKey: "value",
    funnelLabel: "programName",
    data: [
      {
        value: 100,
        programName: "Nursing",
        fill: "#8884D8",
      },
      {
        value: 80,
        programName: "Data Engineer",
        fill: "#83A6ED",
      },
      {
        value: 50,
        programName: "HR",
        fill: "#8DD1E1",
      },
      {
        value: 40,
        programName: "Support Engineer",
        fill: "#82CA9D",
      },
      {
        value: 1,
        programName: "Data Analyst",
        fill: "#A4DE6C",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>Sample POC Application</title>
      </Head>
      <h2>Sample Nextjs Application for Excel Export with ExcelJS Library</h2>
      <div>
        <ChartLine chartdata={funnelChartData}></ChartLine>
        {/* <Link href="/excelexport">Export Excel</Link> */}
      </div>
    </>
  );
}
