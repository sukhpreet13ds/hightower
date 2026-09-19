'use client';

import { useState, useEffect } from 'react';
import { CONTENT_DEFAULTS } from '@/lib/content-defaults';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [content, setContent] = useState(CONTENT_DEFAULTS.footer);

  useEffect(() => {
    fetch('/api/content?section=footer')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setContent((prev) => ({ ...prev, ...data })); })
      .catch(() => {});
  }, []);

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
            <span className="consult-badge">{content.consult_badge_text}</span>
            <a href={`tel:${content.phone_display}`} className="footer-phone">{content.phone_display}</a>

            <div className="footer-newsletter">
              <h4>{content.newsletter_title}</h4>
              <p>{content.newsletter_subtitle}</p>
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
            <a href={content.facebook_url} aria-label="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            <a href={content.twitter_url} aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href={content.youtube_url} aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            <a href={content.linkedin_url} aria-label="LinkedIn" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-nav-row">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/lawyers">Meet Our Attorneys</a></li>
              <li><a href="/areas-of-practice">Practice Areas</a></li>
              <li><a href="/notable-trial-results-settlements">Notable Case Results</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-disclaimer">
            <div className="footer-bottom-meta">
              <p className="copyright-text">{content.copyright_text}</p>
              <div className="legal-links">
                <a href="/privacy-policy">Privacy Policy</a>
                {/* <span className="legal-divider">|</span>
                <a href="#">Site Map</a> */}
              </div>
            </div>
            <div className="footer-meta-desc">
              <p style={{ paddingTop: '60px' }}>{content.disclaimer_text}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
