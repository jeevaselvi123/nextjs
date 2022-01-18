import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const excel = (ref, data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("User Downloads", {
    views: [{ state: "frozen", ySplit: 1 }],
  });
  worksheet.columns = [
    { header: "Program Name", key: "programName", width: 16 },
    { header: "No of Downloads", key: "value", width: 16 },
  ];

  worksheet.getCell("A1").note = "Program Name";
  worksheet.getCell("B1").note = "No of users downloaded";

  worksheet.getRow(1).font = { name: "Calibri", size: 12 };
  data.forEach((element) => {
    worksheet.addRow(element);
  });

  const worksheet2 = workbook.addWorksheet("Funnel Chart");
  worksheet2.columns = [
    {
      header: "User Programs Downloads",
      width: 36,
      style: { font: { name: "Arial Black" } },
    },
  ];

  const imageId2 = workbook.addImage({
    base64: ref,
    extension: "png",
  });

  worksheet2.addImage(imageId2, "B3:T20");

  workbook.xlsx.writeBuffer().then((buffer) => {
    saveAs(
      new Blob([buffer], { type: "application/octet-stream" }),
      "Application Usage.xlsx"
    );
  });
};

export default excel;
