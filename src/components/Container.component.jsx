import React from "react";

const ContainerComponent = ({ children }) => {
  return <div className="container mx-auto h-screen">{children}</div>;
};

export default ContainerComponent;
