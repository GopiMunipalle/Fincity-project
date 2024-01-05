import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

function About() {
  return (
    <div className="about-bg-container">
      <Navbar />
      <div className="about-container">
        <div className="about-page">
          <h1 className="about-heading">About Me</h1>
          <p className="about-description">
            I'm LeelaGopiKrishna, From SrNagar,Hyderabad. I did My Graduation in
            Bachelor Of Science(BSC) in 2022. After Completion of My Graduation,
            I want to get in to IT Field,So I joined NxtWave CCBP 4.0
            Technologies as A MERN FullStack Trainee. In that Training, I have
            learnt Html,Css,JavaScript ,Boostrap,Python,ReactJS,NodeJs,ExpressJs
            And Sqlite.
          </p>
        </div>
        <hr className="hr" />
        <div className="about-page">
          <h1 className="about-heading">What I do</h1>
          <p className="about-description">
            I am a skilled and passionate Fullstack Developer with experience in
            creating visually appealing and user-friendly websites. I have a
            strong understanding of design and a key eye for detail. I am
            proficient in Html,Css,JavaScript,ReactJS, NodeJs with ExpressJs and
            Sqlite.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
