import "../styles/Contact.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import CollapsibleList from "../components/CollapsibleList/CollapsibleList";

let FAQS = [
  {
    title: "What types of projects does r—vis work on?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isOpen: false,
  },
  {
    title: "How can I book a project?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isOpen: false,
  },
  {
    title: "Where is r—vis based?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isOpen: false,
  },
  {
    title: "What are your rates?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isOpen: false,
  },
];

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
        <div className="container flex-row">
          <div className="left">
            <h3>Get in touch</h3>
            <p className="contact-tip">
              Interested in our services? Fill out this form and our team will
              respond as soon as possible.
            </p>
          </div>
          <div className="right">
            <form className="contact-form">
              <div class="form-item half">
                <label for="first-name">
                  First name<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="John"
                  required
                />
              </div>
              <div class="form-item half">
                <label for="last-name">
                  Last name<span style={{ color: "red" }}> *</span>
                </label>
                <input type="text" id="last-name" placeholder="John" required />
              </div>

              <div class="form-item">
                <label for="email">
                  Email<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div class="form-item">
                <label for="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  placeholder="Company, Inc."
                />
              </div>

              <div class="form-item half">
                <label for="service">
                  I'm interested in<span style={{ color: "red" }}> *</span>
                </label>
                <div class="select-wrapper">
                  <select id="service" required>
                    <option value="" disabled selected>
                      Select a subject
                    </option>
                    <option value="inquiry">
                      Architectural Photography & Film
                    </option>
                    <option value="proposal">
                      Architectural Visualization
                    </option>
                    <option value="request">Graphic Design</option>
                    <option value="media">Others</option>
                  </select>
                  <span class="arrow">▼</span>
                </div>
              </div>
              <div class="form-item half">
                <label for="subject">
                  Subject<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Proposal"
                  required
                />
              </div>

              <div class="form-item">
                <label for="message">
                  Inquiry details<span style={{ color: "red" }}> *</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <Button type="submit" class="submit-button">
                Send
              </Button>
            </form>
          </div>
        </div>
        <div className="container flex-row">
          <div className="left">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="right">
            <CollapsibleList items={FAQS} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
