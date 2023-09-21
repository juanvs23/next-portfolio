import "./index.scss";

export default function FooterComponent() {
  return (
    <footer>
      <h2>
        Develop by{" "}
        <a
          className="hover:text-blue-400 transition-all duration-500"
          href="mailto:juanvs23@gmail.com"
          target="_blank"
        >
          Juan Carlos Avila
        </a>
      </h2>
      <p>Copyright © 2023</p>
    </footer>
  );
}
