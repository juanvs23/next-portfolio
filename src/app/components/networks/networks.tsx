import { socialNetWorks } from "@/app/constants";
import React from "react";
import "./networks.scss";

const Networks = () => {
  return (
    <aside className="networks">
      <h3 className="our-network">{socialNetWorks.title}</h3>
      <div className="networks-container">
        {socialNetWorks.netWorks.map((network) => (
          <a
            key={network.name}
            href={network.link}
            aria-label={network.name}
            target="_blank"
            rel="noreferrer"
            title={network.name}
          >
            <i className={network.icon} style={{ color: network.color }}></i>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Networks;
