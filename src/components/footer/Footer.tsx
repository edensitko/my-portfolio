import React, { FormEvent, useRef, useState } from 'react';
import './Footer.css'; // You can add your footer styles here
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

interface FormErrors {
  user_name: string;
  user_email: string;
  message: string;
}

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    user_name: '',
    user_email: '',
    message: '',
  });

  const resetFormAndErrors = () => {
    if (form.current) {
      form.current.reset();
      setFormErrors({
        user_name: '',
        user_email: '',
        message: '',
      });
    }
  };

  const validateForm = () => {
    const errors: FormErrors = {
      user_name: '',
      user_email: '',
      message: '',
    };

    if (!form.current) return errors;

    if (!form.current.user_name.value) {
      errors.user_name = 'Name is required';
    }

    if (!form.current.user_email.value) {
      errors.user_email = 'Email is required';
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(form.current.user_email.value)
    ) {
      errors.user_email = 'Invalid email format';
    }

    if (!form.current.message.value) {
      errors.message = 'Message is required';
    }

    return errors;
  };
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const errors = validateForm();
  
    if (Object.values(errors).every((error) => !error)) {
      setLoading(true);
  
      if (form.current) {
        try {
          const result = await emailjs.sendForm(
            'service_djs7hdo',
            'template_135jwnh',
            form.current,
            'Bi_8Y30sRs9mcFLS0'
          );
          console.log(result.text);
          setShowSuccessMessage(true);
          resetFormAndErrors();
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 1200);
        } catch (error) {
  
            setShowSuccessMessage(false);
          console.log((error)); 
        } finally {
          setLoading(false);
        }
      }
    } else {
      setFormErrors(errors);
    }
    
  };
  return (
    <div className="div">
      <footer className="footer">
        <div className="custom-shape-divider-top-1693749445">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <h1>Get in touch </h1>
            <br />
            <br />
            <label>Name</label>
            <input type="text" name="user_name" />
            {formErrors.user_name && <div className="error">{formErrors.user_name}</div>}
            <label>Email</label>
            <input type="email" name="user_email" />
            {formErrors.user_email && <div className="error">{formErrors.user_email}</div>}
            <label>Message</label>
            <textarea name="message"></textarea>
            {formErrors.message && <div className="error">{formErrors.message}</div>}

            {isLoading ? (
              <div>sending....</div>
            ) : (
              <button type="submit">Send</button>
            )}
            {showSuccessMessage && <div className="succ">Send successfully</div>}
          </form>
        </div>

        <div className="containerfooter">
          <h6> Feel free to connect on social media :) </h6>
        </div>
        <div className="divlinksf">
          <a
            href="https://www.facebook.com/Eden.sitkovetsky?mibextid=b06tZ0"
            className="flink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>

          <a href="https://github.com/edensitko" className="flink" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/eden-sitkovetsky-974460238/"
            className="flink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </footer>
      <div className="down">
        <p>&copy; {new Date().getFullYear()}  All rights reserved to eden sitkovetsky. </p>
      </div>
    </div>
  );
};

export default Footer;
