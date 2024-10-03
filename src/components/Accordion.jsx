import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <h1 className='p-4 text-xl font-serif text-white'>Frequently Asked Questions ?</h1>
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className={`w-full font-serif text-base text-left py-3 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none ${
              activeIndex === index ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title} {activeIndex===index ? <i className="float-right duration-100 fa-solid fa-angle-down"></i> : <i className="float-right duration-100 fa-solid fa-angle-up"></i>}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-gray-100">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Accordion;
