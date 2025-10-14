import React from "react";

function RemixIconContent({riClass, children, icon, title, pClass="", content, className="", h3Class="" }) {
  return(
    <>
      <div className={`${riClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`${icon} text-2xl`}></i>
      </div>
      <h3 className={`${h3Class} text-xl font-semibold mb-2 text-gray-900`}>{title}</h3>
      <p className={`${pClass} text-gray-600`}>{content}</p>
      {children && <p className="text-center">{children}</p>}
    </>
  );
};

export default RemixIconContent;