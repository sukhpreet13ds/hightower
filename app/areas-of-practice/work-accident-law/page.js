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
            font-size: 65px;
            font-weight: 300;
            color: #0f1c2d;
            margin: 0;
            line-height: 1.1;
        }

        .premises-section-subtitle {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 55px;
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

      <section className="work-acc-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Ocala Work Accident <br />Law</h1>
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
                className="partners-img" />
            </div>
            <div className="partners-text-col">
              <h2 className="premises-section-title" style={{ marginBottom: '10px' }}>Daniel L. Hightower, Work
                Accident Lawyer</h2>
              <p>Daniel L. Hightower, work accident lawyer, has been helping injured workers with their work
                accident claims since 1976. As an injured worker under the workers’ compensation law you are
                entitled to receive medical treatment and prescription drugs. You may also be entitled to
                wage loss reimbursement for time you have been unable to work. Most employers are required
                to carry workers’ compensation insurance.</p>
              <p>If you have been injured at work and have questions, please contact us for a free
                consultation. There are no fees and no costs if no recovery of benefits or settlement is
                made for you.</p>
              <p>Do you think your work injury may have been caused by a faulty product, unsafe work
                environment or someone else? You may be able to make a claim against a third party. Contact
                us for a free consultation and let Daniel L. Hightower review your options.</p>
            </div>
          </div>

          {/* Middle description text */}
          <div className="practice-mid-intro">
            <h2 className="premises-section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>WHAT TO DO:</h2>
            <p className="contingency-text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px auto' }}>
              If you have been injured at work, taking the right steps immediately is critical. Follow these
              guidelines to protect your health and your rights:</p>
          </div>

          {/* Rounded Cards Row (HH-Blog 1 to 5) with horizontal swipe on mobile */}
          <div className="claims-cards-row">
            <div className="claim-card">
              <img src="../assets/work1.jpg" alt="Report Immediately" className="claim-card-img" />
              <div className="claim-card-title">Report Immediately</div>
            </div>
            <div className="claim-card">
              <img src="../assets/work2.jpg" alt="Authorized Doctor" className="claim-card-img" />
              <div className="claim-card-title">Authorized Doctor</div>
            </div>
            <div className="claim-card">
              <img src="../assets/work3.jpg" alt="No Recorded Statement" className="claim-card-img" />
              <div className="claim-card-title">No Statements</div>
            </div>
            <div className="claim-card">
              <img src="../assets/work4.jpg" alt="Keep Appointments" className="claim-card-img" />
              <div className="claim-card-title">Keep Appointments</div>
            </div>
            <div className="claim-card">
              <img src="../assets/work5.jpg" alt="Prescriptions & Slips" className="claim-card-img" />
              <div className="claim-card-title">Save Slips</div>
            </div>
          </div>

          <div
            style={{ marginTop: '30px', marginBottom: '60px', textAlign: 'left', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="contingency-text" style={{ marginBottom: '10px' }}><strong>• Report the Injury:</strong>
              Immediately tell your supervisor or employer. They should fill out a First Notice of Injury
              form; make sure you receive a copy.</p>
            <p className="contingency-text" style={{ marginBottom: '10px' }}><strong>• Medical Treatment:</strong> You
              must see an authorized doctor chosen by your employer/insurer. Generally, you cannot choose your
              own doctor.</p>
            <p className="contingency-text" style={{ marginBottom: '10px' }}><strong>• Statements:</strong> Never
              provide a recorded statement to the insurance company or your employer.</p>
            <p className="contingency-text" style={{ marginBottom: '10px' }}><strong>• Physician Visits:</strong> Keep
              regular appointments and accurately describe your physical pain, naming all affected body parts
              and limitations.</p>
            <p className="contingency-text" style={{ marginBottom: '10px' }}><strong>• Medicine & Slips:</strong> Ask
              for prescription pain medicine if needed, and request a no-work or light-duty restriction slip
              from your doctor. Photocopy all prescriptions and slips immediately.</p>
            <p className="contingency-text" style={{ marginBottom: '10px' }}><strong>• Stay Within Limits:</strong> Keep
              your physical activities within the medical limitations placed on you by the doctor.</p>
          </div>
        </div>

        {/* Middle Section: Products Liability Banner (mid image law-half.jpg) */}
        {/* Layout: split left (image), right (blue background with half-gradient and text) */}
        <div className="products-liability-banner">
          <div className="banner-image-half" style={{ backgroundImage: "url('../assets/workd-midd.webp')" }}>
          </div>
          <div className="banner-text-half">
            <div className="banner-text-content">
              <h2 className="banner-section-title">Time Limits &</h2>
              <h3 className="banner-section-subtitle">Statute of Limitations</h3>
              <div className="banner-divider"></div>
              <p>There are time limits for filing a work injury claim and time limits for keeping the claim
                from being closed by the insurance company. Once you are injured at work or become aware of
                a work injury, you have 30 days to report your injury to your employer. Failure to report
                within 30 days may be used as a defense against your claim.</p>
              <p>Generally, the Statute of Limitations in workers’ compensation cases is two (2) years from
                the date of the accident, or one (1) year from the last time the employer/carrier provided
                medical treatment or paid compensation benefits, whichever is later. Other statutes may also
                apply to the determination of when the timeline begins or expires. If the Statute of
                Limitations expires, you will probably not be able to pursue your claim.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Premises Liability (lawyer-1.png on the right) */}
        <div className="practice-law-container">
          <div className="premises-row">
            <div className="premises-text-col">
              <h2 className="premises-section-title">Legitimate Claims</h2>
              <h3 className="premises-section-subtitle">Honesty & Integrity</h3>
              <div className="premises-divider"></div>
              <p>Mr. Hightower will only represent people that he believes have legitimate claims. He will
                require you to sign a letter promising that your injuries are legitimate and accident
                related. He will have NOTHING to do with someone trying to pursue a fraudulent or frivolous
                claim. Those people and those claims undermine the credibility of people with legitimate
                claims and the ethical lawyers representing them.</p>
              <p>The attorneys at Daniel L. Hightower, P.A. will help you navigate your way through this
                process. We are on YOUR side. Contact us today for a free consultation.</p>
              <p><strong><a href="../faq.html" className="inline-partner-link">Click here for our FAQs about Work
                Accident Law.</a></strong></p>
            </div>
            <div className="premises-image-col">
              <img src="../assets/lawyer-1.png" alt="Daniel L. Hightower" className="premises-lawyer-img" />
            </div>
          </div>
        </div>
        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>
          <div className="faq-category-group" data-category="work">
            <h2 className="faq-category-title">Work Accident Questions</h2>
            <div className="faq-accordion-list">
              {/* Accordion 1 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    HOW LONG DO I HAVE IF I HAVE BEEN INJURED AT WORK TO REPORT IT TO MY
                    EMPLOYER?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    You should report your work accident or injury to your employer right away.
                    Failure to report your injury within 30 days may be used as a defense
                    against your claim.
                  </p>
                </div>
              </div>
              {/* Accordion 2 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    WILL I BE PAID FOR THE TIME I LOSE FROM WORK BECAUSE OF MY WORK
                    INJURY?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Wage replacement benefits will start on the eighth (8) day that the injured
                    employee is unable to work. You will not receive wage replacement benefits
                    for the first seven (7) days of work missed, unless you are out of work for
                    more than 21 days due to the work accident. If your disability requires you
                    to miss more than twenty-one (21) days, you are paid from the date of the
                    accident.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    HOW MUCH WILL I BE PAID FOR MY LOST WAGES?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    In most cases, the wage-replacement benefits will equal two-thirds (2/3) of
                    your pre-injury regular weekly wage (AWW), but the benefit will not be
                    higher than Florida’s average weekly wage. Checks are usually paid on a
                    bi-weekly basis until you are released to work by your physician. If you
                    continue to lose wages after returning to work or being released to work,
                    you may be entitled to wage-replacement benefits at a lower rate.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    WHAT IS AWW (AVERAGE WEEKLY WAGE)?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Your Average Weekly Wage is determined by wages you earned in the 13 weeks
                    prior to the date of your work accident. To be sure this amount is
                    calculated correctly by the employer/insurance carrier so that you are paid
                    the correct amount, you may want to contact Daniel L. Hightower, an
                    experienced workers’ compensation attorney.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    WILL MY MEDICAL BILLS AND PRESCRIPTIONS BE PAID?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    All reasonable, necessary and authorized medical bills, prescriptions and
                    out-of-pocket expenses will be paid by your employer/insurance carrier.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    DO I GET TO CHOOSE THE DOCTOR I TREAT WITH?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    You must see physicians that are authorized by the workers’ compensation
                    insurance company. However, you are allowed a one-time change in your
                    authorized treating physician.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    HOW MUCH IS MY CASE WORTH?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    To determine how much your case might be worth we analyze multiple factors
                    including your age, wages, future expected wages, job type, injury type,
                    level of education and training, and future estimated medical care and
                    therapy.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    WHAT IF I’M NOT ABLE TO RETURN TO MY CURRENT LINE OF WORK BECAUSE OF MY
                    INJURY?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Under the Workers’ Compensation Act, if you are unable to return to
                    employment earning wages similar to your pre-injury wages, then you may be
                    entitled to retraining at the State’s expense. The retraining program has to
                    be approved by the Division of Workers’ Compensation Bureau of
                    Rehabilitation and Reemployment Services. Often employees who are approved
                    for retraining are also entitled to temporary total disability benefits for
                    up to one year while they are pursuing retraining.
                  </p>
                  <p className="faq-answer-text">
                    If retraining is not a viable option and you are unable to obtain any kind
                    of employment, then you may be eligible for disability payments. These can
                    be temporary, while you are still recovering from your injury, or permanent.
                    Your entitlement to disability benefits would depend on the specific facts
                    of your case and so the assessment must be made on a case-by-case basis.
                  </p>
                  <p className="faq-answer-text">
                    There are limited options available and each case is different. Please
                    contact us to discuss the options available to you.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    WHAT DOES TTD (TEMPORARY TOTAL DISABLED) MEAN?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    TTD means an injured worker is totally unable to work during the recovery
                    and improvement process. TTD benefits are the wage-loss benefits that are
                    provided as a result of your work injury that temporarily prevents you from
                    returning to work and you have not reached MMI.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    WHAT DOES MMI MEAN?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Maximum Medical Improvement – The point at which you have improved as much
                    as the doctors expect you to improve medically.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    WHAT DOES TPD (TEMPORARY PARTIAL DISABILITY) MEAN?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    TPD means an injured worker is partially unable to work during the recovery
                    and improvement process. TPD benefits are the wage-loss benefits that are
                    provided when the doctor releases you to return to work and you have not
                    reached MMI and you earn less than 80% of the pre-injury wage. The benefit
                    is equal to 80% of the difference between 80% of the pre-injury wage and the
                    post-injury wage.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    WHAT DOES PTD (PERMANENT TOTAL DISABILITY) MEAN?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    When an injured worker’s recovery has progressed as far as medical treatment
                    can take it, the worker is said to have reached MMI. After that, temporary
                    benefits are no longer payable, and some workers whose permanent physical
                    restrictions prevent them from returning to work may be entitled to PTD
                    benefits for loss of wage earning capacity. The requirements for these
                    benefits change depending on the year you were injured. If you are PTD you
                    may qualify for Social Security benefits, as well. Please read our
                    information regarding Social Security Disability claims and contact us.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    What should I do if I am injured at work?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    You should report the injury to your employer or supervisor as soon as possible, ideally in writing. Most states have strict deadlines (often within 30 days) for reporting workplace injuries. After reporting, seek medical care from an authorized workers' compensation doctor if your employer requires it.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    Can I sue my employer for a workplace injury?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    In most cases, no. Workers’ compensation is a "no-fault" system, meaning you do not have to prove your employer did anything wrong to get benefits. In exchange for this guaranteed coverage, employees generally give up the right to sue their employer for negligence. However, you may be able to sue a third party (such as a subcontractor or equipment manufacturer) if their negligence caused your injury.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>

                    What benefits can I receive through Workers' Compensation?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Workers' comp typically covers:
                  </p>
                  <ul>
                    <li>All reasonable and necessary medical treatments related to the injury.</li>
                    <li>A percentage of your lost wages while you are unable to work (temporary disability benefits).</li>
                    <li>Permanent disability benefits if you do not fully recover.</li>
                    <li>Vocational rehabilitation if you need to train for a new line of work.</li>
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
                <img src="../assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item">
                <img src="../assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              <div className="honor-logo-item">
                <a
                  href="https://www.bbb.org/us/fl/ocala/profile/personal-injury-lawyers/hightower-hightower-p-a-0733-235974524/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="../assets/bbb-logo.png"
                    alt="Hightower & Hightower, P.A. BBB Accredited Business"
                    style={{ border: 0 }}
                  />
                </a>
              </div>
              {/* Clones for seamless mobile marquee */}
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="../assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <a
                  href="https://www.bbb.org/us/fl/ocala/profile/personal-injury-lawyers/hightower-hightower-p-a-0733-235974524/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="../assets/bbb-logo.png"
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
