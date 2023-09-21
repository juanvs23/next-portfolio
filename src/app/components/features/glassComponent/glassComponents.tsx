import "./index.scss";
import React from "react";

function GlassComponents({ gbColor }: { gbColor: string }) {
  return <div className="glassy" style={{ background: gbColor }}></div>;
}

export default GlassComponents;
