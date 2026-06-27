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

      <section className="faq-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">FAQ's</h1>
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

      {/* FAQ Main Section */}
      <section className="faq-main-section">
        <div className="faq-container">
          {/* Intro paragraph */}
          <p className="faq-intro-text">
            Our Frequently Asked Questions section has been sorted by topic to help you get the answers you
            need. Click on one of the topics below to be taken to that section. As always, feel free to contact
            us with any questions you might have.
          </p>

          {/* Grid Layout: Sidebar Filter & Content */}
          <div className="faq-layout-grid">
            {/* Sidebar Filters */}
            <aside className="faq-sidebar">
              <button className="faq-filter-btn active" data-category="all">• General Questions</button>
              {/* <button className="faq-filter-btn" data-category="general">• General Questions</button>
              <button className="faq-filter-btn" data-category="auto">• Auto Accident Questions</button>
              <button className="faq-filter-btn" data-category="motorcycle">• Motorcycle Accident
                  Questions</button>
              <button className="faq-filter-btn" data-category="trucking">• Trucking Accident Questions</button>
              <button className="faq-filter-btn" data-category="work">• Work Accident Questions</button>
              <button className="faq-filter-btn" data-category="social-security">• Social Security Disability
                  Questions</button> */}
            </aside>

            {/* FAQ Question Accordions */}
            <div className="faq-content-area">
              {/* Group 1: General Questions */}
              <div className="faq-category-group" data-category="general">
                <h2 className="faq-category-title">General Questions</h2>
                <div className="faq-accordion-list">
                  {/* Accordion 1 (Expanded by default as requested in mockup screenshot) */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header active">
                      <span>How will I pay for my legal fees?</span>
                      <span className="faq-icon">−</span>
                    </button>
                    <div className="faq-accordion-content" style={{ maxHeight: 'none', padding: '25px' }}>
                      <p className="faq-answer-text">
                        We take cases on a contingency fee basis. That means that you pay no fees or
                        costs unless and until we make a recovery for you.
                      </p>
                    </div>
                  </div>
                  {/* Accordion 2 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>How do you decide whether or not you will take my case?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Once we receive initial information from you about your case, you may be
                        asked to schedule an appointment with an attorney in our firm to meet and
                        further discuss your case. During that free initial consultation we will ask
                        you to bring all documentation concerning your accident, such as a police
                        report, policies of insurance, photographs and medical records and bills (if
                        you have them). We will review the documentation and gather further
                        information from you regarding the facts surrounding your accident. We will
                        also answer your questions at that time. We review each case on an
                        individual basis. Unfortunately, we do not have the resources to take every
                        case. However, if after meeting with you and reviewing your case, we feel we
                        can be of service to you, we will take your case. If we can not take your
                        case, we may be able to refer you to other lawyers we know who can help.

                      </p>
                    </div>
                  </div>
                  {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>How much is my case worth?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        The value of each case is different and must be evaluated separately. We
                        have over 40 years of experience handling accident and injury cases and take
                        a great deal of time to properly evaluate your case. A person who has been
                        injured through the negligence of another may recover for past and future
                        medical expenses, past and future lost wages, and, in many cases the value
                        of your past and future pain, suffering, loss of enjoyment of life and other
                        non-economic damages. Additionally, if you have a spouse and/or children,
                        they may have a claim in their own right for their loss of your consortium
                        (companionship, services, comfort) due to the injuries you suffered.
                        However, you must know that there is never any guarantee of any recovery.

                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 3: Motorcycle Accident Questions */}


              {/* Group 4: Trucking Accident Questions */}


              {/* Group 5: Work Accident Questions */}


              {/* Group 6: Social Security Disability Questions */}

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
