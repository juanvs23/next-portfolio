import { ProjectItem } from "@/types";
import Atropos from "atropos/react";
import Image from "next/image";
import React from "react";
import "./styles.scss";
/**
 * Render a project item component.
 *
 * @param {number} id - The ID of the project item.
 * @param {string} name - The name of the project item.
 * @param {string} url - The URL of the project item.
 * @param {string} description - The description of the project item.
 * @param {string} img - The image of the project item.
 * @return {JSX.Element} The rendered project item component.
 */

function ProyectItemComponent({ data }: { data: ProjectItem }) {
  const { id, name, url, description, img } = data;
  return (
    <Atropos>
      <article className="projectItem">
        <div className="project-overlay"></div>
        <Image
          src={img}
          alt={name}
          width={650}
          height={760}
          className="image-bg"
        />
        <h3 className="projectname">{name}</h3>
        <div className="button-container">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            View Page
          </a>
        </div>
      </article>
    </Atropos>
  );
}

export default ProyectItemComponent;
