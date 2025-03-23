import "../styles/Contact.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="main-section">
        <div className="container about-container">
          <div className="contact-left">
            <h3>Get in touch</h3>
            <h4 className="about-tip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h4>
          </div>
          <div className="contact-right"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
