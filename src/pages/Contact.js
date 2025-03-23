import "../styles/Contact.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-section">
        <div className="container about-container">
          <div className="contact-left bg-red-500 text-white p-4">
            <h3>Get in touch</h3>
            <p className="about-tip">
              Interested in our services? Fill out this form and our team will
              respond as soon as possible.
            </p>
          </div>
          <div className="form-container">
            <form className="contact-form">
              <div class="form-item half">
                <label for="first-name">First name*</label>
                <input type="text" id="first-name" placeholder="John" />
              </div>
              <div class="form-item half">
                <label for="last-name">Last name*</label>
                <input type="text" id="last-name" placeholder="John" />
              </div>

              <div class="form-item">
                <label for="email">Email*</label>
                <input type="email" id="email" placeholder="you@company.com" />
              </div>

              <div class="form-item">
                <label for="organization">Organization*</label>
                <input
                  type="text"
                  id="organization"
                  placeholder="Company, Inc."
                />
              </div>

              <div class="form-item half">
                <label for="interest">I'm interested in*</label>
                <input type="text" id="interest" placeholder="Visualization" />
              </div>
              <div class="form-item half">
                <label for="subject">Subject*</label>
                <input type="text" id="subject" placeholder="Proposal" />
              </div>

              <div class="form-item">
                <label for="message">Message*</label>
                <textarea
                  id="message"
                  placeholder="My message is..."
                ></textarea>
              </div>

              <Button type="submit" class="submit-button">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
