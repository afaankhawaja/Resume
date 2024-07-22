// import htmlToPdfmake from "html-to-pdfmake";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const generatePDF = (htmlContent) => {
//   const pdfContent = htmlToPdfmake(htmlContent);
//   const documentDefinition = { content: pdfContent };
//   pdfMake.createPdf(documentDefinition).download("resume.pdf");
// };

// export default generatePDF;
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (htmlContent) => {
  const pdfContent = htmlToPdfmake(htmlContent);
  const documentDefinition = { content: pdfContent };
  pdfMake.createPdf(documentDefinition).download("resume.pdf");
};

export default generatePDF;
