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

        /* Detail Area of Practice Section Styles */
        .detail-area-of-practice-law {
            padding: 80px 0 0 0;
            background-color: #fff;
        }

        .practice-law-container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 40px;
        }

        /* Partners Row */
        .partners-row {
            display: flex;
            gap: 60px;
            align-items: flex-start;
            margin-bottom: 60px;
        }

        .partners-image-col {
            flex: 0 0 40%;
            max-width: 40%;
        }

        .partners-img {
            width: 100%;
            height: auto;
            border-radius: 4px;
            display: block;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .partners-text-col {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .partners-text-col p {
            font-family: var(--family-sans);
            font-size: 18px;
            color: #444;
            line-height: 1.7;
            margin: 0;
        }

        .inline-partner-link {
            color: #111;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 2px solid var(--button);
            transition: color 0.3s;
        }

        .inline-partner-link:hover {
            color: var(--button);
        }

        /* Practice Mid Intro */
        .practice-mid-intro {
            margin-bottom: 40px;
        }

        .contingency-text {
            font-family: var(--family-sans);
            font-size: 18px;
            color: #444;
            line-height: 1.7;
            margin-bottom: 30px;
        }

        .summary-claims-header {
            font-family: var(--family-sans);
            font-weight: 700;
            font-size: 18px;
            color: #111;
            text-align: center;
            margin: 40px 0 30px 0;
        }

        /* Claims Cards Row */
        .claims-cards-row {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
            margin-bottom: 80px;
        }

        .claim-card {
            position: relative;
            background-color: #fff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: transform 0.3s ease;
            height: 240px;
        }

        .claim-card:hover {
            transform: translateY(-5px);
        }

        .claim-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .claim-card-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%);
            color: #fff;
            font-family: var(--family-sans);
            font-weight: 700;
            font-size: 16px;
            padding: 40px 15px 20px 15px;
            border-top: none;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Products Liability Banner */
        .products-liability-banner {
            display: flex;
            width: 100%;
            min-height: 550px;
            margin-bottom: 80px;
            background-color: #0f1c2d;
            overflow: hidden;
        }

        .banner-image-half {
            flex: 0 0 50%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .banner-text-half {
            flex: 0 0 50%;
            background: linear-gradient(to right,
                    transparent 0%,
                    rgba(15, 28, 45, 0.3) 25%,
                    rgba(15, 28, 45, 0.8) 45%,
                    rgba(15, 28, 45, 0.95) 65%,
                    #0f1c2d 100%);
            display: flex;
            align-items: center;
            padding: 60px 80px;
            margin-left: -150px;
            padding-left: 210px;
            position: relative;
            z-index: 2;
        }

        .banner-text-content {
            max-width: 600px;
        }

        .banner-section-title {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 48px;
            font-weight: 300;
            color: #fff;
            margin: 0;
            line-height: 1.1;
        }

        .banner-section-subtitle {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 36px;
            font-weight: 700;
            color: var(--button);
            margin: 5px 0 20px 0;
            line-height: 1.2;
        }

        .banner-divider {
            width: 80px;
            height: 2px;
            background-color: var(--button);
            margin-bottom: 25px;
        }

        .banner-text-content p {
            font-family: var(--family-sans);
            font-size: 18px;
            color: #dae1e8;
            line-height: 1.7;
            margin: 0 0 20px 0;
        }

        .banner-text-content p:last-child {
            margin-bottom: 0;
        }

        /* Premises Row */
        .premises-row {
            display: flex;
            gap: 60px;
            align-items: center;
            margin-bottom: 80px;
        }

        .premises-text-col {
            flex: 1;
        }

        .premises-section-title {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 80px;
            font-weight: 300;
            color: #0f1c2d;
            margin: 0;
            line-height: 1.1;
        }

        .premises-section-subtitle {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 70px;
            font-weight: 700;
            color: var(--button);
            margin: 5px 0 20px 0;
            line-height: 1.2;
        }

        .premises-divider {
            width: 80px;
            height: 2px;
            background-color: var(--button);
            margin-bottom: 25px;
        }

        .premises-text-col p {
            font-family: var(--family-sans);
            font-size: 18px;
            color: #444;
            line-height: 1.7;
            margin: 0 0 20px 0;
        }

        .premises-text-col p:last-child {
            margin-bottom: 0;
        }

        .premises-image-col {
            flex: 0 0 40%;
            max-width: 40%;
        }

        .premises-lawyer-img {
            width: 100%;
            height: auto;
            border-radius: 4px;
            display: block;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        /* Premises Contact Callout (Gold Bar) */
        .premises-contact-bar {
            background-color: var(--button);
            padding: 24px 0;
            text-align: center;
        }

        .premises-contact-bar p {
            font-family: var(--family-sans);
            font-size: 35px;
            font-weight: 700;
            color: #fff;
            margin: 0;
        }

        .gold-bar-link {
            color: #fff;
            text-decoration: underline;
            transition: opacity 0.3s;
        }

        .gold-bar-link:hover {
            opacity: 0.9;
        }

        /* Responsiveness for Detail Section */
        @media (max-width: 1024px) {
            .partners-row {
                flex-direction: column;
                gap: 30px;
            }

            .partners-image-col {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .products-liability-banner {
                flex-direction: column;
                min-height: auto;
            }

            .banner-image-half {
                height: 350px;
                flex: 0 0 100%;
            }

            .banner-text-half {
                flex: 0 0 100%;
                padding: 40px 30px;
                margin-left: 0;
                background: linear-gradient(180deg, rgba(29, 54, 86, 0.95) 0%, #0f1c2d 100%);
            }

            .premises-row {
                flex-direction: column-reverse;
                gap: 30px;
            }

            .premises-image-col {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }

        @media (max-width: 768px) {
            .practice-law-container {
                padding: 0 20px;
            }

            .claims-cards-row {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                gap: 16px;
                padding-bottom: 15px;
                margin-bottom: 50px;
                scrollbar-width: none;
            }

            .claims-cards-row::-webkit-scrollbar {
                display: none;
            }

            .claim-card {
                flex: 0 0 240px;
                scroll-snap-align: start;
                height: 220px;
            }

            .banner-section-title,
            .premises-section-title {
                font-size: 36px;
            }

            .banner-section-subtitle,
            .premises-section-subtitle {
                font-size: 28px;
            }

            .premises-contact-bar p {
                font-size: 15px;
                padding: 0 10px;
            }
        }
      ` }} />

      <section className="personal-injury-law-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Ocala Personal <br/>Injury Lawyer</h1>
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
                By submitting, you agree to our <a href="../privacy-policy.html" className="footer-text"
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

      <section className="detail-area-of-practice-law">
        {/* Top section: Partners Row */}
        <div className="practice-law-container">
          <div className="partners-row">
            <div className="partners-image-col">
              <img src="../assets/law-partners.png" alt="Daniel L. Hightower & Alison L. Hightower"
                className="partners-img"/>
            </div>
            <div className="partners-text-col">
              <p>Since 1976, <a href="daniel-l-hightower.html" className="inline-partner-link">Daniel L.
                  Hightower</a> has been standing up for the rights of people against those that caused
                them injury. Many times the at-fault party is represented by an insurance company, or the
                injured party is seeking benefits from their own insurance company. You do not have to, and
                should not, go it alone against the insurance companies, even if the insurance company is
                your own. The attorneys at Hightower & Hightower, P.A. have years of experience successfully
                representing the interests of their clients and obtaining recoveries on their behalf.</p>
              <p>Each lawyer in the Personal Injury Department has years of experience prosecuting personal
                injury and wrongful death claims of people and families in the courts of central and north
                Florida. Each attorney is assisted by a team of top-notch paralegals, investigators and
                support staff that help to investigate each claim and vigorously prosecute each case to a
                swift resolution.</p>
              <p>Many of our clients have been seriously or catastrophically injured and proving such a case
                often demands the coordination of various resources, including accident reconstructionists,
                engineers and economists. We have the professional and financial resources to properly
                prepare these cases.</p>
              <p>Client satisfaction is of utmost importance to Hightower & Hightower, P.A. and we feel
                strongly about frequent communication with our clients and keeping them informed of the
                status of their cases every step of the way.</p>
              <p>When Hightower & Hightower, P.A. undertakes the legal representation of a client, we make a
                commitment to the client to see them through until justice is obtained. From the beginning
                of the case, the legal professionals at Hightower & Hightower, P.A. fully investigate the
                case, develop trial strategies and aggressively pursue a just resolution of the claim, both
                by settlement or by jury verdict. All of the attorneys in the Personal Injury Department are
                proven trial lawyers that will take your case to trial for you if necessary.</p>
            </div>
          </div>

          {/* Middle description text */}
          <div className="practice-mid-intro">
            <p className="contingency-text">The vast majority of our cases are handled on a contingency fee basis
              which means that we don't charge any fees or costs unless we make a recovery for you. If you
              have a potential personal injury claim, please feel free to contact us. Prior to representing
              any client, an attorney will meet with you personally to discuss your case at no charge to you.
            </p>
            <p className="summary-claims-header">Below are types of Personal Injury Claims we handle:</p>
          </div>

          {/* Rounded Cards Row (HH-Blog 1 to 5) with horizontal swipe on mobile */}
          <div className="claims-cards-row">
            <div className="claim-card">
              <img src="../assets/inside4.jpg" alt="Wrongful Death" className="claim-card-img"/>
              <div className="claim-card-title">Wrongful Death</div>
            </div>
            <div className="claim-card">
              <img src="../assets/inside3.jpg" alt="Automobile Accidents" className="claim-card-img"/>
              <div className="claim-card-title">Automobile Accidents</div>
            </div>
            <div className="claim-card">
              <img src="../assets/hh-blog3.jpg" alt="Work Accidents" className="claim-card-img"/>
              <div className="claim-card-title">Work Accidents</div>
            </div>
            <div className="claim-card">
              <img src="../assets/inside1.jpg" alt="Dog Bites" className="claim-card-img"/>
              <div className="claim-card-title">Dog Bites</div>
            </div>
            <div className="claim-card">
              <img src="../assets/inside2.jpg" alt="Slip and Falls" className="claim-card-img"/>
              <div className="claim-card-title">Slip and Falls</div>
            </div>
          </div>
        </div>

        {/* Middle Section: Products Liability Banner (mid image law-half.jpg) */}
        {/* Layout: split left (image), right (blue background with half-gradient and text) */}
        <div className="products-liability-banner">
          <div className="banner-image-half" style={{ backgroundImage: "url('../assets/mid-leftt.jpg')" }}>
          </div>
          <div className="banner-text-half">
            <div className="banner-text-content">
              <h2 className="banner-section-title">Products</h2>
              <h3 className="banner-section-subtitle">Liability / Car Defects</h3>
              <div className="banner-divider"></div>
              <p>When products, including cars, are placed into the stream of commerce, the manufacturers,
                distributors and retailers of those products have a responsibility to the consumers to meet
                accepted standards of health and safety, to warn consumers of any hazards their products may
                pose, and to remove dangerous products from the market. Unfortunately for us all, they don't
                always uphold their legal responsibilities and innocent users of their products can be
                seriously injured and sometimes even killed.</p>
              <p>Products liability cases include: design defects, styling or construct defects. They can also
                include cases involving other heavy equipment like construction equipment and scaffolding.
                Finally, other ordinary household products like baby seats, appliances and electronic
                devices can injure you or a loved one. It may be the result of substandard products or
                failing to be properly warned about how to operate the product.</p>
              <p>Unfortunately, too many of the governmental entities that are supposed to police the
                manufacturers of products are too underfunded, understaffed or restricted by laws. Often
                manufacturers, distributors and retailers are most concerned with the bottom line of their
                business and not the safety of the consumer. That is why it is important there are lawyers
                like those at Hightower & Hightower, P.A. that have the knowledge and the dedication to
                their clients to aggressively pursue their claims and to fight the wrongs committed against
                these unsuspecting consumers.</p>
              <p>If you or a family member has been injured because of a defective product or design, please
                feel free to contact us.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Premises Liability (lawyer-1.png on the right) */}
        <div className="practice-law-container">
          <div className="premises-row">
            <div className="premises-text-col">
              <h2 className="premises-section-title">Premises</h2>
              <h3 className="premises-section-subtitle">Liability</h3>
              <div className="premises-divider"></div>
              <p>Premises Liability is a general term that includes claims for injuries or death resulting
                from dangerous conditions that exist on a premises that happened at a particular location.
                For instance, premises liability cases can arise from a trip and fall in a store or
                restaurant, falling merchandise in a store or warehouse, dangerous conditions that are not
                readily apparent on a sidewalk or in a park, injuries caused by insufficient lighting,
                negligently designed stairways or handrails, or negligent security at a particular location.
              </p>
              <p>In a general rule, property owners are responsible for injuries which occur as a result of a
                dangerous condition on their property, which the owner knew about, or should have known
                about and failed to warn others about.</p>
              <p>Premises liability cases can be complicated because many different entities may own, lease,
                maintain or control the premises. Additionally, there can be different policies of insurance
                that may cover the incident. It is important to obtain legal advice and promptly investigate
                the claim and secure evidence early on because if the dangerous condition is fixed, you may
                forever lose the evidence that you need to prove your case. Prompt investigation of a
                premises liability claim is also important because if it involves a government entity, the
                time period in which you have to pursue your claim is substantially less than the four-year
                period for most personal injury actions.</p>
            </div>
            <div className="premises-image-col">
              <img src="../assets/lawyer-1.png" alt="Daniel L. Hightower" className="premises-lawyer-img"/>
            </div>
          </div>
        </div>
        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>
          <div className="faq-category-group" data-category="general">
            <h2 className="faq-category-title">General Questions</h2>
            <div className="faq-accordion-list">
              {/* Accordion 1 (Expanded by default as requested in mockup screenshot) */}
              <div className="faq-accordion">
                <button className="faq-accordion-header active">
                  <span>What is a personal injury claim?</span>
                  <span className="faq-icon">−</span>
                </button>
                <div className="faq-accordion-content" style={{ maxHeight: 'none', padding: '25px' }}>
                  <p className="faq-answer-text">
                    A personal injury claim is a legal dispute that arises when one person suffers harm from an accident or injury, and someone else might be legally responsible for that harm. A personal injury case can be resolved through formal lawsuit proceedings or, more commonly, through an informal settlement before a lawsuit is filed.

                  </p>
                </div>
              </div>
              {/* Accordion 2 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How much does it cost to hire a personal injury lawyer?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Most personal injury law firms operate on a contingency fee basis. This means you pay nothing upfront, and the firm only gets paid if they successfully recover compensation for you through a settlement or jury verdict. The fee is typically a percentage of the final recovery.


                  </p>
                </div>
              </div>
              {/* Accordion 3 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How long do I have to file a personal injury lawsuit?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    The timeframe to file a lawsuit is determined by a law called the statute of limitations. This time limit varies significantly by state and by the type of case (ranging from one to several years from the date of the accident). Failing to file before the deadline usually means losing your right to sue permanently.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What is my personal injury case worth?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    The value of a case depends on several unique factors, including:
                  </p>
                  <ul style={{ color: '#111', textTransform: 'capitalize' }}>
                    <li>The severity of your injuries and medical treatment costs.</li>
                    <li>Lost wages and future loss of earning capacity.</li>
                    <li>Pain, suffering, and emotional distress.</li>
                    <li>The amount of available insurance coverage and clear proof of liability.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Premises Contact Callout (Gold Bar) */}
        <div className="premises-contact-bar">
          <div className="practice-law-container">
            <p>If you have a potential premises liability claim, please feel free to <a
              href="../contact-us.html" className="gold-bar-link">contact us</a>.</p>
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
                <img src="../assets/award1.png" alt="The National Trial Lawyers Top 100"/>
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award2.png" alt="AV Preeminent Rated"/>
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award3.png" alt="Martindale-Hubbell Client Champion Gold"/>
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award4.webp" alt="Florida Bar Certified Civil Trial"/>
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award5.png" alt="Florida Bar Certified Workers Compensation"/>
              </div>
              {/* Clones for seamless mobile marquee */}
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award1.png" alt="The National Trial Lawyers Top 100"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award2.png" alt="AV Preeminent Rated"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award3.png" alt="Martindale-Hubbell Client Champion Gold"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award4.webp" alt="Florida Bar Certified Civil Trial"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award5.png" alt="Florida Bar Certified Workers Compensation"/>
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
