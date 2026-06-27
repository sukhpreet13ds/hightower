import Footer from '@/components/Footer';
import { all } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Hightower & Hightower' };

function blogExcerpt(b) {
  if (b.excerpt) return b.excerpt;
  const text = (b.content || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > 120 ? text.slice(0, 120) + '...' : text;
}

export default async function Page() {
  const latestBlogs = await all(`
    SELECT id, title, excerpt, content, image FROM blogs WHERE published = 1
    ORDER BY created_at DESC, id DESC LIMIT 3
  `);

  return (
    <main className="main-content">
      <section className="hh-hero-section" id="hh-hero-section">
        <div className="hero-container">
          <div className="hero-left-col">
            <h1 className="hero-title">You Were Injured.<br/>We'll Fight to <span className="highlight-gold">Make It
              Right.</span></h1>
            <p className="hero-description">
              For nearly 50 years, the Hightower family has stood beside injured Floridians — battling
              insurance companies so you can focus on what matters: healing. Your consultation is free, and
              you pay nothing unless we make a recovery for you.
            </p>
            <div className="hero-btn-group">
              <a href="#" className="btn-schedule" data-open-consult="true">
                <img src="assets/cal.png" alt="Play" className="icon-play"/> SCHEDULE CONSULTATION
              </a>
              <a href="videos.html" className="btn-get-know">
                <img src="assets/button-play.png" alt="Play" className="icon-play"/> GET TO KNOW US
              </a>
            </div>
            <div className="hero-subtitle-since">Fighting for the injured since 1976.</div>
          </div>

          <div className="hero-middle-col">
            <img src="assets/hero-hightower.png" alt="Attorney" className="hero-man-img"/>
          </div>

          <div className="hero-right-col">
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

        {/* Bottom Gold Banner Bar */}
        <div className="hero-bottom-banner">
          <span>No Cost Consultation – 100% FREE Until We Win!</span>
        </div>
      </section>

      {/* H&H Million Section (Notable Verdicts) */}
      <section className="hh-million-section" id="hh-million-section">
        <div className="verdicts-row">
          {/* Card 1 */}
          <div className="verdict-card">
            <span className="verdict-label">PERSONAL INJURED</span>
            <h3 className="verdict-amount">$<span className="animate-counter" data-target="9.6"
              data-decimals="1">0.0</span> Million</h3>
            <a href="notable-trial-results-settlements.html#million-navigate" className="verdict-link">Read More</a>
          </div>
          {/* Card 2 */}
          <div className="verdict-card">
            <span className="verdict-label">CAR ACCIDENT</span>
            <h3 className="verdict-amount">$<span className="animate-counter" data-target="2.1"
              data-decimals="1">0.0</span> Million</h3>
            <a href="notable-trial-results-settlements.html#million-navigate" className="verdict-link">Read More</a>
          </div>
          {/* Card 3 */}
          <div className="verdict-card">
            <span className="verdict-label">WORK INJURED</span>
            <h3 className="verdict-amount">$<span className="animate-counter" data-target="5.75"
              data-decimals="2">0.00</span> Million</h3>
            <a href="notable-trial-results-settlements.html#million-navigate" className="verdict-link">Read More</a>
          </div>
          {/* Card 4 */}
          <div className="verdict-card">
            <span className="verdict-label">WRONGFUL DEATH</span>
            <h3 className="verdict-amount">$<span className="animate-counter" data-target="2.0"
              data-decimals="1">0.0</span> Million</h3>
            <a href="notable-trial-results-settlements.html#million-navigate" className="verdict-link">Read More</a>
          </div>
          {/* Card 5 */}
          <div className="verdict-card">
            <span className="verdict-label">MOTORCYCLIST ACCIDENT</span>
            <h3 className="verdict-amount">$<span className="animate-counter" data-target="2.5"
              data-decimals="1">0.0</span> Million</h3>
            <a href="notable-trial-results-settlements.html#million-navigate" className="verdict-link">Read More</a>
          </div>
        </div>

        {/* Centered Overlapping Button */}
        <div className="verdicts-btn-wrapper">
          <a href="notable-trial-results-settlements.html" className="btn-all-verdicts">SEE ALL NOTABLE VERDICTS</a>
        </div>
      </section>

      {/* Our Areas of Practice Section */}
      <section className="hh-practice-section" id="hh-practice-section">
        <div className="practice-container">
          {/* Left Column: Title */}
          <div className="practice-left-col">
            <h2 className="practice-title">
              Our Areas
              <div className="practice-title-sub">
                <span className="title-line"></span>
                <span className="highlight-gold">of Practice</span>
              </div>
            </h2>
          </div>

          {/* Right Column: Description & Action Button */}
          <div className="practice-right-col">
            <p className="practice-desc">
              Our legal team is honored to stand up for the rights of those who have been severely injured, as
              well as their families.
            </p>
            <a href="#" className="btn-free-consult" data-open-consult="true">FREE CONSULTATION</a>
          </div>
        </div>
      </section>

      {/* H&H Law Section (Expanding Hover Cards / Mobile Marquee) */}
      <section className="hh-law-section" id="hh-law-section">
        <div className="law-cards-container">
          {/* Card 1: Personal Injury Law */}
          <div className="law-card"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.85)), url('assets/law1.jpg')" }}>
            <div className="law-card-content">
              <h3 className="law-card-title">Personal Injury<br/>Law</h3>
              <p className="law-card-desc">
                Since 1976, <a href="lawyers/daniel-l-hightower.html"
                  style={{ borderBottom: '2px solid var(--button)', color: '#fff', textDecoration: 'none' }}>Daniel
                  L.
                  Hightower</a> has been standing up for the rights of people against those that
                caused them injury. Many times the at-fault party is represented by an insurance company, or
                the injured party is seeking benefits from their own insurance company...
              </p>
              <a href="areas-of-practice/personal-injury-law.html" className="btn-law-consult">LEARN MORE</a>
            </div>
          </div>
          {/* Card 2: Car Accident Law */}
          <div className="law-card"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.85)), url('assets/law2.jpg')" }}>
            <div className="law-card-content">
              <h3 className="law-card-title">Car Accident<br/>Law</h3>
              <p className="law-card-desc">
                In a split second, an car, truck or motorcycle accident can change the lives of you and your
                loved ones forever. A traffic crash occurs somewhere in Florida every two seconds. Most
                crashes are caused by the negligence or carelessness of a driver. If you are injured in a
                collision, you may have a claim against the at-fault driver and your own...

              </p>
              <a href="areas-of-practice/car-accident-lawyer.html" className="btn-law-consult">LEARN MORE</a>
            </div>
          </div>
          {/* Card 3: Work Accident Law */}
          <div className="law-card"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.85)), url('assets/law3.jpg')" }}>
            <div className="law-card-content">
              <h3 className="law-card-title">Work Accident<br/>Law</h3>
              <p className="law-card-desc">
                Daniel L. Hightower, work accident lawyer, has been helping injured workers with their work
                accident claims since 1976. As an injured worker under the workers’ compensation law you are
                entitled to receive medical treatment and prescription drugs. You may also be entitled to
                wage loss reimbursement for time you have been...
              </p>
              <a href="areas-of-practice/work-accident-law.html" className="btn-law-consult">LEARN MORE</a>
            </div>
          </div>
          {/* Card 4: Wrongful Death Law */}
          <div className="law-card"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.85)), url('assets/law4.jpg')" }}>
            <div className="law-card-content">
              <h3 className="law-card-title">Wrongful<br/>Death Law</h3>
              <p className="law-card-desc">
                Wrongful death is any death that results from the misconduct or negligence of another person
                or entity. Wrongful death can be the result of an auto accident, a work accident, a
                dangerous product or the negligent acts of others. Many times families are so stricken by
                pain and grief that they may not realize that the death of their...

              </p>
              <a href="areas-of-practice/wrongful-death-law.html" className="btn-law-consult">LEARN MORE</a>
            </div>
          </div>
          {/* Card 5: Social Security Disability */}
          <div className="law-card"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.85)), url('assets/law5.jpg')" }}>
            <div className="law-card-content">
              <h3 className="law-card-title">Social Security<br/>Disability</h3>
              <p className="law-card-desc">
                Occasionally prospective clients contact our office for representation before they have
                applied for Social Security Disability (SSD) benefits. We are always happy to answer any
                questions you may have, but we generally do not officially get involved in SSD cases until
                the initial application has been denied. In theory, you should...

              </p>
              <a href="areas-of-practice/social-security-disability-law.html" className="btn-law-consult">LEARN
                MORE</a>
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



      <section className="question-section" id="question-section">
        <div className="question-container">
          {/* Left Column: Image with SVG overlay */}
          <div className="question-left-col">
            <div className="question-image-wrapper">
              <img src="assets/questions-left.jpg" alt="Get Answers" className="question-main-img"/>
              <div className="question-logo-overlay">
                <img src="assets/questions-over.svg" alt="H&H Lawyers" className="question-overlay-svg"/>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Steps */}
          <div className="question-right-col">
            <h2 className="question-section-title">Get Answers in 3 Easy Steps</h2>

            <div className="steps-wrapper">
              {/* Step 1 */}
              <div className="step-item">
                <div className="step-meta">
                  <img src="assets/steps.png" alt="Check" className="step-icon-img"/>
                  <span className="step-label">STEP 1</span>
                </div>
                <h3 className="step-title">Contact Us</h3>
                <div className="step-content">
                  <span className="step-gold-line"></span>
                  <p className="step-desc">Call or complete our quick online form.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item">
                <div className="step-meta">
                  <img src="assets/steps.png" alt="Check" className="step-icon-img"/>
                  <span className="step-label">STEP 2</span>
                </div>
                <h3 className="step-title">Speak with an Attorney for Free</h3>
                <div className="step-content">
                  <span className="step-gold-line"></span>
                  <p className="step-desc">We will schedule a free bankruptcy evaluation or personal injury
                    consultation with one of our attorneys.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item">
                <div className="step-meta">
                  <img src="assets/steps.png" alt="Check" className="step-icon-img"/>
                  <span className="step-label">STEP 3</span>
                </div>
                <h3 className="step-title">Get Answers to Your Questions</h3>
                <div className="step-content">
                  <span className="step-gold-line"></span>
                  <p className="step-desc">We move quickly to stop creditor actions, file your case, or pursue
                    your injury claim. In our call we will outline your legal options so you can make
                    informed decisions.</p>
                </div>
              </div>
            </div>

            <div className="question-btn-wrapper">
              <a href="#" className="btn-free-consult-steps" data-open-consult="true">GET A FREE
                CONSULTATION</a>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section" id="client-section">
        <div className="client-header">
          <h2 className="client-section-title">
            What Our
            <div className="client-title-sub">
              <span className="client-title-line"></span>
              <span className="highlight-gold">Clients Say</span>
            </div>
          </h2>
        </div>

        {/* Seamless Review Marquee Wrapper */}
        <div className="client-marquee-wrapper">
          <div className="client-marquee-track">
            {/* Original Card List */}
            {/* Card 1: Text Review */}
            <div className="review-card text-card">
              <img src="assets/coma.png" alt="Quote" className="quote-icon"/>
              <p className="review-text">"Mr. Hightower and his exceptional staff, went above and beyond my
                expectations to help me resolve my issues. Mr. Hightower personally met with me and always
                made me feel that he believed in me and my case. I received the best possible results of my
                case and they fought for me to the end!"</p>
              <div className="review-footer">
                <span className="review-author">- TRICIA D.</span>
                <div className="review-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            {/* Card 2: Video Review */}
            <div className="review-card video-card" data-video-src="assets/client-v-1.mp4">
              <div className="video-thumbnail-container">
                <video src="assets/client-v-1.mp4" muted loop playsInline
                  className="card-video-element"></video>
                <div className="play-btn-overlay">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>

            {/* Card 3: Text Review */}
            <div className="review-card text-card">
              <img src="assets/coma.png" alt="Quote" className="quote-icon"/>
              <p className="review-text">"Their legal team is absolutely amazing! They walked me through every
                single step of my personal injury claim, answered all my questions, and made sure I received
                the maximum compensation. I highly recommend them to anyone."</p>
              <div className="review-footer">
                <span className="review-author">- SARAH M.</span>
                <div className="review-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            {/* Card 4: Video Review */}
            <div className="review-card video-card" data-video-src="assets/client-v-2.mp4">
              <div className="video-thumbnail-container">
                <video src="assets/client-v-2.mp4" muted loop playsInline
                  className="card-video-element"></video>
                <div className="play-btn-overlay">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>

            {/* Card 5: Text Review */}
            <div className="review-card text-card">
              <img src="assets/coma.png" alt="Quote" className="quote-icon"/>
              <p className="review-text">"Professional, compassionate, and extremely dedicated. From the first
                consultation to the final settlement, Daniel L. Hightower and his team showed incredible
                support and fought relentlessly for my rights. Thank you!"</p>
              <div className="review-footer">
                <span className="review-author">- JOHN K.</span>
                <div className="review-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            {/* Duplicated Card List for Seamless Loop */}
            {/* Card 1 Duplicate */}
            <div className="review-card text-card">
              <img src="assets/coma.png" alt="Quote" className="quote-icon"/>
              <p className="review-text">"Mr. Hightower and his exceptional staff, went above and beyond my
                expectations to help me resolve my issues. Mr. Hightower personally met with me and always
                made me feel that he believed in me and my case. I received the best possible results of my
                case and they fought for me to the end!"</p>
              <div className="review-footer">
                <span className="review-author">- TRICIA D.</span>
                <div className="review-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            {/* Card 2 Duplicate */}
            <div className="review-card video-card" data-video-src="assets/client-v-1.mp4">
              <div className="video-thumbnail-container">
                <video src="assets/client-v-1.mp4" muted loop playsInline
                  className="card-video-element"></video>
                <div className="play-btn-overlay">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>

            {/* Card 3 Duplicate */}
            <div className="review-card text-card">
              <img src="assets/coma.png" alt="Quote" className="quote-icon"/>
              <p className="review-text">"Their legal team is absolutely amazing! They walked me through every
                single step of my personal injury claim, answered all my questions, and made sure I received
                the maximum compensation. I highly recommend them to anyone."</p>
              <div className="review-footer">
                <span className="review-author">- SARAH M.</span>
                <div className="review-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            {/* Card 4 Duplicate */}
            <div className="review-card video-card" data-video-src="assets/client-v-2.mp4">
              <div className="video-thumbnail-container">
                <video src="assets/client-v-2.mp4" muted loop playsInline
                  className="card-video-element"></video>
                <div className="play-btn-overlay">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>

            {/* Card 5 Duplicate */}
            <div className="review-card text-card">
              <img src="assets/coma.png" alt="Quote" className="quote-icon"/>
              <p className="review-text">"Professional, compassionate, and extremely dedicated. From the first
                consultation to the final settlement, Daniel L. Hightower and his team showed incredible
                support and fought relentlessly for my rights. Thank you!"</p>
              <div className="review-footer">
                <span className="review-author">- JOHN K.</span>
                <div className="review-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Reviews CTA Button */}
        <div className="client-btn-wrapper">
          <a href="client-testimonials.html" className="btn-view-all-reviews">VIEW ALL REVIEWS</a>
        </div>
      </section>

      <section className="meet-section" id="meet-section">
        <div className="meet-container">
          {/* Left Column: Title, Daniel's Card, Quote */}
          <div className="meet-col meet-left-col">
            <div className="meet-title-block">
              <h2 className="meet-title">
                The Hightower
                <div className="meet-title-sub">
                  <span className="meet-title-line"></span>
                  <span className="highlight-gold">Standard</span>
                </div>
              </h2>
            </div>

            <div className="meet-card">
              <img src="assets/meet-left.png" alt="Daniel L. Hightower" className="meet-photo"/>
              <div className="meet-info-overlay">
                <span className="meet-role">FOUNDING PARTNER</span>
                <h3 className="meet-name">Daniel L. Hightower</h3>
                <a href="lawyers/daniel-l-hightower.html" className="btn-meet-partner">MEET DANIEL</a>
              </div>
            </div>

            <div className="meet-quote">
              <p className="quote-text"><span className="text-dim">“We take the cases we must win because it’s the
                right thing—the ones we have to win. </span>Even if it’s hard. Especially if it’s
                hard.<span className="text-dim">”</span></p>
            </div>
          </div>

          {/* Right Column: Alison's Card, Quote, Consultation Button */}
          <div className="meet-col meet-right-col">
            <div className="meet-card">
              <img src="assets/meet-right.png" alt="Alison L. Hightower" className="meet-photo"/>
              <div className="meet-info-overlay">
                <span className="meet-role">PARTNER</span>
                <h3 className="meet-name">Alison L. Hightower</h3>
                <a href="lawyers/alison-l-hightower.html" className="btn-meet-partner">MEET ALISON</a>
              </div>
            </div>

            <div className="meet-quote">
              <p className="quote-text">“People call me when something terrible has happened and they need help.
                It is personal to my clients, so it is personal to me. <span className="text-dim">We have to
                  win—no matter what.</span>”</p>
            </div>

            <div className="meet-action">
              <a href="#" className="btn-free-consult-meet" data-open-consult="true">GET A FREE
                CONSULTATION</a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section" id="form-section">
        <div className="form-section-container">
          <h2 className="form-section-title">Get Started Now!</h2>
          <p className="form-section-subtitle">Take The First Step, We Look Forward To Helping You.</p>

          <form className="get-started-form" action="#" method="POST">
            <div className="form-inputs-row">
              <div className="input-group">
                <input type="text" id="form-name" name="name" placeholder="Name" required/>
              </div>
              <div className="input-group">
                <input type="email" id="form-email" name="email" placeholder="Email Address" required/>
              </div>
              <div className="input-group">
                <input type="tel" id="form-phone" name="phone" placeholder="Phone Number" required/>
              </div>
            </div>
            <div className="form-textarea-group">
              <textarea id="form-comments" name="comments" placeholder="Comments" rows="5"
                required></textarea>
            </div>
            <div className="form-checkbox-group">
              <label className="checkbox-container">
                <input type="checkbox" id="form-consent" name="consent" required/>
                <span className="consent-text">By providing your phone number, you agree to receive text
                  messages from Hightower and Hightower. Message and data rates may apply. Message
                  frequency varies.</span>
              </label>
            </div>
            <div className="form-submit-wrapper">
              <button type="submit" className="btn-submit-form">REQUEST A FREE CASE REVIEW</button>
            </div>
          </form>
        </div>
      </section>


      <section className="news-articles-section" id="news-articles-section">
        <div className="news-container">
          <h2 className="news-section-title">News & Articles</h2>

          <div className="articles-grid">
            {latestBlogs.map((b) => (
              <div className="article-card" key={b.id}>
                <a href={`blog-detail.html?id=${b.id}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div className="article-image-wrapper">
                    <img src={b.image || 'assets/hh-blog1.jpg'} alt={b.title} className="article-img"/>
                  </div>
                  <div className="article-info">
                    <h3 className="article-title">{b.title}</h3>
                    <p className="article-desc">{blogExcerpt(b)}</p>
                    <span className="article-read-more">Read More</span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="news-btn-wrapper">
            <a href="blogs.html" className="btn-read-more-articles">READ MORE ARTICLES</a>
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
