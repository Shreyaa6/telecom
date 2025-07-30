import React from 'react';
import './JoinForm.css';

const JoinForm = () => {
  return (
    <section className="join" id="join">
      <div className="container">
        <h2 className="animate-fade-in">Join Our Team</h2>
        <p className="animate-fade-in">Be part of the future of telecommunications. We're always looking for talented individuals to join our growing team.</p>

        <form className="join-form animate-scale-in">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <select id="position" name="position" required>
              <option value="">Select Position</option>
              <option value="engineer">Network Engineer</option>
              <option value="developer">Software Developer</option>
              <option value="sales">Sales Representative</option>
              <option value="support">Customer Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder="Tell us why you'd like to join Tele Tower" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default JoinForm; 