import React from "react";

const BackDrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="w-[100%] h-[100%] z-48 bg-slate-900/50 overflow-hidden fixed top-0 left-0"
      onClick={onClose}
    ></div>
  );
};

export default BackDrop;
