import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export default function Header({ headingTitle, titlebar, headingUrl }) {
  const themeContext = useContext(ThemeContext);
  return (
    <header className="header">
      <div>
        <img
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"
          alt=""
          className={`hero-image-block hero-image-block-${themeContext.theme.name}`}
        />

        <div className="hero-block">
          <h2
            className={`hero-heading hero-heading-${themeContext.theme.name}`}
          >
            {headingTitle}
            <br />
            {titlebar}
          </h2>
          <p
            className={`hero-subheading hero-subheading-${themeContext.theme.name}`}
          >
            Available Here...
          </p>

          <Link
            className={`hero-link hero-link-${themeContext.theme.name}`}
            to={headingUrl ? headingUrl : "#"}
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}
