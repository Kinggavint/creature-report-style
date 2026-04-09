import SlideLayout from "../SlideLayout";

const Slide03cQuestion = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16 items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center text-[36px] font-bold mb-8" style={{ background: "rgba(74,144,217,0.15)", color: "#4A90D9" }}>
        Q
      </div>
      <h2 className="text-[52px] font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#4A90D9" }}>
        Question
      </h2>
      <div className="w-20 h-1 rounded-full mb-12 mx-auto" style={{ background: "#D4A853" }} />
      <p className="text-[36px] leading-relaxed max-w-[1200px]" style={{ color: "rgba(255,255,255,0.85)" }}>
        How do we build awareness and consistently drive attendance—especially among new and younger audiences?
      </p>
    </div>
  </SlideLayout>
);

export default Slide03cQuestion;
