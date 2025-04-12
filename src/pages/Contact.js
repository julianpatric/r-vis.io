import "../styles/Contact.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CollapsibleList from "../components/CollapsibleList/CollapsibleList";

const FAQS = [
  {
    title: "What types of projects does r—vis work on?",
    content:
      "We work across a wide range of architectural projects, including residential and commercial spaces, small interiors to large-scale developments, and both built and conceptual works. Whatever stage your project is in, our services are designed to help you communicate it with clarity and impact.",
    isOpen: false,
  },
  {
    title: "How early should we get in touch with r—vis?",
    content:
      "The earlier, the better. Involving us during the design or construction phase gives us more time to understand your vision and develop visuals that align with your goals and timeline. For photography and film, early booking helps us schedule shoots around favorable weather conditions. For visualization and graphic design, we typically require a lead time of 2–3 weeks, depending on the project’s complexity. We recommend reaching out as early as possible so we can plan accordingly.",
    isOpen: false,
  },
  {
    title: "Where are you based?",
    content:
      "We are based in Manila, Philippines. However, we’re open to working on international projects through remote collaboration or by arrangement for travel and on-site documentation.",
    isOpen: false,
  },
  {
    title: "How can I join your team?",
    content:
      "Although we are not actively hiring right now, we are always on the lookout for like-minded artists. If you’re passionate about architecture, design, or arts in general, connect with us via this contact form or email us at hello@r-vis.io. You may also send us a message on our Instagram.",
    isOpen: false,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isServiceSelected, setIsServiceSelected] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      service: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      setErrorMessage("");

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      formData.append("access_key", "b3297d4a-5f9b-486c-ac5d-73f845c647df");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectClass = () => {
    if (errors.service) {
      return "error";
    } else if (isServiceSelected) {
      return "selected";
    }
    return "";
  };

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
            {submitStatus === "success" && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="error-message">
                {errorMessage || "Something went wrong. Please try again."}
              </div>
            )}
          </div>
          <div className="right">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-item half">
                <label htmlFor="firstName">
                  First name<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  id="firstName"
                  placeholder="Leandro"
                  className={errors.firstName ? "error" : ""}
                />
                {errors.firstName && (
                  <span className="error-text">{errors.firstName.message}</span>
                )}
              </div>
              <div className="form-item half">
                <label htmlFor="lastName">
                  Last name<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  id="lastName"
                  placeholder="Locsin"
                  className={errors.lastName ? "error" : ""}
                />
                {errors.lastName && (
                  <span className="error-text">{errors.lastName.message}</span>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="email">
                  Email<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-text">{errors.email.message}</span>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="organization">Organization</label>
                <input
                  {...register("organization")}
                  type="text"
                  id="organization"
                  placeholder="Company, Inc."
                />
              </div>

              <div className="form-item half">
                <label htmlFor="service">
                  I'm interested in<span style={{ color: "red" }}> *</span>
                </label>
                <div className="select-wrapper">
                  <select
                    {...register("service", {
                      required: "Please select a service",
                    })}
                    id="service"
                    onChange={(e) => {
                      setIsServiceSelected(true);
                      if (e.target.value) {
                        if (errors.service) {
                          errors.service = undefined;
                        }
                      }
                    }}
                    className={selectClass()}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="architectural-photography">
                      Architectural Photography & Film
                    </option>
                    <option value="architectural-visualization">
                      Architectural Visualization
                    </option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="others">Others</option>
                  </select>
                  <span className="arrow">▼</span>
                </div>
                {errors.service && (
                  <span className="error-text">{errors.service.message}</span>
                )}
              </div>
              <div className="form-item half">
                <label htmlFor="subject">
                  Subject<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  id="subject"
                  placeholder="Proposal"
                  className={errors.subject ? "error" : ""}
                />
                {errors.subject && (
                  <span className="error-text">{errors.subject.message}</span>
                )}
              </div>

              <div className="form-item">
                <label htmlFor="message">
                  Inquiry details<span style={{ color: "red" }}> *</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  id="message"
                  placeholder="Type your message..."
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-text">{errors.message.message}</span>
                )}
              </div>

              <Button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
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
