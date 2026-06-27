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
            gap: 10px;
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
            font-size: 48px;
            font-weight: 300;
            color: #0f1c2d;
            margin: 0;
            line-height: 1.1;
        }

        .premises-section-subtitle {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 36px;
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

      <section className="moto-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Ocala Motorcycle Accident <br/>Lawyer</h1>
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
              <h2 className="premises-section-title" style={{ marginBottom: '10px' }}>Your Motorcycle Accident Lawyer
                Since 1976</h2>
              <p>For 50 years, our firm has been a fixture in the Central Florida riding community. We have
                stood up for riders who have been sidelined by the negligence of distracted or careless
                drivers since 1976. Our attorneys are dedicated to holding at-fault parties accountable so
                that riders receive the aggressive representation they deserve. If you’ve been injured in a
                motorcycle accident, don’t wait for the insurance company to dictate your future. Let our
                half-century of experience protect it.</p>
              <p><strong><a href="../contact-us.html" className="inline-partner-link">Contact Us For a Free Case
                    Review</a></strong></p>
            </div>
          </div>

          {/* Middle description text */}
          <div className="practice-mid-intro">
            <h2 className="premises-section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>Recovering
              Compensation for Motorcycle Crash Injuries</h2>
            <p className="contingency-text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px auto' }}>
              A motorcycle offers almost no physical protection, meaning crash injuries are usually
              life-altering. If someone else caused the wreck, the rider (or the rider’s family in the event
              of a fatal crash) can sue for:</p>
          </div>

          {/* Rounded Cards Row (HH-Blog 1 to 5) with horizontal swipe on mobile */}
          <div className="claims-cards-row">
            <div className="claim-card">
              <img src="../assets/moto-c1.webp" alt="Medical Bills & Rehab" className="claim-card-img"/>
              <div className="claim-card-title">Medical Bills & Rehab</div>
            </div>
            <div className="claim-card">
              <img src="../assets/moto-c2.jpeg" alt="Lost Wages" className="claim-card-img"/>
              <div className="claim-card-title">Lost Wages & Earnings</div>
            </div>
            <div className="claim-card">
              <img src="../assets/moto-c3.jpg" alt="Pain & Suffering" className="claim-card-img"/>
              <div className="claim-card-title">Pain & Suffering</div>
            </div>
            <div className="claim-card">
              <img src="../assets/moto-c4.jpg" alt="2-Year Limitation" className="claim-card-img"/>
              <div className="claim-card-title">2-Year Limitation</div>
            </div>
            <div className="claim-card">
              <img src="../assets/moto-c5.jpg" alt="Perishable Evidence" className="claim-card-img"/>
              <div className="claim-card-title">Perishable Evidence</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', marginBottom: '60px', textAlign: 'center' }}>
            <h3 className="premises-section-subtitle" style={{ fontSize: '24px', color: '#d9534f', marginBottom: '15px' }}>
              Stop! Before You Call the Insurance Adjuster:</h3>
            <p className="contingency-text" style={{ maxWidth: '900px', margin: '0 auto 10px auto', fontWeight: '500' }}>•
              Do not give a recorded statement.</p>
            <p className="contingency-text" style={{ maxWidth: '900px', margin: '0 auto 10px auto', fontWeight: '500' }}>•
              Do not accept a “quick check” for your bike repairs (it often releases them from injury
              liability).</p>
            <p className="contingency-text" style={{ maxWidth: '900px', margin: '0 auto 10px auto', fontWeight: '500' }}>•
              Do take photos of the tread on your tires and the state of your safety gear.</p>
          </div>
        </div>

        {/* Middle Section: Products Liability Banner (mid image law-half.jpg) */}
        {/* Layout: split left (image), right (blue background with half-gradient and text) */}
        <div className="products-liability-banner">
          <div className="banner-image-half" style={{ backgroundImage: "url('../assets/moto-left.webp')" }}>
          </div>
          <div className="banner-text-half">
            <div className="banner-text-content">
              <h2 className="banner-section-title">Who Pays</h2>
              <h3 className="banner-section-subtitle">Medical Bills After a Crash?</h3>
              <div className="banner-divider"></div>
              <p>If you drive a car in Florida, you are required to carry Personal Injury Protection (PIP),
                which covers your medical bills regardless of who caused the crash. Motorcycles are
                different. Under Florida law, motorcycles are not considered “motor vehicles” for PIP
                purposes. This means that unless you specifically purchased expensive, optional motorcycle
                PIP, you do not have that “No-Fault” safety net. If you’re in a wreck, you can’t look to
                your own auto policy for the first $10,000 in medical coverage.</p>
              <h4
                style={{ fontFamily: 'var(--family-sans)', fontSize: '20px', fontWeight: '700', color: 'var(--button)', margin: '20px 0 10px 0' }}>
                Understanding PIP Exemptions for Florida Motorcyclists</h4>
              <p style={{ marginBottom: '8px', fontSize: '16px' }}>Since there is no automatic PIP, medical
                expenses are typically handled through these three channels:</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}><strong>1.
                  Your Health Insurance:</strong> Usually, private health insurance/Medicare/Medicaid
                becomes primary payer, but they require reimbursement later.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}><strong>2.
                  At-Fault Bodily Injury (BI) Coverage:</strong> We pursue the driver who hit you to cover
                costs (BI is not mandatory in FL).</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '20px' }}><strong>3.
                  Uninsured Motorist (UM) Coverage:</strong> The most important safety net if the at-fault
                driver is uninsured/underinsured.</p>
              <p>When we take your case, we step in immediately to coordinate with doctors and insurance
                carriers so you can focus on healing, not collection calls.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Premises Liability (lawyer-1.png on the right) */}
        <div className="practice-law-container">
          <div className="premises-row">
            <div className="premises-text-col">
              <h2 className="premises-section-title">Fault & Liability</h2>
              <h3 className="premises-section-subtitle">Can I Still Sue if Partially My Fault?</h3>
              <div className="premises-divider"></div>
              <p>In Florida, the 51% Rule (officially known as Modified Comparative Negligence) is the legal
                standard used to determine if you can recover compensation after an accident where fault is
                shared. Put into effect in 2023, you can only recover damages if you are 50% or less at
                fault. If you are 51% or more at fault, you receive zero compensation. At Hightower &
                Hightower, P.A., we use forensic evidence and expert testimony to keep the focus on the
                negligent driver and protect your right to a recovery.</p>
            </div>
            <div className="premises-image-col">
              <img src="../assets/lawyer-1.png" alt="Daniel L. Hightower" className="premises-lawyer-img"/>
            </div>
          </div>
        </div>

        {/* Negligence Section (lawyer-2.png on the left, text on the right) */}
        <div className="practice-law-container" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="partners-row" style={{ marginBottom: '0' }}>

            <div className="partners-text-col">
              <h2 className="premises-section-title">Why An Independent Investigation</h2>
              <h3 className="premises-section-subtitle">Is Necessary</h3>
              <div className="premises-divider"></div>
              <p>It’s an unfair reality, but many people assume motorcyclists are responsible for their own
                accidents. We’re here to flip that narrative. A professional investigation by our firm makes
                sure the facts, not assumptions, drive your case. We analyze:</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>•
                Weather, lighting, and road hazards at the time of the crash.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• GPS,
                dash-cam footage, and GoPro “helmet cam” recordings.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '20px' }}>•
                Forensic analysis of law enforcement records and expert witness statements.</p>

              <h3 className="premises-section-subtitle"
                style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px' }}>Overcoming The Burden of
                Negligence</h3>
              <p>To win your case, we must prove the four pillars of negligence:</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>
                <strong>1. Duty:</strong> The other driver had a legal obligation to follow the rules of the
                road.
              </p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>
                <strong>2. Breach:</strong> They failed that duty (e.g. texting, speeding, or running a red
                light).
              </p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>
                <strong>3. Causation:</strong> Their specific failure was the direct cause of the collision.
              </p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '20px' }}>
                <strong>4. Damages:</strong> The crash resulted in actual physical or financial harm to you.
              </p>
            </div>
          </div>
        </div>


        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>
          <div className="faq-category-group" data-category="motorcycle">
            <h2 className="faq-category-title">Motorcycle Accident Questions</h2>
            <div className="faq-accordion-list">
              {/* Accordion 1 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>When there is a motorcycle accident related injury or death in florida,
                    who is allowed to sue?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    If any party other than the motorcycle driver involved in the Florida
                    motorcycle accident is at fault, the motorcycle driver and/or that person’s
                    surviving family members may pursue a personal injury or wrongful death
                    lawsuit seeking damages and compensation.
                    If the motorcycle driver is at fault, then anyone else injured or killed in
                    the Florida motorcycle accident – including the motorcyclist’s passenger
                    and/or people in other vehicles and their surviving family members — may
                    pursue a lawsuit against the motorcycle operator. Any other person injured
                    by a motorcyclist, such as a pedestrian, can recover damages against the
                    motorcycle operator and any other responsible party.
                  </p>
                </div>
              </div>
              {/* Accordion 2 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>When a motorcycle accident happens in florida, which parties involved may
                    be held responsible?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Defendants in Florida motorcycle accident cases may include the motorcycle
                    driver, other motor vehicle operators, property owners where dangerous
                    conditions may exist (on both public and private properties), mechanical
                    repair and service shops, as well as motorcycle, tire, and parts
                    manufacturers. Any of these parties may be held liable in a Florida court of
                    law. A lawsuit seeks to identify and hold responsible any persons or
                    entities whose wrongful conduct or negligence may have contributed to injury
                    and/or death resulting from a Florida motorcycle accident.

                  </p>
                </div>
              </div>
              {/* Accordion 3 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>Why is it so important for me to have my florida motorcycle accident case
                    investigated?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Motorcyclists may sometimes run up against the bias that because they
                    operate a motorcycle in Florida, they are the ones who cause accidents and
                    they are responsible for their own injuries. The reality is that sometimes
                    the motorcyclist did nothing to cause the accident, and the liability lies
                    with another driver or other entities whose conduct or negligence
                    contributed to the Florida motorcycle accident. A proper examination brings
                    forth the true facts of the case including the conditions at the Florida
                    motorcycle accident scene; details of how, when, why, what, and who was
                    involved in the accident; as well as witness statements and reports from law
                    enforcement and other agencies involved in the investigation.

                  </p>
                </div>
              </div>
              {/* Accordion 4 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How important is it for me to consult a florida motorcycle accident lawyer
                    regarding my motorcycle accident case?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    It is very important, particularly if the Florida motorcycle accident you
                    were involved in resulted in your own injuries or in serious injury or death
                    to other drivers and passengers involved. Motorcyclists often get blamed
                    when they are involved in serious motor vehicle accidents — and the opposing
                    side will be looking for evidence to support that claim, whether it’s
                    entirely true or not. An experienced Florida motorcycle accident attorney
                    can investigate your case and compile the necessary legal documentation and
                    evidence that will support you in your injury claims.

                  </p>
                </div>
              </div>

              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What if I wasn't wearing a helmet at the time of the motorcycle accident?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    You can still file a claim. Depending on state laws, not wearing a helmet might impact the amount of compensation you receive if head or neck injuries are involved (under comparative negligence laws). However, it does not bar you from seeking compensation for injuries to other parts of your body, or if the accident was entirely the other driver's fault.


                  </p>
                </div>
              </div>

              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How does bias against motorcyclists affect a legal claim?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    There is often an unfair bias among insurance adjusters and juries who assume motorcyclists are inherently reckless or speeding. An experienced motorcycle accident attorney counters this bias by reconstructing the accident scene, utilizing witness testimony, and presenting objective evidence to prove the other motorist was negligent.


                  </p>
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
