import React from "react";

function AccordionBody({ title, body, isOpen, setIsOpen }) {
  return (
    <>
      <div onClick={() => setIsOpen((isOpen) => !isOpen)}>{title}</div>
      {isOpen && <div className="w-[50%]">{body}</div>}
    </>
  );
}

export default AccordionBody;
