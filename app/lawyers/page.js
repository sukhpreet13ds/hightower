import Footer from '@/components/Footer';

export const metadata = { title: 'Hightower & Hightower' };

export default function Page() {
  return (
    <main className="main-content">
      <style dangerouslySetInnerHTML={{ __html: `
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

        /* Small desktops and landscape tablets positioning */
        @media (min-width: 1025px) and (max-width: 1440px) {
            .lawyer-hero-section {
                background-position: 20% top;
            }
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

      <section className="lawyer-hero-section">
        <div className="lawyer-hero-container">
          <div className="lawyer-hero-right">
            <div className="form-card">
              <div className="form-badge">✓ 100% FREE - NO FEE UNLESS WE WIN</div>
              <h2 className="form-title">Talk to Hightower & Hightower</h2>
              <p className="form-subtitle">We'll review your case and respond within hours.</p>

              <form className="case-review-form" action="#" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">FIRST NAME</label>
                    <input type="text" id="first-name" placeholder="John" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">LAST NAME</label>
                    <input type="text" id="last-name" placeholder="Doe" required/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone-number">PHONE NUMBER</label>
                  <input type="tel" id="phone-number" placeholder="(352) 555-1234" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="case-type">CASE TYPE</label>
                  <select id="case-type" required defaultValue="">
                    <option value="" disabled>Select your case type</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="car-accident">Car Accident</option>
                    <option value="medical-malpractice">Medical Malpractice</option>
                    <option value="wrongful-death">Wrongful Death</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="brief-description">BRIEF DESCRIPTION</label>
                  <textarea id="brief-description" rows="3"
                    placeholder="Tell us briefly what happened and when..." required></textarea>
                </div>

                <button type="submit" className="btn-submit-case">SUBMIT MY FREE CASE REVIEW <i
                  className="fa-solid fa-arrow-right-long"></i></button>
              </form>

              <p className="form-footer-text">
                By submitting, you agree to our <a href="privacy-policy.html" className="footer-text"
                  style={{ color: '#C2905B' }}>Privacy Policy</a>. Your information is confidential and
                protected by attorney-client privilege.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gold Banner Bar */}
        <div className="hero-bottom-banner">
          <span>No Cost Consultation – 100% FREE Until We Win!</span>
        </div>
      </section>

      <section className="lawyer-pa-section">
        <div className="pa-bg-svg-wrapper">
          <img src="assets/hero-bg.svg" alt="H&H Logo Graphic" className="pa-bg-svg"/>
        </div>
        <div className="pa-container">
          <div className="pa-header">
            <h2 className="pa-title">Statewide Lawyers</h2>
            <div className="pa-subtitle">Hightower & Hightower, P.a.</div>
          </div>

          <div className="pa-content-row">
            <div className="pa-left-col">
              <img src="assets/above-left.png" alt="Daniel & Alison Hightower" className="pa-featured-img"/>
            </div>
            <div className="pa-right-col">
              <h3 className="pa-content-title">Personal Injury Attorneys in Ocala, Florida</h3>

              <div className="pa-text-content">
                <p>Since 1976, Daniel L. Hightower has been standing up for the rights of people injured in
                  car, work, and other accidents. Hightower & Hightower, P.A.'s personal injury lawyers,
                  workers' compensation lawyers, and social security disability lawyers have years of
                  experience in successfully representing the interests of their clients and obtaining
                  recoveries on their behalf.</p>

                <p>The Law Office of Hightower & Hightower, P.A. has handled cases state-wide from Pensacola
                  to Jacksonville to Islamorada to Tampa, Florida. We also proudly serve Alachua
                  (Gainesville and surrounding cities), Bradford, Citrus, Clay, Columbia, Dixie, Flagler,
                  Gilchrist, Hernando, Lafayette, Lake, Levy, Marion (Ocala and surrounding cities),
                  Orange, Putnam, Seminole, St. Johns, Sumter (The Villages, Lady Lake and surrounding
                  cities), Suwannee, Union, Volusia and other surrounding counties.</p>

                <p className="pa-quote">Mr. Hightower frequently says, "Have Briefcase, Will Travel."</p>

                <p>Since 1976, Daniel L. Hightower has been standing up for the rights of people injured in
                  car, work, and other accidents. Our personal injury lawyers, workers' compensation
                  lawyers, and social security disability lawyers have years of experience in successfully
                  representing the interests of their clients and obtaining recoveries on their behalf.
                </p>
              </div>

              <div className="pa-footer-note">
                When we represent our clients, we're all in. We fight hard for them.<br/>
                <strong>No Matter What.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lawyers-profiles-section">
        <div className="profiles-container">
          <h3 className="profiles-section-title">Touch the picture of each lawyer for his or her biographical
            information.</h3>

          <div className="profiles-grid">
            {/* Lawyer 1 */}
            <div className="profile-card">
              <a href="lawyers/daniel-l-hightower.html" style={{ textDecoration: 'none' }}>
                <div className="profile-img-wrapper">
                  <img src="assets/lawyer-1.png" alt="Daniel L. Hightower" className="profile-img"/>
                  <div className="profile-overlay-hover">
                    <span className="read-more-text">Read More <i
                      className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                </div>
                <div className="profile-info-overlay">
                  <span className="profile-badge">FOUNDING PARTNER</span>
                  <h4 className="profile-name">Daniel L. Hightower</h4>
                  <a href="#daniel" className="profile-meet-btn btn-white"
                    data-open-consult="true">CONSULTATION</a>
                </div>
              </a>
            </div>
            {/* Lawyer 2 */}
            <div className="profile-card">
              <a href="lawyers/alison-l-hightower.html" style={{ textDecoration: 'none' }}>
                <div className="profile-img-wrapper">
                  <img src="assets/lawyer-2.png" alt="Alison L. Hightower" className="profile-img"/>
                  <div className="profile-overlay-hover">
                    <span className="read-more-text">Read More <i
                      className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                </div>
                <div className="profile-info-overlay">
                  <span className="profile-badge">FOUNDING PARTNER</span>
                  <h4 className="profile-name">Alison L. Hightower</h4>
                  <a href="#alison" className="profile-meet-btn btn-white"
                    data-open-consult="true">CONSULTATION</a>
                </div>
              </a>
            </div>
            {/* Lawyer 3 */}
            <div className="profile-card">
              <a href="lawyers/barbara-l-richard.html" style={{ textDecoration: 'none' }}>
                <div className="profile-img-wrapper">
                  <img src="assets/lawyer-3.png" alt="Barbara L. Richard" className="profile-img"/>
                  <div className="profile-overlay-hover">
                    <span className="read-more-text">Read More <i
                      className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                </div>
                <div className="profile-info-overlay">
                  <h4 className="profile-name">Barbara L. Richard</h4>
                  <a href="#barbara" className="profile-meet-btn btn-white"
                    data-open-consult="true">CONSULTATION</a>
                </div>
              </a>
            </div>
            {/* Lawyer 4 */}
            <div className="profile-card">
              <a href="lawyers/mark-n-tipton.html" style={{ textDecoration: 'none' }}>
                <div className="profile-img-wrapper">
                  <img src="assets/lawyer-4.png" alt="Mark N. Tipton" className="profile-img"/>
                  <div className="profile-overlay-hover">
                    <span className="read-more-text">Read More <i
                      className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                </div>
                <div className="profile-info-overlay">
                  <h4 className="profile-name">Mark N. Tipton</h4>
                  <a href="#mark" className="profile-meet-btn btn-white"
                    data-open-consult="true">CONSULTATION</a>
                </div>
              </a>
            </div>
            {/* Lawyer 5 */}
            <div className="profile-card">
              <a href="lawyers/daniel-l-hightower.html" style={{ textDecoration: 'none' }}>
                <div className="profile-img-wrapper">
                  <img src="assets/lawyer-5.png" alt="David D. Guiley" className="profile-img"/>
                  <div className="profile-overlay-hover">
                    <span className="read-more-text">Read More <i
                      className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                </div>
                <div className="profile-info-overlay">
                  <h4 className="profile-name">David D. Guiley</h4>
                  <a href="#david" className="profile-meet-btn btn-white"
                    data-open-consult="true">CONSULTATION</a>
                </div>
              </a>
            </div>
            {/* Lawyer 6 */}
            <div className="profile-card">
              <a href="lawyers/shawn-e-clark.html" style={{ textDecoration: 'none' }}>
                <div className="profile-img-wrapper">
                  <img src="assets/lawyer-6.png" alt="Shawn E. Clark" className="profile-img"/>
                  <div className="profile-overlay-hover">
                    <span className="read-more-text">Read More <i
                      className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                </div>
                <div className="profile-info-overlay">
                  <h4 className="profile-name">Shawn E. Clark</h4>
                  <a href="#shawn" className="profile-meet-btn btn-white"
                    data-open-consult="true">CONSULTATION</a>
                </div>
              </a>
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
                <img src="assets/award1.png" alt="The National Trial Lawyers Top 100"/>
              </div>
              <div className="honor-logo-item">
                <img src="assets/award2.png" alt="AV Preeminent Rated"/>
              </div>
              <div className="honor-logo-item">
                <img src="assets/award3.png" alt="Martindale-Hubbell Client Champion Gold"/>
              </div>
              <div className="honor-logo-item">
                <img src="assets/award4.webp" alt="Florida Bar Certified Civil Trial"/>
              </div>
              <div className="honor-logo-item">
                <img src="assets/award5.png" alt="Florida Bar Certified Workers Compensation"/>
              </div>
              {/* Clones for seamless mobile marquee */}
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award1.png" alt="The National Trial Lawyers Top 100"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award2.png" alt="AV Preeminent Rated"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award3.png" alt="Martindale-Hubbell Client Champion Gold"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award4.webp" alt="Florida Bar Certified Civil Trial"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="assets/award5.png" alt="Florida Bar Certified Workers Compensation"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="cta-container">
          <h2 className="cta-text">Only pay if we win. Contact us 24/7.</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
