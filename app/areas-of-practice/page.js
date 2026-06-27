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

      <section className="area-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Areas of <br/>Practice</h1>
          </div>
          <div className="community-hero-right">
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
        {/* Bottom Gold Banner */}
        <div className="community-hero-banner">
          <div className="community-hero-banner-content">
            No Cost Consultation – 100% FREE Until We Win!
          </div>
        </div>
      </section>

      <section className="area-services-laws-section">
        <div className="area-services-laws-container">
          {/* Top Row (2 Big Items) */}
          <div className="area-services-laws-top-row">
            {/* Item 1: Personal Injury Law */}
            <div className="area-services-laws-item area-services-laws-large">
              <a href="areas-of-practice/work-accident-law.html"
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="assets/law1.jpg" alt="Personal Injury Law" className="area-services-laws-bg-img"/>
                <div className="area-services-laws-content">
                  <h2 className="area-services-laws-title">Personal Injury<br/>Law</h2>
                  <span className="area-services-laws-line"></span>
                  <div className="area-services-laws-hover-content">
                    <p className="area-services-laws-description">
                      Since 1976, <a href="lawyers/daniel-l-hightower.html"
                        className="area-services-laws-link">Daniel L. Hightower</a> has been standing up
                      for
                      the rights of people against those that caused them injury. Many times the
                      at-fault
                      party is represented by an insurance company, or the...
                    </p>
                    <a href="#" className="area-services-laws-button"
                      data-open-consult="true">FREE CONSULTATION</a>
                  </div>
                </div>
              </a>
            </div>
            {/* Item 2: Car Accident Law */}
            <div className="area-services-laws-item area-services-laws-large">
              <a href="areas-of-practice/work-accident-law.html" style={{ textDecoration: 'none' }}>
                <img src="assets/law2.jpg" alt="Car Accident Law" className="area-services-laws-bg-img"/>
                <div className="area-services-laws-content">
                  <h2 className="area-services-laws-title">Car Accident<br/>Law</h2>
                  <span className="area-services-laws-line"></span>
                  <div className="area-services-laws-hover-content">
                    <p className="area-services-laws-description">
                      In a split second, an car, truck or motorcycle accident can change the lives of
                      you
                      and your loved ones forever. A traffic crash occurs somewhere in Florida every
                      two
                      seconds. Most crashes are caused by the negligence or...
                    </p>
                    <a href="#" className="area-services-laws-button"
                      data-open-consult="true">FREE CONSULTATION</a>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Row (3 Small Items) */}
          <div className="area-services-laws-bottom-row">
            {/* Item 3: Work Accident Law */}
            <div className="area-services-laws-item area-services-laws-small">
              <a href="areas-of-practice/work-accident-law.html" style={{ textDecoration: 'none' }}>
                <img src="assets/law3.jpg" alt="Work Accident Law" className="area-services-laws-bg-img"/>
                <div className="area-services-laws-content">
                  <h2 className="area-services-laws-title below-title">Work Accident<br/>Law</h2>
                  <span className="area-services-laws-line"></span>
                  <div className="area-services-laws-hover-content">
                    <p className="area-services-laws-description below-desc-area">

                      <a href="lawyers/daniel-l-hightower.html" className="area-services-laws-link">Daniel
                        L.
                        Hightower</a>, work accident lawyer, has been helping injured workers with
                      their
                      work accident claims since 1976. As an injured worker under the workers’
                      compensation law you are entitled to receive...
                    </p>
                    <a href="#" className="area-services-laws-button area-services-laws-button-small"
                      data-open-consult="true">FREE
                      CONSULTATION</a>
                  </div>
                </div>
              </a>
            </div>
            {/* Item 4: Wrongful Death Law */}
            <div className="area-services-laws-item area-services-laws-small">
              <a href="areas-of-practice/wrongful-death-law.html" style={{ textDecoration: 'none' }}>
                <img src="assets/law5.jpg" alt="Wrongful Death Law" className="area-services-laws-bg-img"/>
                <div className="area-services-laws-content">
                  <h2 className="area-services-laws-title below-title">Wrongful Death<br/>Law</h2>
                  <span className="area-services-laws-line"></span>
                  <div className="area-services-laws-hover-content">
                    <p className="area-services-laws-description below-desc-area">

                      Wrongful death is any death that results from the misconduct or negligence of
                      another person or entity. Wrongful death can be the result of an auto accident,
                      a
                      work accident, a dangerous product or the negligent...
                    </p>
                    <a href="#" className="area-services-laws-button area-services-laws-button-small"
                      data-open-consult="true">FREE
                      CONSULTATION</a>
                  </div>
                </div>
              </a>
            </div>
            {/* Item 5: Social Security Disability */}
            <div className="area-services-laws-item area-services-laws-small">
              <a href="areas-of-practice/social-security-disability-law.html" style={{ textDecoration: 'none' }}>
                <img src="assets/law4.jpg" alt="Social Security Disability"
                  className="area-services-laws-bg-img"/>
                <div className="area-services-laws-content">
                  <h2 className="area-services-laws-title below-title">Social Security<br/>Disability</h2>
                  <span className="area-services-laws-line"></span>
                  <div className="area-services-laws-hover-content">
                    <p className="area-services-laws-description below-desc-area">

                      Occasionally prospective clients contact our office for representation before
                      they
                      have applied for Social Security Disability (SSD) benefits. We are always happy
                      to
                      answer any questions you may have, ...

                    </p>
                    <a href="#" className="area-services-laws-button area-services-laws-button-small"
                      data-open-consult="true">FREE
                      CONSULTATION</a>
                  </div>
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
