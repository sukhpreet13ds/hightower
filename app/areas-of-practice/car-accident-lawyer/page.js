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

      <section className="car-law-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Ocala Car Accident <br />Lawyer</h1>
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
        <div className="community-hero-banner">
          <div className="community-hero-banner-content">
            No Cost Consultation – 100% FREE Until We Win!
          </div>
        </div>
      </section>

      <section className="detail-area-of-practice-law">
        <div className="practice-law-container">
          <div className="partners-row">
            <div className="partners-image-col">
              <img src="../assets/law-partners.png" alt="Daniel L. Hightower & Alison L. Hightower"
                className="partners-img" />
            </div>
            <div className="partners-text-col">
              <h2 className="premises-section-title" style={{ marginBottom: '10px' }}>The Car Accident Lawyer Who Wins
                Big for You</h2>
              <p>Since 1976, <a href="../lawyers/daniel-l-hightower.html"
                className="inline-partner-link">Hightower & Hightower, P.A.</a> has been standing up for
                people who have been injured due to someone else’s negligence or wrongdoing. Our commitment
                to our clients has established us as a <a href="personal-injury-law.html"
                  className="inline-partner-link">Personal Injury Law</a> Firm that accident victims can rely
                on for compassionate guidance and aggressive representation. Each attorney at our firm is
                dedicated to protecting your rights, pursuing the justice you deserve, and holding negligent
                parties accountable.</p>
              <h3 className="premises-section-subtitle"
                style={{ fontSize: '24px', marginTop: '20px', marginBottom: '10px' }}>Why Choose Hightower &
                Hightower, P.A.</h3>
              <p>We’re deeply rooted in our local community and have been serving Marion County and the
                surrounding areas for nearly five decades. We also know that the aftermath of an accident is
                overwhelming. Medical bills, lost wages, and the stress of dealing with insurance companies
                takes its toll. We’re here to alleviate that burden.</p>
              <p>Every case we handle begins with a consultation where we evaluate your circumstances and
                discuss your legal options. We work diligently to secure justice for you, negotiate with
                insurers, and, if necessary, litigate your case in court. Importantly, we operate on a
                contingency fee basis, meaning you pay nothing unless we make a recovery on your behalf.</p>
              <p><strong><a href="../contact-us.html" className="inline-partner-link">Contact Us For A Free Case
                Review</a></strong></p>
            </div>
          </div>

          <div className="practice-mid-intro">
            <h2 className="premises-section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>What Happens in
              a Car Accident Case?</h2>
            <p className="contingency-text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px auto' }}>
              A car accident can turn your life upside down, leaving you with stacks of medical bills and
              major pain. These difficulties make an already tough situation worse. Speaking with an attorney
              can be helpful if you’ve been in an auto accident and:</p>
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
            <p className="contingency-text" style={{ maxWidth: '900px', margin: '0 auto' }}>You don’t need to figure it
              all out right now, but don’t delay too much in reaching out to an attorney. Time limits exist on
              claims cases, and insurance companies will want to close your case quickly while offering less
              than what you’re owed. Starting with expert guidance from a car accident attorney gives you a
              stronger chance of recovering your losses.</p>
          </div>
        </div>

        <div className="products-liability-banner">
          <div className="banner-image-half" style={{ backgroundImage: "url('../assets/car-acc-left.webp')" }}>
          </div>
          <div className="banner-text-half">
            <div className="banner-text-content">
              <h2 className="banner-section-title">How Much Is</h2>
              <h3 className="banner-section-subtitle">A Car Accident Case Worth?</h3>
              <div className="banner-divider"></div>
              <p>When we talk about how much your case is worth, we mean the total amount you could get as
                compensation for the harm you’ve experienced. Personal injury law calculates this amount by
                looking at your damages. Damages, or the total losses you’ve faced because of the accident,
                cover things like:</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Costs for
                medical care and recovery.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Money lost
                from wages or the future ability to earn.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '8px' }}>• Emotional
                suffering or physical pain.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: '#dae1e8', marginBottom: '20px' }}>• Damage to
                property, like your vehicle.</p>
              <p>You may also be compensated if your injuries lead to more severe issues like permanent
                scarring, chronic pain, or paralysis. To determine how much your damages are worth, the
                insurance companies, courts, and your lawyer will look over how the injuries have changed
                your daily activities, relationships, and mental/overall health. Collecting as much proof as
                possible builds a stronger case. Things like medical records, written notes, or official
                reports can all support your claim. That’s why what you do right after the accident matters.
              </p>
            </div>
          </div>
        </div>

        <div className="practice-law-container">
          <div className="premises-row">
            <div className="premises-text-col">
              <h2 className="premises-section-title">What To Do</h2>
              <h3 className="premises-section-subtitle">After A Car Accident</h3>
              <div className="premises-divider"></div>
              <p>If you’ve been in a car accident, dial 911. When police arrive, they will collect details
                about the crash and record the scene. Emergency responders will treat any injuries. Stay at
                the scene and do not leave, because Florida law requires it, but make sure you do not admit
                fault to the accident. This could be used against you later.</p>
              <p>If you can, take photos of your injuries and car damage. Try to note things like the time,
                weather, and traffic conditions. Also see a doctor, even if you are feeling fine. Some
                injuries take time to show up, and having a medical record can help your case later.</p>
              <p>Do tell your insurance company about the crash, however, try not to say yes to a quick payout
                or give a recorded statement until you talk to a lawyer. A lawyer will explain your rights.
                They can also figure out if the other driver’s action counts as negligence, and identify the
                supporting evidence to prove it.</p>
            </div>
            <div className="premises-image-col">
              <img src="../assets/cop.webp" alt="Daniel L. Hightower" className="premises-lawyer-img" />
            </div>
          </div>
        </div>

        <div className="practice-law-container" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="partners-row" style={{ marginBottom: '0' }}>

            <div className="partners-text-col">
              <h2 className="premises-section-title">What Does Negligence Mean</h2>
              <h3 className="premises-section-subtitle">And How Do You Prove It?</h3>
              <div className="premises-divider"></div>
              <p>Negligence is when someone does not use proper or reasonable care. This failure leads to harm
                for another person. In car crashes, that could mean speeding or texting while driving.
                Driving under the influence, ignoring a red light, or not yielding when required are also
                examples. To prove someone’s negligence in Florida, you need to show:</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• The
                person responsible had a duty to drive and follow the rules of the road.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• They
                didn’t fulfill that duty.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '8px' }}>• This
                failure led to the crash and caused your injuries.</p>
              <p style={{ marginLeft: '20px', fontWeight: '500', color: 'var(--button)', marginBottom: '20px' }}>•
                Because of this, you faced damages like hospital bills, lost income, and other costs.</p>
              <p>Proof like the police records from the scene, witness accounts, traffic videos, or expert
                opinions can be used to show negligence. This matters because if you prove the other driver
                was negligent, you could recover money for your injuries, expenses, and the pain you went
                through.</p>
              <p>Proving negligence forms the base of any solid personal injury case. The right legal team
                plays a big role in showing evidence that proves fault and helps you get the compensation
                you’re entitled to.</p>
            </div>
          </div>
        </div>
        <div className="faq-content-area" style={{ maxWidth: '1200px', margin: 'auto', marginBottom: '20px' }}>


          <div className="faq-category-group" data-category="auto">
            <h2 className="faq-category-title">Auto Accident Questions</h2>
            <div className="faq-accordion-list">
              <div className="faq-accordion">
                <button className="faq-accordion-header active">
                  <span>If I am in an automobile accident, what should I do?</span>
                  <span className="faq-icon">−</span>
                </button>
                <div className="faq-accordion-content" style={{ maxHeight: 'none', padding: '25px' }}>
                  <p className="faq-answer-text">
                    Florida law requires that you remain at the scene of an accident until the
                    police arrives to help in the preparation of an accident report. Report the
                    accident to your insurance company as soon as you get home from the scene,
                    or as soon as possible. In order to prove your case, you have the burden of
                    presenting evidence to establish your claim, therefore, preservation of
                    evidence is crucial. Such evidence may consist of documentation of the
                    physical evidence at the accident site, of the vehicles involved in the
                    accident and of your medical injuries. You may not know the legal
                    requirements necessary to prove your case and therefore, we recommend that
                    you contact an attorney immediately to be advised of your legal rights.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>Who will pay to fix the damage to my vehicle?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    That depends on what type of insurance coverage you have or the insurance
                    coverage of the person that caused the accident. Call the other driver’s
                    insurance company and request that your car be fixed. Only discuss property
                    damage issues with them. Do not give any statements or discuss how the
                    accident happened or your injuries. Check your policy to see whether you
                    have rental car coverage, towing and what deductibles apply. It may be in
                    your best interest to retain the services of a lawyer with experience in
                    handling auto accident claims as they are familiar with the terms of
                    different insurance policies and regularly negotiate the resolution of
                    property damage claims with many different insurance companies.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>Who will pay my medical bills and lost wages?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    There may be many sources from which to get your medical bills paid and,
                    depending on the types of insurance, they each take different priority. For
                    instance, in Florida, you are required to carry personal injury protection
                    (PIP) insurance. This is generally in the amount of $10,000 and may have
                    different deductible amounts. This money is available to pay for medical
                    bills and/or lost wages. However, unless you instruct your insurance carrier
                    to reserve your PIP for your lost wages, they will pay it to the first
                    medical bills they receive. There may also be other insurance available to
                    pay for your medical bills including medical payments coverage, health
                    insurance, Medicare, Medicaid or disability insurance. If you are in an
                    automobile accident, you should contact an experienced personal injury
                    lawyer to discuss how the relevant state laws and policies of insurance
                    apply to recover damages for your injuries.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What if the person that caused the accident does not have
                    insurance?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    Unfortunately, nearly 20% of Florida’s drivers do not have any form of
                    automobile insurance. If you purchased Uninsured Motorist Coverage from your
                    insurance carrier, you may look to your own insurance company to pay you for
                    the damages caused by the negligence of the uninsured motorist carrier. We
                    caution you, however, in negotiating your claim with your insurance company
                    yourself as, even though they are your insurance company, (to pay the least
                    amount of money out on claims) their interest is directly opposite to what
                    is in your best interest, (to obtain a just settlement to compensate you
                    fairly for all of your damages). We recommend you obtain legal counsel
                    before attempting to negotiate your claims directly with your own insurance
                    company.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>The insurance company wants to take my recorded statement, what is
                    that?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    We do not recommend that you give a recorded statement to anyone, other than
                    your own insurance carrier. Many insurance policies require the insured
                    (you) to “cooperate” with their investigation of the accident. This
                    recording can and will be used as evidence against you if you pursue a claim
                    regarding your accident, therefore, we would advise you obtain legal counsel
                    before giving any such statement.

                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What should I do immediately after a car accident?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <ul>
                    <li style={{ color: '#111' }}>Check for injuries and call 911 for emergency medical help if needed.</li>
                    <li style={{ color: '#111' }}>Move to safety if the vehicles are blocking traffic and it is safe to do so.</li>
                    <li style={{ color: '#111' }}>Call the police to file an official accident report.</li>
                    <li style={{ color: '#111' }}>Exchange information with the other driver (name, contact info, insurance details).</li>
                    <li style={{ color: '#111' }}>Document the scene by taking photos of vehicle damage, road conditions, injuries, and gathering witness contacts.</li>
                    <li style={{ color: '#111' }}>Seek medical attention immediately, even if you feel fine, as some injuries delay symptoms.</li>
                  </ul>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>Should I speak or give a statement to the other driver’s insurance company?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    No. You should avoid giving a recorded statement or signing any documents from the opposing insurance company without consulting a lawyer first. Insurance adjusters often look for statements they can use to minimize your claim or shift blame onto you.
                  </p>
                </div>
              </div>
              <div className="faq-accordion">
                <button className="faq-accordion-header">
                  <span>What if the driver who hit me doesn't have insurance?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-answer-text">
                    If you are hit by an uninsured or underinsured driver, you can seek compensation through your own auto insurance policy if you have Uninsured/Underinsured Motorist (UM/UIM) coverage. Your lawyer can help you navigate this process with your own insurer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="premises-contact-bar">
          <div className="practice-law-container">
            <p>If you have a potential premises liability claim, please feel free to <a
              href="../contact-us.html" className="gold-bar-link">contact us</a>.</p>
          </div>
        </div>
      </section>
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
      <section className="cta-section" id="cta-section">
        <div className="cta-container">
          <h2 className="cta-text">Fighting for the injured since 1976.</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
