import React from 'react';
import './Contact.css'; // Import CSS for styling


function Contact() {
  return (
    <div className="contact-container">

      <h1>Contact Us</h1>
      <p>If you have any questions or comments, feel free to reach out to us using the form below or through the contact details provided.</p>
      <p>Contact</p>
    
      <h2>Contact Information</h2>
        <p><strong>Email:</strong> darylshifflett@gmail.com</p>
        <p><strong>Phone:</strong> +1 (619) 464-9695</p>
        <p><strong>Address:</strong> 4021 Frodo street, Mordor</p>
    
        <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      
      {/* Optional: Add a map to show your location */}
      <div className="map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12877.712379374965!2d-117.05178493329026!3d32.75125646134911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d953a8d58c87b7%3A0xfbd6b52f2eae7af0!2s32.75125646134911%2C%20-117.05178493329026!5e0!3m2!1sen!2sus!4v1639305454171!5m2!1sen!2sus"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;



/*import React from 'react';

function Contact() {
  return <h2>Contact Page</h2>;
}

export default Contact;*/
