import Footer from '@/components/Footer';
import ClaimsCarousel from '@/components/ClaimsCarousel';

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
        .claims-carousel-container {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 80px;
        }

        .claims-carousel-viewport {
            overflow: hidden;
            width: 100%;
        }

        .claims-cards-row {
            display: flex;
            gap: 24px;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            width: 100%;
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
            flex: 0 0 calc((100% - 96px) / 5);
        }

        .claim-card:hover {
            transform: translateY(-5px);
        }

        .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #1D3656;
            color: #fff;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: background-color 0.3s, opacity 0.3s;
        }
        
        .carousel-arrow:hover:not(:disabled) {
            background: #C2905B;
        }
        
        .carousel-arrow:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
        
        .left-arrow {
            left: -20px;
        }
        
        .right-arrow {
            right: -20px;
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
            width: 100%;
            margin-bottom: 80px;
            background-color: #0f1c2d;
            background: linear-gradient(180deg, rgba(29, 54, 86, 0.95) 0%, #0f1c2d 100%);
            padding: 60px 80px;
            color: #fff;
        }

        .banner-content-cols {
            display: flex;
            gap: 60px;
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
        }

        .banner-col-left,
        .banner-col-right {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .banner-col-left p,
        .banner-col-right p {
            font-family: var(--family-sans);
            font-size: 18px;
            color: #dae1e8;
            line-height: 1.7;
            margin: 0 0 20px 0;
        }

        .banner-col-left li,
        .banner-col-right li {
            color: #fff !important;
            font-family: var(--family-sans);
            font-size: 18px;
            line-height: 1.7;
        }

        .banner-col-left li strong,
        .banner-col-right li strong {
            color: #fff;
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
                padding: 40px 30px;
            }

            .banner-content-cols {
                flex-direction: column;
                gap: 30px;
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

            .claims-carousel-container {
                margin-bottom: 50px;
            }

            .carousel-arrow {
                display: none !important;
            }

            .claims-carousel-viewport {
                overflow: visible;
            }

            .claims-cards-row {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                gap: 16px;
                padding-bottom: 15px;
                scrollbar-width: none;
                transform: none !important;
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
            <h1 className="community-hero-title">Ocala Personal <br />Injury Lawyer</h1>
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
          <ClaimsCarousel />
        </div>

        {/* Middle Section: Products Liability Banner (mid image law-half.jpg) */}
        {/* Layout: split left (image), right (blue background with half-gradient and text) */}
         <div className="products-liability-banner">
          <div className="banner-content-cols">
            <div className="banner-col-left">
              <p>Our team works to build a strong case on your behalf. We investigate every aspect of your claim, from collecting evidence to consulting with experts and speaking with witnesses. We also negotiate assertively with insurance companies, using our experience to aim for a fair settlement that reflects the true extent of your losses. If negotiations stall, our trial attorneys are fully prepared to represent you in court. Throughout the process, we keep you informed and involved the entire way.</p>
              
              <h3 className="banner-section-subtitle" style={{ marginTop: '24px', textTransform: 'none' }}>What’s Involved in a Personal Injury Case?</h3>
              <p>Every personal injury case begins with establishing that a responsible party owed you a duty of care and breached that duty, causing your injuries and leading to measurable damages. In practical terms, this means we will review accident reports, medical records, witness statements, and expert opinions to determine and demonstrate the fault and extent of your injuries and damages.</p>
              <p>Damages due to an accident often include medical expenses, lost wages, future earning capacity, and non-economic harms like pain and suffering. When you come to our office, a personal injury attorney will carefully assess each aspect of your case.</p>
              
              <h3 className="banner-section-subtitle" style={{ marginTop: '24px', textTransform: 'none' }}>Important Elements of Any Personal Injury Case</h3>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', margin: '15px 0', color: '#fff' }}>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Duty of Care:</strong> The responsible party owed a duty to you (such as keeping premises safe or driving responsibly).</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Breach of Duty:</strong> The responsible party failed to meet that duty.</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Causation:</strong> The breach of duty caused or significantly contributed to your injuries and damages.</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Damages:</strong> You suffered measurable harm such as medical bills, lost wages, or pain and suffering.</li>
              </ul>
            </div>

            <div className="banner-col-right">
              <h3 className="banner-section-subtitle" style={{ marginTop: '0', textTransform: 'none' }}>How Is The Value of Your Personal Injury Case Calculated?</h3>
              <p>Determining the value of a personal injury claim depends on many factors, including:</p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', margin: '15px 0', color: '#fff' }}>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Severity of Injuries:</strong> The extent and permanence of your injuries.</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Medical Expenses:</strong> Past and future medical costs.</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Lost Wages & Earning Capacity:</strong> Missed workdays and any long-term impact on your ability to earn income.</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Pain and Suffering:</strong> Physical pain and emotional distress caused by the accident.</li>
                <li style={{ marginBottom: '8px', fontFamily: 'var(--family-sans)', color: '#fff' }}><strong>Contributory Negligence:</strong> Whether you share any fault for the incident and to what extent.</li>
              </ul>
              
              <p style={{ marginTop: '20px' }}>Our goal is to quantify and pursue all of the damages you are entitled to, covering medical bills, rehabilitative care, lost wages, reduced earning capacity, pain and suffering, and, in certain cases, punitive damages. Before we represent you, we offer a free consultation to discuss these details and help you understand potential outcomes.</p>
              
              <div style={{ marginTop: '30px', width: '100%' }}>
                <img src="../assets/accident-thee.jpg" alt="Accident Representation" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block', objectFit: 'cover', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Premises Liability (lawyer-1.png on the right) */}
        {/* <div className="practice-law-container">
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
              <img src="../assets/lawyer-1.png" alt="Daniel L. Hightower" className="premises-lawyer-img" />
            </div>
          </div>
        </div> */}
        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>
          <div className="faq-category-group" data-category="general">
            <h2 className="faq-category-title">Personal Injury Questions</h2>
            <div className="faq-accordion-list">
              {/* Accordion 1 (Expanded by default as requested in mockup screenshot) */}
              <div className="faq-accordion">
                <button className="faq-accordion-header active">
                  <span>Can I recover compensation if I was partly at fault for my accident?</span>
                  <span className="faq-icon">−</span>
                </button>
                <div className="faq-accordion-content" style={{ maxHeight: 'none', padding: '25px' }}>
                  <p className="faq-answer-text">
                    Florida follows a modified comparative negligence standard. This means that the amount of money you can get might be reduced based on how much you were at fault. If you’re found to be more than 50% at fault, you might not be able to get any compensation at all. It’s also important to remember that just because you think you might have done something wrong, it doesn’t mean you don’t have a case. Insurance companies often try to say that the person who’s making a claim was more at fault than they really were, just so they can pay out less money.

                  </p>
                </div>
              </div>
              {/* Accordion 2 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What’s the difference between a personal injury claim and a workers’ compensation claim?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    If you get hurt on the job, Florida law says you usually have to go through the workers’ compensation system, rather than taking your employer to court. But, if someone or something outside of your job (like a careless driver, or a property owner who didn’t take care of their space) causes your injury, that’s when you’d file a personal injury claim. In some situations, like a work injury caused by a third party, you may actually have both a workers’ comp claim and a personal injury claim at the same time.


                  </p>
                </div>
              </div>
              {/* Accordion 3 */}
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What should I do in the days after an accident to protect my claim?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Some injuries don’t show up right away, so it’s better to be safe than sorry. Seek medical attention, even if your injuries seem minor at first. Also take photos of the scene, get contact information for any witnesses, and avoid giving a recorded statement to an insurance adjuster before speaking with an attorney. What you say early on can end up being used against you later.


                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How long does a personal injury case usually take?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                   The length of time it takes to resolve a personal injury case can vary greatly, depending on how complicated the case is and how badly you’re hurt. Straightforward claims can settle in a matter of months. If your injuries are really serious or will affect you for a long time, it’s going to take longer. We need to know exactly how much medical care you’ll need before we can settle the case. If we rush into a settlement too quickly, before you’ve fully recovered, you might not get the compensation you deserve. <a href='https://hightowerandhightower.netlify.app/blogs/how-long-do-personal-injury-cases-typically-take' style={{ color: 'var(--button)' }} target='_blank'>Learn more about how long personal injury cases typically take here.</a>

                  </p>
                </div>
              </div>

                 <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What should I bring to my free consultation?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                  When you come in for your consultation, try to bring any documentation you have related to the accident. This might be photos, insurance information, medical records or bills, and letters from the insurance company. Most importantly, don’t stress about the consultation. We’re here to listen to your story and learn the facts of your case. Do not worry if you don’t have everything gathered yet. Our goal is to make this process as smooth as possible for you, so just come prepared to share your story and we’ll take it from there.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Premises Contact Callout (Gold Bar) */}
        <div className="premises-contact-bar">
          <div className="practice-law-container">
            <p>If you have a potential personal injury claim, please feel free to <a
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
