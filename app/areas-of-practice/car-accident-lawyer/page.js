import Footer from '@/components/Footer';
import { getSectionContent } from '@/lib/content';

export const metadata = { title: 'Hightower & Hightower' };

export default async function Page() {
  const c = await getSectionContent('practice-car-accident');
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

      <section className="car-law-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">{c.hero_title_line1} <br />{c.hero_title_line2}</h1>
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
                By submitting, you agree to our <a href="/privacy-policy" className="footer-text"
                  style={{ color: '#C2905B' }}>Privacy Policy</a>. Your information is confidential and
                protected by attorney-client privilege.
              </p>
            </div>
          </div>
        </div>
        <div className="community-hero-banner">
          <div className="community-hero-banner-content">
            {c.hero_banner_text}
          </div>
        </div>
      </section>

      <section className="detail-area-of-practice-law">
        <div className="practice-law-container">
          <div className="partners-row">
            <div className="partners-image-col">
              <img src="../assets/car-crash.jpg" alt="Daniel L. Hightower & Alison L. Hightower"
                className="partners-img" />
            </div>
            <div className="partners-text-col">
              <h2 className="premises-section-title" style={{ marginBottom: '10px' }}>The Car Accident Lawyer Who Wins
                Big for You</h2>
              <p>Since 1976, <a href="/lawyers/daniel-l-hightower"
                className="inline-partner-link">Hightower & Hightower, P.A.</a> has been standing up for
                people who have been injured due to someone else’s negligence or wrongdoing. Our commitment
                to our clients has established us as a <a href="/areas-of-practice/personal-injury-law"
                  className="inline-partner-link">Personal Injury Law</a> Firm that accident victims can rely
                on for compassionate guidance and aggressive representation. Each attorney at our firm is
                dedicated to protecting your rights, pursuing the justice you deserve, and holding negligent
                parties accountable.</p>
              <h3 className="premises-section-subtitle"
                style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px' }}>{c.why_choose_title}</h3>
              <p>{c.why_choose_p1}</p>
              <p>{c.why_choose_p2}</p>
              <p><strong><a href="/contact-us" className="inline-partner-link">Contact Us For A Free Case
                Review</a></strong></p>
            </div>
          </div>

          <div className="practice-mid-intro">
            <h2 className="premises-section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>{c.mid_intro_title}</h2>
            <p className="contingency-text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px auto' }}>
              {c.mid_intro_text}</p>
          </div>

          <div className="claims-cards-row">
            <div className="claim-card">
              <img src="../assets/hurt1.jpg" alt="You Were Hurt" className="claim-card-img" />
              <div className="claim-card-title">You Were Hurt</div>
            </div>
            <div className="claim-card">
              <img src="../assets/hurt2.webp" alt="Insurance Coverage" className="claim-card-img" />
              <div className="claim-card-title">Insurance Coverage</div>
            </div>
            <div className="claim-card">
              <img src="../assets/hurt3.jpg" alt="Determining Fault" className="claim-card-img" />
              <div className="claim-card-title">Determining Fault</div>
            </div>
            <div className="claim-card">
              <img src="../assets/hurt4.jpg" alt="Overwhelming Paperwork" className="claim-card-img" />
              <div className="claim-card-title">Overwhelming Paperwork</div>
            </div>
            <div className="claim-card">
              <img src="../assets/hurt5.jpg" alt="Strict Deadlines" className="claim-card-img" />
              <div className="claim-card-title">Strict Deadlines</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', marginBottom: '60px', textAlign: 'center' }}>
            <p className="contingency-text" style={{ maxWidth: '900px', margin: '0 auto' }}>{c.mid_intro_followup}</p>
          </div>
        </div>

        <div className="products-liability-banner">
          <div className="banner-image-half" style={{ backgroundImage: "url('../assets/car-acc-left.webp')" }}>
          </div>
          <div className="banner-text-half">
            <div className="banner-text-content">
              <h2 className="banner-section-title">{c.value_title_line1}</h2>
              <h3 className="banner-section-subtitle">{c.value_title_line2}</h3>
              <div className="banner-divider"></div>
              <p>{c.value_intro}</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Costs for
                medical care and recovery.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Money lost
                from wages or the future ability to earn.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Emotional
                suffering or physical pain.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '20px' }}>• Damage to
                property, like your vehicle.</p>
              <p>{c.value_conclusion}
              </p>
            </div>
          </div>
        </div>

        <div className="practice-law-container">
          <div className="premises-row">
            <div className="premises-text-col">
              <h2 className="premises-section-title">{c.what_to_do_title_line1}</h2>
              <h3 className="premises-section-subtitle">{c.what_to_do_title_line2}</h3>
              <div className="premises-divider"></div>
              <p>{c.what_to_do_p1}</p>
              <p>{c.what_to_do_p2}</p>
              <p>{c.what_to_do_p3}</p>
            </div>
            <div className="premises-image-col">
              <img src="../assets/cop.webp" alt="Daniel L. Hightower" className="premises-lawyer-img" />
            </div>
          </div>
        </div>

        <div className="practice-law-container" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="partners-row" style={{ marginBottom: '0' }}>

            <div className="partners-text-col">
              <h2 className="premises-section-title">{c.negligence_title_line1}</h2>
              <h3 className="premises-section-subtitle">{c.negligence_title_line2}</h3>
              <div className="premises-divider"></div>
              <p>{c.negligence_intro}</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• The
                person responsible had a duty to drive and follow the rules of the road.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• They
                didn’t fulfill that duty.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• This
                failure led to the crash and caused your injuries.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '20px' }}>•
                Because of this, you faced damages like hospital bills, lost income, and other costs.</p>
              <p>{c.negligence_p2}</p>
              <p>{c.negligence_p3}</p>
            </div>
          </div>
        </div>
        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>


          <div className="faq-category-group" data-category="auto">
            <h2 className="faq-category-title">Auto Accident Questions</h2>
            <div className="faq-accordion-list">
              <div className="faq-accordion">
                <button className="faq-accordion-header active">
                  <span>How much does it cost to hire Hightower & Hightower, P.A.?</span>
                  <span className="faq-icon">−</span>
                </button>
                <div className="faq-accordion-content" style={{ maxHeight: 'none', padding: '25px' }}>
                  <p className="faq-answer-text">
                   We operate on a contingency fee basis. This means there are no upfront costs or hourly fees to hire us. We only get paid if we successfully secure a settlement or court award for you. If we don’t win your case, you owe us nothing in attorney fees.


                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What is the “serious injury threshold” in Florida car accident cases?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                   Under Florida’s No-Fault laws, your own PIP insurance covers the first $10,000 of medical bills regardless of fault. To sue the other driver for “pain and suffering” or non-economic damages, your injuries must meet a certain threshold, such as significant and permanent loss of a bodily function, permanent scarring, or permanent injury. We can evaluate your medical records to determine if your case meets this legal requirement.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How long do I have to file a car accident claim in Marion County?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    In Florida, the statute of limitations for most personal injury lawsuits is two years from the date of the accident. While that may seem like a long time, evidence like tire marks, witness memories, vehicle data, and footage can disappear quickly. It is always best to reach out to an attorney as soon as possible after the accident to preserve your rights. <a href='https://hightowerandhightower.netlify.app/blogs/what-evidence-strengthens-your-injury-case' style={{ color: 'var(--button)' }} target='_blank'>Learn what evidence can help strengthen your injury case here.</a>


                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>Should I speak to the other driver’s insurance adjuster?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    No. You should avoid giving a recorded statement or signing any documents from the other driver’s insurance company without consulting a lawyer first. Adjusters are trained to look for statements they can use to minimize your claim or shift fault onto you. We handle all communications with the insurance companies so you don’t have to.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>How long will it take to resolve my car accident case?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                   Every case is unique. Some settlements can be reached in a few months, while complex cases involving litigation may take longer. Our priority is ensuring you don’t settle too early before the full extent of your injuries, and your future medical needs, is truly known. We work diligently to move your case forward as quickly as possible without sacrificing the value you deserve.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>Why should I choose a local firm instead of a large national law firm?</span>
                  <span className="faq-icon">+</span>
                </button>
                 <p className="faq-answer-text">
                Since 1976, we have built deep roots in Marion County. We know the local courts, the local roads where accidents happen, and the local medical providers who treat our clients. When you call us, you are a neighbor receiving personalized, aggressive representation from a family-led firm.
</p>
              </div>
            </div>
          </div>
        </div>
        <div className="premises-contact-bar">
          <div className="practice-law-container">
            <p>If you have a potential car accident claim, please feel free to <a
              href="/contact-us" className="gold-bar-link">contact us</a>.</p>
          </div>
        </div>
      </section>
      <section className="hh-honors-section" id="hh-honors-section">
        <div className="honors-container">
          <div className="honors-title-wrapper">
            <span className="honors-line"></span>
            <h2 className="honors-title">{c.honors_title}</h2>
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
      <section className="cta-section" id="cta-section">
        <div className="cta-container">
          <h2 className="cta-text">{c.cta_text}</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
