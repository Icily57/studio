import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportAs = async (
  element: HTMLElement,
  format: 'pdf' | 'png' | 'jpeg',
  filename: string
) => {
  const canvas = await html2canvas(element, {
    scale: 2, // Higher scale for better quality
    useCORS: true,
    backgroundColor: null, // Use element's background
  });

  if (format === 'pdf') {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  } else {
    const image = canvas.toDataURL(`image/${format}`, 1.0);
    const link = document.createElement('a');
    link.href = image;
    link.download = filename;
    link.click();
  }
};

export const exportAsPDF = (element: HTMLElement, filename: string) => {
    exportAs(element, 'pdf', filename);
}

export const exportAsPNG = (element: HTMLElement, filename: string) => {
    exportAs(element, 'png', filename);
}

export const exportAsJPEG = (element: HTMLElement, filename:string) => {
    exportAs(element, 'jpeg', filename);
}
