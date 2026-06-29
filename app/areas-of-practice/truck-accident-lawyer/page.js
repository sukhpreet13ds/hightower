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

      <section className="truck-accident-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Ocala Truck Accident <br />Lawyer</h1>
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
              <h2 className="premises-section-title" style={{ marginBottom: '10px' }}>A Truck Accident Lawyer Focused
                on Your Recovery</h2>
              <p>Hightower & Hightower, P.A. has been standing up for the injured since 1976. For 50 years,
                truck accident victims have relied on our personal injury law firm for aggressive
                representation. Each attorney here is dedicated to protecting your rights, pursuing the
                justice you deserve, and holding at-fault parties accountable. If you’ve been in a trucking
                accident, don’t wait. Contact Hightower & Hightower today.</p>
              <p><strong><a href="../contact-us.html" className="inline-partner-link">Contact Us For A Free Case
                Review</a></strong></p>
            </div>
          </div>

          {/* Middle description text */}
          <div className="practice-mid-intro">
            <h2 className="premises-section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>If You’ve Been
              Injured In A Tractor-Trailer Accident</h2>
            <p className="contingency-text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px auto' }}>
              Central Florida is no stranger to tractor-trailer accidents. These crashes can result in serious
              injuries, including:</p>
          </div>

          {/* Rounded Cards Row (HH-Blog 1 to 5) with horizontal swipe on mobile */}
          <div className="claims-cards-row">
            <div className="claim-card">
              <img src="../assets/truck1.jpg" alt="Brain & Spinal Injuries" className="claim-card-img" />
              <div className="claim-card-title">Brain & Spinal Injuries</div>
            </div>
            <div className="claim-card">
              <img src="../assets/truck2.jpg" alt="Neck & Back Injuries" className="claim-card-img" />
              <div className="claim-card-title">Neck & Back Injuries</div>
            </div>
            <div className="claim-card">
              <img src="../assets/truck3.jpg" alt="Broken Bones" className="claim-card-img" />
              <div className="claim-card-title">Broken Bones & Internal</div>
            </div>
            <div className="claim-card">
              <img src="../assets/truck4.jpg" alt="Permanent Disability" className="claim-card-img" />
              <div className="claim-card-title">Permanent Disability</div>
            </div>
            <div className="claim-card">
              <img src="../assets/truck5.jpg" alt="Scarring & Burns" className="claim-card-img" />
              <div className="claim-card-title">Scarring & Burns</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', marginBottom: '60px', textAlign: 'center' }}>
            <p className="contingency-text" style={{ maxWidth: '900px', margin: '0 auto' }}>If you were injured in a
              tractor-trailer accident, you may have legal options. Our advice is always to speak with a
              lawyer as soon as possible after a collision, and before giving any recorded statements to
              insurance companies.</p>
          </div>
        </div>

        {/* Middle Section: Products Liability Banner (mid image law-half.jpg) */}
        {/* Layout: split left (image), right (blue background with half-gradient and text) */}
        <div className="products-liability-banner">
          <div className="banner-image-half" style={{ backgroundImage: "url('../assets/truck-crash.jpg')" }}>
          </div>
          <div className="banner-text-half">
            <div className="banner-text-content">
              <h2 className="banner-section-title">Compensation We Recover</h2>
              <h3 className="banner-section-subtitle">For Your Truck Accident Case</h3>
              <div className="banner-divider"></div>
              <p>Personal injury law calculates compensation for a truck accident case by looking at your
                damages. Damages are the total losses you’ve suffered due to the accident. This should
                account for past, present, and future losses, such as:</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Medical
                bills and hospital costs</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Costs of
                treatment you may need later on</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Money lost
                from being unable to work</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Damage to
                your property/belongings</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '20px' }}>• Physical
                pain, injury, or emotional suffering</p>
              <p><strong>How Much is a Truck Accident Settlement Worth?</strong><br />A case’s value depends on
                how the crash has affected the injured person. That can include changes in their health,
                their ability to handle daily activities, and the effects of the injuries on their ability
                to work and their relationships. These are all details that help us show the full impact the
                accident has had on the victim’s life as a whole.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Premises Liability (lawyer-1.png on the right) */}
        <div className="practice-law-container">
          <div className="premises-row">
            <div className="premises-text-col">
              <h2 className="premises-section-title">Are Truck Accidents</h2>
              <h3 className="premises-section-subtitle">More Dangerous Than Car Crashes?</h3>
              <div className="premises-divider"></div>
              <p>Yes. Trucks are not just ‘big vehicles.’ At maximum capacity, a tractor-trailer can outweigh
                a typical car by as much as twenty times. That’s 80,000 pounds that, even after impact, will
                continue to push cars through traffic and into other vehicles, causing multi-car collisions
                and increasing the severity of the crash. This size and weight can lead to severe,
                devastating injuries. Sometimes, fatalities.</p>
              <p><strong>Commercial Accident Claims Are Legally Complex</strong><br />More than one company can
                be tied to a single accident, making these crashes legally complex. Large trucking fleets
                involved also have “Catastrophic Response Teams” that they send to the scene immediately, to
                begin protecting their interests. They may even try to pressure victims into taking a quick
                settlement. Don’t let them take advantage. The trucking industry is highly regulated, and
                these cases are not handled the same as others. They are more serious, more aggressively
                defended, and require rigorous investigation.</p>
            </div>
            <div className="premises-image-col">
              <img src="../assets/lawyer-1.png" alt="Daniel L. Hightower" className="premises-lawyer-img" />
            </div>
          </div>
        </div>

        {/* Negligence Section (lawyer-2.png on the left, text on the right) */}
        <div className="practice-law-container" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="partners-row" style={{ marginBottom: '0' }}>

            <div className="partners-text-col">
              <h2 className="premises-section-title">Negligence & Accountability</h2>
              <h3 className="premises-section-subtitle">Holding Trucking Companies Accountable</h3>
              <div className="premises-divider"></div>
              <p>Negligence is the failure to use reasonable care. In a trucking accident case, that means a
                truck driver, trucking company, or a third party acted negligently and caused an accident.
                Actionable behavior can include speeding, driving while distracted, failing to maintain the
                truck, or violating road and safety rules. Negligence is what connects the accident to legal
                responsibility. To recover compensation, we must show that another party’s negligence caused
                or contributed to the crash and your injuries.</p>

              <h3 className="premises-section-subtitle"
                style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px' }}>Why You Must Act Quickly in
                Florida</h3>
              <p>It’s better to take action sooner rather than later. Florida law allows two years to file a
                lawsuit for injuries and related damages. Speaking with a truck accident attorney soon after
                the accident can help you understand how the law applies to your case. Our attorneys are
                here to help you through every step.</p>

              <h3 className="premises-section-subtitle"
                style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px' }}>How to Protect Your Rights
                After a Trucking Collision</h3>
              <p style={{ marginLeft: '20px', marginBottom: '8px' }}><strong>1. Dial 911 right away.</strong> When
                law enforcement arrives, they will collect details and document the scene. Emergency
                responders can evaluate and treat injuries.</p>
              <p style={{ marginLeft: '20px', marginBottom: '8px' }}><strong>2. Stay at the scene.</strong> Do not
                leave, as Florida law requires, but be careful not to admit fault. Statements made in the
                moment can be used against you.</p>
              <p style={{ marginLeft: '20px', marginBottom: '8px' }}><strong>3. Take photos.</strong> If able,
                document injuries, vehicle damage, company markings, license plates, and road conditions.
              </p>
              <p style={{ marginLeft: '20px', marginBottom: '8px' }}><strong>4. Seek medical attention.</strong> Do
                this even if you feel okay. Medical records are critical evidence for your case.</p>
              <p style={{ marginLeft: '20px', marginBottom: '20px' }}><strong>5. Report the accident.</strong>
                Notify your insurance, but avoid accepting a quick settlement or giving recorded statements
                before talking to a lawyer.</p>

              <h3 className="premises-section-subtitle"
                style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px' }}>Experienced Truck Accident
                Lawyer with 50 Years of Experience</h3>
              <p>At Hightower & Hightower, P.A., we know how to handle trucking companies and their insurers.
                Trucking companies and drivers must follow special rules around vehicle maintenance, driver
                hours, weight limits, and more. Getting access to black box data, driver logs, vehicle
                inspections, and other important evidence is time-sensitive. The sooner we act, the better.
                If you or a family member has been injured in a trucking accident, contact our office today
                for a free consultation.</p>
            </div>
          </div>
        </div>
        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>
          <div className="faq-category-group" data-category="trucking">
            <h2 className="faq-category-title">Trucking Accident Questions</h2>
            <div className="faq-accordion-list">
              {/* Accordion 1 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>HOW ARE ACCIDENTS INVOLVING COMMERCIAL TRUCKS DIFFERENT FROM CAR
                    ACCIDENTS?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    The size of tractor trailers puts passenger cars at a serious disadvantage.
                    Some tractor trailers can weigh over 80,000 pounds. When something that size
                    collides with an automobile, the injuries to the occupants can be
                    devastating and deadly.
                  </p>
                  <p className="faq-answer-text">
                    In addition, there are sections of the Vehicle Code applicable to trucking
                    companies and commercial truck drivers, as well as training and licensing
                    requirements specific for truck drivers making their defense in truck
                    accident cases more difficult and, therefore, better for plaintiffs.
                  </p>
                </div>
              </div>
              {/* Accordion 2 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>WHAT IS THE FEDERAL GOVERNMENT DOING ABOUT TRACTOR TRAILERS AND HIGHWAY
                    SAFETY?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    The Federal Motor Carrier Safety Administration controls specific
                    regulations that trucking companies are required to follow . These complex
                    regulations were put in place to protect accident victims of their own
                    pockets.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    ARE THERE ANY ADDITIONAL SAFETY LAWS RELATED TO TRUCKS AND TRUCK DRIVERS?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Yes. Specific laws and regulations are in place to protect passenger vehicle
                    drivers and occupants from the actions of negligent truck drivers and
                    trucking companies. State and Federal rules specify, for example, how many
                    hours and days truck drivers can stay on the road before taking a break, the
                    proper loading of cargo and weight the driver is carrying, and speeds for
                    safely traveling and passing other vehicles on the highway.


                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>
                    WHAT DAMAGES CAN I RECOVER IN A TRUCK ACCIDENT INJURY CASE?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Plaintiffs may be entitled to compensation for past and future wages lost
                    and medical expenses. You may also be entitled to compensation for the pain
                    and suffering you’ve endured as a result of the truck accident. Punitive
                    damages are possible if the conduct of the person at-fault is proven to be
                    particularly reckless.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>IF I AM INJURED, HOW WILL I PAY FOR MY MEDICAL BILLS? WHO IS RESPONSIBLE?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    The trucking company more than likely will not pay your medical costs right
                    away. Your own insurance may cover some of your expenses, including some
                    medical bills and funeral costs if a loved one died. We urge you NOT to give
                    a statement to your insurance company or to the trucking company, nor to
                    sign any release forms, before consulting with an experienced truck accident
                    attorney. Your actions could be used against you to limit you are awarded.


                  </p>
                </div>
              </div>

              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>WHAT IS THE TIME FRAME TO BRING AN INJURY OR DEATH CASE BASED ON A TRUCK
                    ACCIDENT?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    In the state of Florida, a truck accident case must be brought within four
                    years of the date of the accident. If someone died, the wrongful death
                    lawsuit must be brought within two years of the date of the decedent’s
                    death.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How are truck accidents different from regular car accidents?

                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Truck accidents are vastly different due to:

                  </p>
                  <ul>
                    <li>Severity of Injuries: The massive size and weight of commercial trucks cause catastrophic injuries and high fatality rates.</li>
                    <li>Complex Regulations: Trucking companies and drivers must comply with strict federal safety regulations (e.g., Hours of Service limits, maintenance logs).</li>
                    <li>Multiple Liable Parties: Liability may extend beyond the driver to the trucking company, cargo loaders, or equipment manufacturers.</li>
                  </ul>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What evidence is critical in a commercial truck accident case?
                  </span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Important evidence includes the truck's "black box" (Electronic Control Module) data, the driver’s logs and hours-of-service records, the trucking company’s hiring and maintenance records, post-accident drug test results, and data from the commercial vehicle's GPS tracking.

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
