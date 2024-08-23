import React, { useState } from "react";
import AccordionBody from "./AccordionBody";

function Handler() {
  const [openIndex, setOpenIndex] = useState(0);
  const data = [
    {
      title: "abc",
      body: "askjbkjsdkjsbdfjsbff",
    },
    {
      title: "abc",
      body: "askjbkjsdkjsbdfjsbff",
    },
    {
      title: "abc",
      body: "askjbkjsdkjsbdfjsbff",
    },
  ];
  return (
    <div className="shadow-md">
      {data.map((item, index) => (
        <AccordionBody
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          setIsOpen={() =>
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index)
          }
        />
      ))}
    </div>
  );
}

export default Handler;
