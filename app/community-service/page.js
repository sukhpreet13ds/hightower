import Footer from '@/components/Footer';

export const metadata = { title: 'Hightower & Hightower' };

export default function Page() {
  return (
    <main className="main-content">
      <style dangerouslySetInnerHTML={{
        __html: `
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

      <section className="community-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Community Service</h1>
          </div>
          <div className="community-hero-right">
            <div className="form-card">
              <div className="form-badge">✓ 100% FREE - NO FEE UNLESS WE WIN</div>
              <h2 className="form-title">Talk to Hightower & Hightower</h2>
              <p className="form-subtitle">We’ll review your case and get back to you soon.</p>

              <form className="case-review-form" action="#" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">FIRST NAME</label>
                    <input type="text" id="first-name" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">LAST NAME</label>
                    <input type="text" id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone-number">PHONE NUMBER</label>
                  <input type="tel" id="phone-number" placeholder="(352) 555-1234" required />
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

      {/* Sponsors / Brands Section */}
      <section className="sponsors-section">
        <div className="sponsors-container">
          <h3 className="sponsors-intro-text">
            Hightower & Hightower, P.A. Takes Great Pride In Supporting Community Organizations And Activities
            That Make Ocala, The Villages, Gainesville and Surrounding Areas Of North Central Florida Such A
            Pleasant Place To Live. The Following Links Represent Some Of The Programs And Organizations That
            Hightower & Hightower, P.A. Proudly Supports:
          </h3>

          <div className="sponsors-rows-wrapper">
            {/* Row 1 */}
            <div className="sponsors-row">
              <a href="https://abatefloridainc.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.05s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand2.png" alt="ABATE of Florida, Inc." />
                </div>
                <span className="sponsor-name">ABATE of Florida, Inc.</span>
              </a>
              <a href="https://www.facebook.com/AbateOfFloridaForestChapter" className="sponsor-item"
                target="_blank" style={{ animationDelay: '0.1s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand4.png" alt="ABATE of Florida, Forest Chapter" />
                </div>
                <span className="sponsor-name">ABATE of Florida, Forest Chapter</span>
              </a>
              <a href="https://alachua.ifas.ufl.edu/agriculture/youth_fair/index.shtml" className="sponsor-item"
                target="_blank" style={{ animationDelay: '0.15s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand5.png" alt="Alachua County Youth Fair and Livestock Show" />
                </div>
                <span className="sponsor-name">Alachua County Youth Fair and Livestock Show</span>
              </a>
              <a href="https://www.cancer.org/?gclid=CMORwr2LiasCFY5b7AodlxCX4Q" className="sponsor-item"
                target="_blank" style={{ animationDelay: '0.2s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand3.png" alt="American Cancer Society" />
                </div>
                <span className="sponsor-name">American Cancer Society</span>
              </a>
              <a href="https://www.gilchristschools.org/o/bhs/page/welcome-1" className="sponsor-item"
                target="_blank" style={{ animationDelay: '0.25s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand6.png" alt="Bell High School Athletics" />
                </div>
                <span className="sponsor-name">Bell High School Athletics</span>
              </a>
            </div>

            {/* Row 2 */}
            <div className="sponsors-row">
              <a href="https://scouting.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.3s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand8.png" alt="Boy Scouts of America" />
                </div>
                <span className="sponsor-name">Boy Scouts of America</span>
              </a>
              <a href="https://www.facebook.com/BuncoBabesOcala" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.35s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand7.png" alt="Bunco Babes of Ocala" />
                </div>
                <span className="sponsor-name">Bunco Babes of Ocala</span>
              </a>
              <a href="https://www.clsmf.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.4s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand9.png" alt="Community Legal Services of Mid-Florida" />
                </div>
                <span className="sponsor-name">Community Legal Services of Mid-Florida</span>
              </a>
              <a href="http://www.raftercrosscowboychurch.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.45s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand10.png" alt="Cowboy Church" />
                </div>
                <span className="sponsor-name">Cowboy Church</span>
              </a>
              <a href="https://www.fumcocala.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.5s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand11.png" alt="First United Methodist Church of Ocala" />
                </div>
                <span className="sponsor-name">First United Methodist Church of Ocala</span>
              </a>
            </div>

            {/* Row 3 */}
            <div className="sponsors-row">
              <a href="https://floridaworkers.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.55s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand12.png" alt="Florida Workers' Advocates" />
                </div>
                <span className="sponsor-name">Florida Workers' Advocates</span>
              </a>
              <a href="https://historicocala.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.6s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand25.png" alt="Historical Ocala Preservation Society" />
                </div>
                <span className="sponsor-name">Historical Ocala Preservation Society</span>
              </a>
              <a href="https://iesmarion.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.65s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand13.png" alt="Interfaith Emergency Services, Inc." />
                </div>
                <span className="sponsor-name">Interfaith Emergency Services, Inc.</span>
              </a>
              <a href="https://mcaocala.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.7s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand14.png" alt="Marion Cultural Alliance" />
                </div>
                <span className="sponsor-name">Marion Cultural Alliance</span>
              </a>
              <a href="https://ocalabusinessleaders.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.75s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand15.png" alt="Ocala Business Leaders" />
                </div>
                <span className="sponsor-name">Ocala Business Leaders</span>
              </a>
            </div>

            {/* Row 4 */}
            <div className="sponsors-row">
              <a href="https://ocalacep.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.8s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand16.png" alt="Ocala Marion County CEP" />
                </div>
                <span className="sponsor-name">Ocala Marion County CEP</span>
              </a>
              <a href="https://ocalarotarysportsplex.sportngin.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.85s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand17.png" alt="Ocala Rotary Sportsplex" />
                </div>
                <span className="sponsor-name">Ocala Rotary Sportsplex</span>
              </a>
              <a href="https://www.ocalarodeo.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.9s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand20.png" alt="Southeastern Pro Rodeo" />
                </div>
                <span className="sponsor-name">Southeastern Pro Rodeo</span>
              </a>
              <a href="https://www.seyfair.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '0.95s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand19.png" alt="Southeastern Youth Fair" />
                </div>
                <span className="sponsor-name">Southeastern Youth Fair</span>
              </a>
              <a href="https://www.stirrupsnstrides.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.0s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand18.png" alt="Stirrups 'n Strides" />
                </div>
                <span className="sponsor-name">Stirrups 'n Strides</span>
              </a>
            </div>

            {/* Row 5 */}
            <div className="sponsors-row">
              <a href="https://marioncountychilicookoff.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.05s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand21.png" alt="The Marion County Chili Cook-Off" />
                </div>
                <span className="sponsor-name">The Marion County Chili Cook-Off</span>
              </a>
              <a href="https://www.ocalafarmministry.com/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.1s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand22.png" alt="The Ocala Farm Ministry" />
                </div>
                <span className="sponsor-name">The Ocala Farm Ministry</span>
              </a>
              <a href="https://southernusa.salvationarmy.org/florida" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.15s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand23.png" alt="The Salvation Army" />
                </div>
                <span className="sponsor-name">The Salvation Army</span>
              </a>
              <a href="https://www.uwmc.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.2s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand1.png" alt="United Way of Marion County" />
                </div>
                <span className="sponsor-name">United Way of Marion County</span>
              </a>
              <a href="https://www.marionschools.net/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.25s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand24.png" alt="West Port High School Athletics" />
                </div>
                <span className="sponsor-name">West Port High School Athletics</span>
              </a>
            </div>
             {/* Row 6 */}
            <div className="sponsors-row">
              <a href="https://https://thecornerstoneschool.org/" className="sponsor-item" target="_blank"
                style={{ animationDelay: '1.05s' }}>
                <div className="sponsor-logo-box">
                  <img src="assets/brand26.svg" alt="The Cornerstone School" />
                </div>
                <span className="sponsor-name">The Cornerstone School</span>
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
