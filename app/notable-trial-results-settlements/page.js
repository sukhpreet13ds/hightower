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

      <section className="notable-services-hero">
        <div className="community-hero-container">
          <div className="community-hero-left">
            <h1 className="community-hero-title">Notable Trial Results & Settlements</h1>
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

      <section className="notable-section-cards">
        <div className="notable-container">
          {/* Intro text & SVG Watermark Row */}
          <div className="notable-header-row">
            <div className="notable-intro-wrapper">
              <p className="notable-intro-text">
                If you or a family member is involved in a serious motor vehicle collision or a serious work
                accident and sustain moderate, severe or catastrophic injuries, please call our office for a
                free consultation with us to discuss the case and your legal remedies. Notwithstanding the
                case results below, each case is different and the recovery that an individual makes depends
                in large part on the facts of the case, the seriousness of the injuries, the law applicable
                to the case and the insurance coverages available.
              </p>
            </div>
            <div className="notable-svg-wrapper">
              <img src="./assets/hero-bg.svg" alt="H&H Logo" className="notable-header-svg" />
            </div>
          </div>

          {/* Card 1 */}
          <div className="notable-card">
            <h3 className="notable-card-title" id="million-navigate">1) $9.6 MILLION VERDICT AWARDED TO INJURED
              MOTORCYCLIST</h3>
            <p className="notable-card-paragraph">
              Joe S. was riding his motorcycle at a lawful rate of speed south bound on North Citrus Avenue in
              Crystal River, Florida and had the right of way. A north bound sport utility vehicle turned left
              in front of Joe S. violating his right of way. Joe S. and his motorcycle slammed into the
              passenger side of the sport utility vehicle and he sustained severe facial lacerations and
              multiple fractures to his left arm and pelvis. First Responders called for Joe S. to be
              transported by Life Flight helicopter immediately to Ocala Regional Medical Center’s Level Two
              Trauma Center. Doctors and staff there saved Joe S.’s life and performed multiple surgeries on
              his face, left arm and pelvis. After seven weeks in ORMC, Joe S. was discharged home into the
              care of family members. His serious and permanent injuries have had a profoundly adverse effect
              on his quality of life.
            </p>
            <p className="notable-card-paragraph">
              Ocala personal injury and motorcycle accident lawyer, Dan Hightower, filed a negligence lawsuit
              on behalf of his client, Joe S. in Citrus County, Florida. Mr. Hightower and Mr. Guiley tried
              the case in Citrus County Circuit Court. After the conclusion of the trial, a verdict was
              rendered by the Court in favor of Joe S. and against the Defendant SUV driver
              for <strong>$9,661,232.98</strong>.
            </p>
            <p className="notable-card-paragraph notable-quote">
              When asked for comment on the verdict, Mr. Hightower simply said two things: 1) “Justice was
              served” and 2) “Watch out for motorcycles.”
            </p>
          </div>

          {/* Card 2 */}
          <div className="notable-card">
            <h3 className="notable-card-title">2) $1.26 MILLION LUMP SUM SETTLEMENT FOR MOTOR VEHICLE CRASH VICTIM
            </h3>
            <p className="notable-card-paragraph">
              Mr. G., age 54, was a seat-belted passenger in his friend’s car, proceeding along the road at a
              safe speed with the right of way. An oncoming, big truck and trailer made an illegal left turn
              in front of their car resulting in an unavoidable crash that disabled both vehicles. Mr. G.
              sustained multiple fractures to his pelvis, right hip and leg in the crash that required several
              surgeries to repair.
            </p>
            <p className="notable-card-paragraph">
              Mr. Hightower took Mr. G.’s case and after the active medical treatment was over, he demanded
              the combined insurance policy limits of $1.26 million from the insurance company for the
              careless truck driver and owner to settle Mr. G.’s case. The insurance company made several
              unreasonably low settlement offers, some little more than Mr. G.’s past medical expenses.
            </p>
            <p className="notable-card-paragraph">
              Mr. Hightower, however, summarily rejected those unreasonably low settlement offers time and
              time again. He persisted in negotiations for several months demanding all of the insurance
              company’s combined policy limits of $1.26 million to settle the case. Ultimately, Mr. Hightower
              had to give the insurance company a deadline to accept and pay the $1.26 million and told them
              if the deadline expired with no acceptance and payment of the $1.26 million, he would file suit
              and try the case to Jury Verdict and Final Judgment.
            </p>
            <p className="notable-card-paragraph">
              The insurance company apparently assessed their risks and Mr. Hightower’s determination . . .
              and finally agreed to pay the entire combined insurance policy limits of $1.26 million to settle
              the case.
            </p>
            <p className="notable-card-paragraph notable-quote">
              <strong>When asked for comment on the final settlement, Mr. Hightower said, “When I believe in a
                client and their case, I will continue negotiating, if necessary, litigating until I get my
                innocent, injured client a just result.”</strong>
            </p>
          </div>
          {/* card 3 */}
          <div className="notable-card">
            <h3 className="notable-card-title">3) $2 MILLION LUMP SUM SETTLEMENT FOR INJURED WORKER
            </h3>
            <p className="notable-card-paragraph">
              Mark A. showed up for work like any other day. But on this day, as he was trimming tree
              branches, his ladder broke causing him to fall and hit his head on a paved road. Mark A. was
              taken by ambulance to a local hospital where he was diagnosed with multiple fractures, internal
              organ damage and a serious head injury. He was transferred the same day to another hospital
              better equipped to treat his severe injuries. After spending six months in the hospital and
              undergoing multiple surgeries, Mark A. was discharged home into the care of family members. He
              is 100% disabled from employment and requires future medical treatment for his work injuries.
            </p>
            <p className="notable-card-paragraph">
              Mark A.’s workers’ compensation claim was DENIED by the insurance company shortly after his
              accident. Ocala Workers’ Compensation Attorney, Dan Hightower, and his Associate Attorney,
              Barbara Richard, filed numerous claims on Mark A.’s behalf seeking compensability of his case
              together with medical treatment and disability benefits. The Hightower firm was able to overcome
              the workers’ compensation insurance company’s defenses and negotiated a $2,013,165.00 lump sum
              settlement for Mark A., and subsequently negotiated a significant reduction in his outstanding
              hospital bills.
            </p>
            <p className="notable-card-paragraph notable-quote">
              <strong>When asked for comment on the settlement, Mr. Hightower said, “Everyone in America has
                legal rights, but sometimes it takes good, aggressive lawyers to enforce those
                rights.”</strong>
            </p>
          </div>
          {/* card 4 */}
          <div className="notable-card">
            <h3 className="notable-card-title">4) $1.5 MILLION LUMP SUM SETTLEMENT FOR INJURED WORKER
            </h3>
            <p className="notable-card-paragraph">
              Michele C. was working as an occupational therapist in a local medical center. While helping a
              patient, she was grabbed aggressively by the patient and her dominant right hand/wrist was
              seriously injured requiring surgery. Following her two surgeries, she was diagnosed with
              Regional Pain Syndrome of her right arm and hand, which required aggressive pain management
              treatment, and resulted in severe dysfunction and permanent impairment. The pain syndrome spread
              to other parts of her body, leaving her significantly restricted and in need of daily attendant
              care. The gradual worsening of her severe chronic pain condition, with frequent pain flareups
              resulted in the need for life long costly medical care. Michele C.’s disabling pain condition
              also resulted in her being determined permanently and totally disabled and entitled by Florida
              Law to receive periodic permanent total disability benefits. Unfortunately, this permanent
              injury/syndrome left her no hope that she will ever be able to return to gainful employment
              again.
            </p>

            <p className="notable-card-paragraph notable-quote">
              <strong>After years of filing claims on Michele C.’s behalf, Ocala workers’ compensation
                attorney, Dan Hightower, and his associate attorney, Barbara Richard, were able to negotiate
                an overall settlement of $1.5 million for Michele C.</strong>
            </p>
          </div>
          {/* card 5 */}
          <div className="notable-card">
            <h3 className="notable-card-title">5) $825,218.77 LUMP SUM SETTLEMENT FOR INJURED WORKER
            </h3>
            <p className="notable-card-paragraph">
              Mr. Hightower helped one of his clients, a 40-year-old man who was seriously and permanently
              injured in a work accident, recover a lump sum settlement of $825,218.77 from the Workers’
              Compensation insurance company.
            </p>
          </div>
          {/* card 6 */}
          <div className="notable-card">
            <h3 className="notable-card-title">6) $750,000.00 SETTLEMENT FOR MOTOR VEHICLE CRASH VICTIM
            </h3>
            <p className="notable-card-paragraph">
              Mr. Hightower negotiated a $750,000.00 settlement for his client, an 86-year-old woman, who was
              very seriously and permanently injured in a rear-end collision caused by the carelessness of the
              driver of a commercial truck.
            </p>
          </div>
          {/* Center Image */}
          {/* <div className="notable-middle-image-wrapper">
                    <img src="assets/Notable-below.jpg" alt="Hightower & Hightower Lawyers Team"
                        className="notable-middle-image">
                </div> */}

          {/* Card 3 */}
          <div className="notable-card">
            <h3 className="notable-card-title">7) $520,000.00 VERDICT FOR MOTOR VEHICLE CRASH VICTIM</h3>
            <p className="notable-card-paragraph">
              Mr. Hightower assisted by his associate, Mr. Guiley, tried a case before a Marion County,
              Florida jury and helped his client, a 42 year old woman, recover a jury verdict of $520,000.00.
              Mr. Hightower’s client had been seriously and permanently injured in a rear end collision caused
              by the carelessness of the driver of a commercial van. The insurance company’s last settlement
              offer before trial was $58,000.00.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">8) $751,000.00 VERDICT FOR MOTOR VEHICLE CRASH VICTIM</h3>
            <p className="notable-card-paragraph">
              Mr. Hightower assisted by his associate, Mr. Guiley, tried a case before a Marion County,
              Florida jury and helped his client, a 59 year old man, recover a jury verdict of $751,000.00.
              Mr. Hightower’s client had been seriously and permanently injured in a front end/side impact
              collision caused by the carelessness of the driver of a passenger car. The insurance company’s
              last settlement offer before trial was $50,000.00.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">9) $2.1 MILLION TRAUMATIC BRAIN INJURY
            </h3>
            <p className="notable-card-paragraph">
              Mr. R.’s vehicle was hit on the driver’s side door by a commercial truck causing a terrible
              crash. Mr. R. sustained permanent brain, neck, and shoulder injuries.


            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">10) $5.75 MILLION SETTLEMENT FOR MOTORCYCLE CRASH VICTIM
            </h3>
            <p className="notable-card-paragraph">
              Our client was enjoying a motorcycle ride and was hit by a heavy pickup truck. Our client
              sustained a permanent traumatic brain injury and other serious and permanent injuries requiring
              multiple surgeries. His and his wife’s lives were forever altered through no fault of their own.


            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">11) $700,000.00 LUMP SUM SETTLEMENT FOR MOTOR VEHICLE CRASH VICTIM
            </h3>
            <p className="notable-card-paragraph">
              J.R. was rear-ended by a tractor-trailer going 35mph and required neck surgery from his crash
              related injury. The initial offer from the insurance company was $10,000.00.


            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">12) $600,840.00 WORKERS’ COMPENSATION LUMP SUM SETTLEMENT
            </h3>
            <p className="notable-card-paragraph">
              A diesel mechanic injured their neck while torquing a cylinder head for over 45 minutes.


            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">13) $773,732.24 WORKERS’ COMPENSATION LUMP SUM SETTLEMENT
            </h3>
            <p className="notable-card-paragraph">
              A truck driver on I-75 was cut off by an SUV, shattered their right leg, right ankle, right
              arm/wrist, and fractured pelvis.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">14) $829,500.00 SETTLEMENT BEFORE TRIAL
            </h3>
            <p className="notable-card-paragraph">
              A reckless driver attempted a u-turn and veered into our client’s lane. Our client had permanent
              injuries to her neck and back.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">15) $2,013,165.00 LUMP SUM SETTLEMENT FOR A WORK ACCIDENT

            </h3>
            <p className="notable-card-paragraph">
              A 50 year old worker was injured when the ladder he was on broke and he fell to the ground.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">16) $1.3 MILLION SETTLEMENT OF POLICY LIMITS FOR MOTOR VEHICLE CRASH
              VICTIMS

            </h3>
            <p className="notable-card-paragraph">
              A mother was driving her vehicle with her minor child as a passenger and was hit by a truck that
              ran a stop sign. The minor child sustained serious and permanent, painful and limiting injuries
              to her head, neck, and ribs and required a lengthy hospitalization.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">17) $750,000.00 MOTOR VEHICLE CRASH VICTIM

            </h3>
            <p className="notable-card-paragraph">
              The client was hit head-on and had a TBI, multiple injections, and aggravation of a previous
              back injury.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">18) $650,000.00 SETTLEMENT FOR MOTOR VEHICLE CRASH VICTIM

            </h3>
            <p className="notable-card-paragraph">
              The driver of a commercial vehicle caused a multiple car crash and injured our client who
              subsequently needed two shoulder surgeries.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">19) $740,000.00 SETTLEMENT FOR A PREMISE LIABILITY VICTIM

            </h3>
            <p className="notable-card-paragraph">
              A minor child was run over by a car in a park and sustained a fractured pelvis and PTSD.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">20) $2.5 MILLION SETTLEMENT FOR A CAR CRASH VICTIM
            </h3>
            <p className="notable-card-paragraph">
              A two vehicle crash on the interstate resulted in our client’s severe, permanent injuries to
              multiple body parts.
            </p>
          </div>
          <div className="notable-card">
            <h3 className="notable-card-title">21) $700,000.00 SETTLEMENT FOR CAR CRASH VICTIM


            </h3>
            <p className="notable-card-paragraph">
              A loaded tractor trailer rear-ended my client resulting in him having neck surgery and right
              shoulder surgery.
            </p>
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
