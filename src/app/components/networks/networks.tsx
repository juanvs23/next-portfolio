import { useSocialNetWorks } from "@/app/constants";
import React from "react";
import "./networks.scss";
import { Icons } from "@/app/components";

const Networks = () => {
  const size = "25";
  return (
    <aside className="networks">
      <h3 className="our-network">{useSocialNetWorks().title}</h3>
      <div className="networks-container">
        {useSocialNetWorks().netWorks.map((network) => (
          <a
            key={network.name}
            href={network.link}
            aria-label={network.name}
            target="_blank"
            rel="noreferrer"
            title={network.name}
          >
            {network.icon === "github" ? (
              <Icons.IconGithub size={size} color={network.color} />
            ) : network.icon === "facebook" ? (
              <Icons.IconFacebook size={size} color={network.color} />
            ) : network.icon === "linkedin" ? (
              <Icons.IconLinkedin size={size} color={network.color} />
            ) : (
              <Icons.IconTwitter size={size} color={network.color} />
            )}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Networks;
