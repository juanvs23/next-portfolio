import { ProjectItem } from "@/types";
import Image from "next/image";
import { useProjects } from "@/app/constants";
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
  const { button } = useProjects();
  const { id, name, url, description, img } = data;

  return (
    <article className="projectItem" style={{ overflow: "hidden" }}>
      <div className="project-overlay"></div>
      <Image
        src={img}
        alt={name}
        width={650}
        height={760}
        className="image-bg max-h-[400px] object-top object-cover"
      />
      <h3 className="projectname">{name}</h3>
      <div className="button-container">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          {button}
        </a>
      </div>
    </article>
  );
}

export default ProyectItemComponent;
