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

        .faq-list-items {
            list-style-type: none;
            padding: 0;
            margin: 20px 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px 24px;
        }

        .faq-list-items li {
            position: relative;
            padding-left: 28px;
            font-family: var(--family-sans);
            font-size: 15px;
            color: #4a5568;
            line-height: 1.6;
            font-weight: 500;
        }

        .faq-list-items li::before {
            content: "✓";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--button, #C2905B);
            font-weight: bold;
            font-size: 16px;
        }

        @media (max-width: 600px) {
            .faq-list-items {
                grid-template-columns: 1fr;
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
                  <label htmlFor="case-type">CASE TYPE (TIPO DE CASO)</label>
                  <select id="case-type" required defaultValue="">
                    <option value="" disabled>
                      Select your case type (Seleccione su tipo de caso)
                    </option>
                    <option value="personal-injury">
                      Personal Injury (Lesiones Personales)
                    </option>
                    <option value="car-accident">
                      Car Accident (Accidente de Auto)
                    </option>
                    <option value="medical-malpractice">
                      Medical Malpractice (Negligencia Médica)
                    </option>
                    <option value="wrongful-death">
                      Wrongful Death (Muerte por Negligencia)
                    </option>
                    <option value="other">
                      Other (Otro)
                    </option>
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
         

            {/* FAQ Question Accordions */}
            <div className="faq-content-area">
              {/* Group 1: General Questions */}
              <div className="faq-category-group" data-category="general">
                <h2 className="faq-category-title">General Questions</h2>
                <div className="faq-accordion-list">
                  {/* Accordion 1 (Expanded by default as requested in mockup screenshot) */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header active">
                      <span>What kind of personal injury cases do you take?</span>
                      <span className="faq-icon">−</span>
                    </button>
                    <div className="faq-accordion-content" style={{ maxHeight: 'none', padding: '25px' }}>
                      <p className="faq-answer-text">
                        Our Ocala personal injury lawyers represent clients across a wide range of accident and injury cases, including:
                      </p>
                      <ul className="faq-list-items">
                        <li>Car accidents</li>
                        <li>Motorcycle accidents</li>
                        <li>Truck Accidents</li>
                        <li>Slip and Falls</li>
                        <li>Wrongful Death</li>
                        <li>Work Accidents</li>
                        <li>Social Security Disability</li>
                      </ul>
                      <p className="faq-answer-text">
                        If you’ve been hurt in a bicycle, bus, or pedestrian accident, or in a construction accident, we handle those as well. Every attorney in our office is well-versed in the legal and factual issues across these case types, so if you’re not sure your situation fits, call us for a free case review.
                      </p>
                    </div>
                  </div>
                  {/* Accordion 2 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>How much is my case worth?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                       The value of each case is different and must be evaluated separately. We have five decades of experience handling accident and injury cases and take a great deal of time to properly evaluate your case. A person who has been injured through the negligence of another may recover for past and future medical expenses, past and future lost wages, and, in many cases, the value of your past and future pain, suffering, loss of enjoyment of life, and other non-economic damages. Additionally, if you have a spouse and/or children, they may have a claim in their own right for their loss of your consortium (companionship, services, comfort) due to the injuries you suffered. However, you must know that there is never any guarantee of any recovery.

                      </p>
                    </div>
                  </div>
                  {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>How will I pay for my legal fees?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        We take cases on a contingency fee basis. That means you pay no fees or costs unless and until we make a recovery for you.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>How long has your firm been serving Ocala?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Daniel L. Hightower has been representing accident victims in Marion County since 1976, providing nearly five decades of experience in the state of Florida.

                      </p>
                    </div>
                  </div>


                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>How do you decide whether or not you will take my case?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Once we receive initial information from you about your case, you may be asked to schedule an appointment with an attorney in our firm to meet and further discuss your case. During that free initial consultation, we will ask you to bring all documentation concerning your accident, such as a police report, policies of insurance, photographs, and medical records and bills (if you have them). We will review the documentation and gather further information from you regarding the facts surrounding your accident, and answer your questions at that time. We review each case on an individual basis. Unfortunately, we do not have the resources to take every case; however, if after meeting with you and reviewing your case we feel we can be of service, we will take your case. If we cannot take your case, we may be able to refer you to other lawyers we know who can help.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>What should I know about car, truck, and motorcycle accident cases?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                       These are some of the most common cases we handle, but each comes with its own challenges. Car accidents can lead to substantial injuries and financial burdens, and we handle the insurance process, gather evidence, and advocate for fair compensation for your losses. Truck accidents fall under unique commercial trucking laws and regulations, so we use our knowledge of these specific legal requirements to determine liability and hold the responsible parties accountable. Motorcycle accidents tend to result in more serious harm due to limited rider protection, and whether you were the operator or a passenger, we work to protect your interests and secure compensation for medical bills, lost income, and more.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>What do I need to prove to win a personal injury claim?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Four things generally need to be established: that the other party owed you a duty of care, that they breached that duty, that the breach caused your injuries, and that you suffered real, measurable damages like medical bills or lost wages. Our focus is to recover maximum compensation for you.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>I was in a car accident and the insurance company keeps calling me. What should I do?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Be cautious before giving a recorded statement or accepting a settlement offer. Insurance companies will try to resolve claims quickly and for less than what they’re worth. Our team of personal injury lawyers will handle communication with the insurer so you can focus on recovering.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>What if I was partially at fault for the accident?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        You may still be able to recover compensation. Florida law accounts for shared fault (contributory negligence), and how much you’re at fault can affect your settlement, not necessarily eliminate it. We’ll go over how this applies to your specific situation.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>What’s the deadline to file a personal injury claim in Florida?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Timing varies depending on the type of case, and it can be shorter if a government entity is involved. It’s best not to wait for very long. Evidence can disappear quickly, especially in cases where a hazard might get fixed or footage is deleted before it can be documented.

                      </p>
                    </div>
                  </div>

                   {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>What’s the difference between a workers’ comp claim and a personal injury lawsuit for a workplace injury?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Workers’ compensation covers many on-the-job injuries regardless of fault, but a separate personal injury claim may be possible if a third party (not your employer) contributed to the accident. We can help you figure out which path, or both, applies to you.

                      </p>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>Will my case go to trial?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Most personal injury cases settle through negotiation with the insurance company. But if they won’t offer a fair settlement, our attorneys are prepared to take your case to court.

                      </p>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className="faq-accordion">
                    <button className="faq-accordion-header">
                      <span>Do you handle Social Security Disability claims?</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-accordion-content">
                      <p className="faq-answer-text">
                        Yes. While we encourage most people to apply for SSD benefits on their own first, since you shouldn’t need an attorney for the initial application, we step in if your claim is denied. If that happens, we handle the appeals paperwork, help gather the medical evidence needed to prove your disability, prepare you for your hearing, and attend the hearing with you.    

                      </p>
                    </div>
                  </div>
                </div>
              </div>

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
