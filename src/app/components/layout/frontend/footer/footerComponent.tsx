import { useFooter } from "@/app/constants";
import "./index.scss";


export default function FooterComponent() {
  const footer = useFooter();
  return (
    <footer>
      <h2>
        {footer.develop}{" "}
        <a
          className="hover:text-blue-400 transition-all duration-500"
          href="mailto:juanvs23@gmail.com"
          target="_blank"
        >
          Juan Carlos Avila
        </a>
      </h2>
      <p>{footer.copy} {new Date().getFullYear()}</p>
    </footer>
  );
}
