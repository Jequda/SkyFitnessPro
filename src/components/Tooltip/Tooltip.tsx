import { ReactNode, useState } from "react";

type ToolTipComponentType = {
  children: ReactNode;
  text: string;
}

export function ToolTipComponent({ children, text }: ToolTipComponentType) {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && (
        <div className="mt-4 ml-4 absolute bg-white p-[6px] rounded-[5px] border-[1px] border-black text-[14px] leading-[15,4px] font-[400] whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
}