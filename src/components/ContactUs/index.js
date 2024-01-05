import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contact-bg-container">
        <div className="contact-container">
          <div className="contact-card">
            <h1>LeelaGopiKrishna Munipalle</h1>
            <p>Email: munipallegopikrishna@gmail.com</p>
            <p>PhoneNumber: 6304206589</p>
            <p>SrNagar,Hyderabad,Telangana</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ContactUs;
