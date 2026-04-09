import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportSlidesToPdf(
  containerRef: HTMLDivElement,
  slideCount: number,
  goTo: (idx: number) => void,
  onProgress?: (current: number, total: number) => void
) {
  // 16:9 landscape in mm (338.67 x 190.5 at 25.4mm/inch for 13.33x7.5in)
  const pageW = 338.67;
  const pageH = 190.5;
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: [pageW, pageH] });

  const getSlideElement = () =>
    containerRef.querySelector("[data-slide-canvas]") as HTMLElement | null;

  for (let i = 0; i < slideCount; i++) {
    goTo(i);
    onProgress?.(i + 1, slideCount);
    await new Promise((r) => setTimeout(r, 300));

    const slideEl = getSlideElement();
    if (!slideEl) continue;

    const canvas = await html2canvas(slideEl, {
      width: 1920,
      height: 1080,
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.92);
    if (i > 0) pdf.addPage([pageW, pageH], "landscape");
    pdf.addImage(imgData, "JPEG", 0, 0, pageW, pageH);
  }

  pdf.save("Exquisite_Creatures_Presentation.pdf");
}
