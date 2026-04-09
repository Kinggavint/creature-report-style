import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";

export async function exportSlidesToPptx(
  containerRef: HTMLDivElement,
  slideCount: number,
  goTo: (idx: number) => void,
  onProgress?: (current: number, total: number) => void
) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 inches (16:9)

  // Find the slide canvas element (the 1920x1080 div)
  const getSlideElement = () => {
    return containerRef.querySelector("[data-slide-canvas]") as HTMLElement | null;
  };

  for (let i = 0; i < slideCount; i++) {
    goTo(i);
    onProgress?.(i + 1, slideCount);

    // Wait for render
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

    const imgData = canvas.toDataURL("image/png");
    const slide = pptx.addSlide();
    slide.addImage({
      data: imgData,
      x: 0,
      y: 0,
      w: "100%",
      h: "100%",
    });
  }

  await pptx.writeFile({ fileName: "Exquisite_Creatures_Presentation.pptx" });
}
