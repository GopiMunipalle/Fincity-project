import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-card">
        <div className="home-details-card">
          <h1 className="home-header">UI/UX Designer</h1>
          <h1 className="home-title">Hello, my name is Madelyn Torff</h1>
          <p className="home-description">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="button-container">
            <button type="button" className="projects-button">
              <Link to="/projects" className="link">
                Projects
              </Link>
            </button>
            <button type="button" className="linked-button">
              <a
                href="https://www.linkedin.com/in/leelagopikrishna/"
                target="__blank"
                className="link"
              >
                Linkedin
              </a>
            </button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dpiaz73h0/image/upload/v1704384267/image_1_z89cyg.png"
          alt="Home-image"
          className="home-image"
        />
      </div>
    </div>
  );
}

export default Home;
