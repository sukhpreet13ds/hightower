'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Thank you for subscribing!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Subscription failed.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="footer-section" id="footer-section">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-contact">
            <span className="consult-badge">100% Free Consultation</span>
            <a href="tel:352-646-3944" className="footer-phone">352-646-3944</a>
            
            <div className="footer-newsletter">
              <h4>Signup For Our Newsletter</h4>
              <p>Receive our newsletter and stay updated on legal topics and current events.</p>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  required 
                  className="newsletter-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
                <button type="submit" className="newsletter-btn" disabled={submitting}>
                  {submitting ? '...' : 'Subscribe'}
                </button>
              </form>
              {status.message && (
                <span className={`newsletter-status ${status.type}`}>
                  {status.message}
                </span>
              )}
            </div>
          </div>
          <div className="footer-logo-wrapper">
            <img src="/assets/footer-logo.svg" alt="H&H Lawyers Logo" className="footer-logo-img" />
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/danhightowerlawyer/" aria-label="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/dan_hightower" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UC5QEO_t8BdcwOsEOWT5MHiQ" aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/daniel-l-hightower-p-a-" aria-label="LinkedIn" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-nav-row">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/lawyers.html">Meet Our Attorneys</a></li>
              <li><a href="/areas-of-practice.html">Practice Areas</a></li>
              <li><a href="#">Our Victories</a></li>
              <li><a href="/contact-us.html">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-disclaimer">
            <div className="footer-bottom-meta">
              <p className="copyright-text">Copyright &copy; 2026 Hightower & Hightower. All Rights Reserved.</p>
              <div className="legal-links">
                <a href="/privacy-policy.html">Privacy Policy</a>
                <span className="legal-divider">|</span>
                <a href="#">Site Map</a>
              </div>
            </div>
            <div className="footer-meta-desc">
              <p style={{ paddingTop: '60px' }}>The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. The verdicts and settlements listed on this site are intended to be representative of cases handled by Hightower & Hightower. These listings are not a guarantee or prediction of the outcome of any other claims.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
