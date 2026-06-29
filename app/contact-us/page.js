import Footer from '@/components/Footer';
export const metadata = { title: 'Hightower & Hightower' };
export default function Page() {
  return (
    <main className="main-content">
      <style dangerouslySetInnerHTML={{
        __html: `
        .logo-link {
            top: 3px !important;
        }
        /* Absolute Positioning for Headers on Lawyers Page */
        .top-header-bar {
            position: absolute !important;
            top: 0;
            left: 0;
            width: 100%;
            background: transparent !important;
            z-index: 105;
        }

        .main-header {
            position: absolute !important;
            top: 40px;
            /* Height of the top header bar */
            left: 0;
            width: 100%;
            background: transparent !important;
            z-index: 100;
            box-shadow: none !important;
        }

        /* Lawyer Hero Section styling */
        .lawyer-hero-section {
            background-image: url('assets/lawyer-hero.png');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            width: 100%;
            min-height: 800px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            /* Push bottom banner to the end */
            padding-top: 180px;
            /* Space for overlay headers */
            overflow: hidden;
        }

        .lawyer-hero-container {
            max-width: 1825px;
            margin: 0 auto;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            /* Align form to the right */
            align-items: flex-end;
            padding: 0 40px 0px 40px;
            flex-grow: 1;
            /* Stretch to take space above bottom banner */
        }

        .lawyer-hero-right {
            width: 100%;
            max-width: 420px;
            z-index: 15;
        }

        .nav-list {
            margin-top: 34px;
        }

        .form-card {
            margin-bottom: -22px;
        }

        /* Mobile responsiveness for lawyer-hero-section */
        @media (max-width: 1024px) {
            .lawyer-hero-section {
                background-image: none !important;
                background-color: #1D3656 !important;
                min-height: auto;
                padding-top: 140px;
            }

            .lawyer-hero-container {
                justify-content: center;
                padding: 0 20px 30px 20px;
            }

            .lawyer-hero-right {
                max-width: 100%;
            }
        }
      ` }} />

      <section className="contact-us-services-hero">
        {/* Hero section background is handled in CSS */}
      </section>

      {/* Contact Us Form & Map Card */}
      <section className="contact-card-section">
        <div className="contact-card-container">
          {/* Left Side: Get In Touch Form */}
          <div className="contact-card-left">
            <h2 className="contact-card-title">Get In Touch</h2>
            <p className="contact-card-subtitle">Thank you for your interest in contacting the Law Office of
              Hightower & Hightower, P.A. Please fill out the form below and we will get back with you as
              quickly as possible.</p>

            <form className="contact-form" action="#" method="POST">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-first-name">First Name</label>
                  <input type="text" id="contact-first-name" placeholder="First Name" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-last-name">Last Name</label>
                  <input type="text" id="contact-last-name" placeholder="Last Name" required />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" placeholder="Email" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input type="tel" id="contact-phone" placeholder="Phone" required />
                </div>
              </div>

              <div className="contact-form-group full-width">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows="6" placeholder="Message" required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">SUBMIT &rarr;</button>
            </form>

            {/* Bottom contact details */}
            <div className="contact-details-row">
              <div className="contact-detail-col">
                <i className="fa-solid fa-location-dot contact-detail-icon"></i>
                <div>
                  <strong>Hightower & Hightower, P.A.</strong>
                  <p>7 East Silver Springs Blvd., Suite 300<br />Ocala, FL 34470</p>
                  <a href="https://maps.google.com/?q=7+East+Silver+Springs+Blvd+Suite+300+Ocala+FL+34470" target="_blank" className="direction-link">Direction</a>
                </div>
              </div>
              <div className="contact-detail-col">
                <i className="fa-solid fa-phone contact-detail-icon"></i>
                <div>
                  <a href="tel:352-629-7777" className="contact-phone-number">352-629-7777</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Dark Blue Map Panel */}
          <div className="contact-card-right">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.233273304917!2d-82.1392476236996!3d29.187258358672768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e62b52d26ba107%3A0x7ad4554bde9e8384!2sHightower%20%26%20Hightower%2C%20P.A.!5e0!3m2!1sen!2sin!4v1782382765408!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: '0' }} allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>


      {/* H&H Honors & Awards Section */}
    <section className="hh-honors-section" id="hh-honors-section">
        <div className="honors-container">
          <div className="honors-title-wrapper">
            <span className="honors-line"></span>
            <h2 className="honors-title">HONORS & AWARDS</h2>
            <span className="honors-line"></span>
          </div>
          <div className="honors-logos-row">
            <div className="honors-logos-track">
              <div className="honor-logo-item">
                <img src="assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item">
                <img src="assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item">
                <img src="assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item">
                <img src="assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item">
                <img src="assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              <div className="honor-logo-item">
                <a
                  href="https://www.bbb.org/us/fl/ocala/profile/personal-injury-lawyers/hightower-hightower-p-a-0733-235974524/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="assets/bbb-logo.png"
                    alt="Hightower & Hightower, P.A. BBB Accredited Business"
                    style={{ border: 0 }}
                  />
                </a>
              </div>
              {/* Clones for seamless mobile marquee */}
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <a
                  href="https://www.bbb.org/us/fl/ocala/profile/personal-injury-lawyers/hightower-hightower-p-a-0733-235974524/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="assets/bbb-logo.png"
                    alt="Hightower & Hightower, P.A. BBB Accredited Business"
                    style={{ border: 0 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="cta-container">
          <h2 className="cta-text">Fighting for the injured since 1976.</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
