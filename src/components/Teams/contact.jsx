import { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Form submitted:', formData);
    // You can also send the data to your server or perform any other action
  };

  return (
    <div className="contact-us-container">
      <form onSubmit={handleSubmit}>
        <label className='labels'>
          <p>Name </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Type your name....'
          />
        </label>
        <label className='labels'>
          <p>Email </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Type your email address....'
          />
        </label>
        <label>
          <p>Message </p>
          <textarea
            name="message" className='m'
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Express Yourself....'
          />
        </label>
        <div className='buttons'>
          <button type="submit" className='button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
