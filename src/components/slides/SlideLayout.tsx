import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  return (
    <div
      className={`slide-content w-[1920px] h-[1080px] relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default SlideLayout;
