import Footer from '@/components/Footer';

export const metadata = { title: 'Hightower & Hightower' };

export default function Page() {
  return (
    <main className="main-content">
      <style dangerouslySetInnerHTML={{
        __html: `
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

        /* Make navbar items black without changing other things */
        .top-header-bar .social-icons a,
        .top-header-bar .phone-link,
        .top-header-bar .phone-link i,
        .main-header .nav-link-item,
        .main-header .dropdown-arrow {
            color: #000000 !important;
        }

        .main-header .burger-bar {
            background-color: #000000 !important;
        }

        /* white logo -> black on this white-background page */
        .main-header .logo-img {
            filter: brightness(0) !important;
        }

        /* Testimonials Page styles */
        .testimonials-header {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
            z-index: 10;
        }

        .testimonials-header h1 {
            font-size: 64px;
            font-family: var(--family-editor), Georgia, serif;
            color: #1d3656;
            margin: 0 0 20px 0;
            font-weight: normal;
        }

        .testimonials-header p {
            font-size: 18px;
            color: #555;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            position: relative;
            z-index: 10;
        }

        .testimonials-section-view .review-card {
            width: 100% !important;
            height: 410px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
            border: 1px solid #eaeaea;
            box-sizing: border-box;
            background-color: var(--white);
        }

        .testimonials-section-view .video-card {
            background-color: #000;
            border: none;
        }

        @media (max-width: 1200px) {
            .testimonials-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .testimonials-header h1 {
                font-size: 44px;
            }

            .testimonials-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .testimonials-section-view .review-card {
                max-width: 420px;
                margin: 0 auto;
            }
        }

        /* Expanded card and read-more button styling */
        .testimonials-section-view .review-card.expanded {
            height: auto !important;
            min-height: 410px;
        }

        .testimonials-section-view .review-card.expanded .review-text {
            display: block !important;
            overflow: visible !important;
            line-clamp: none !important;
            -webkit-line-clamp: none !important;
            -webkit-box-orient: horizontal !important;
        }

        .read-more-btn {
            background: none;
            border: none;
            color: #B4975A;
            font-family: var(--family-sans);
            font-weight: 600;
            cursor: pointer;
            padding: 0;
            margin-top: 10px;
            text-align: left;
            font-size: 14px;
            transition: color 0.2s ease;
            position: relative;
            z-index: 15;
            display: inline-block;
        }

        .read-more-btn:hover {
            color: #1d3656;
            text-decoration: underline;
        }
      ` }} />
      <section className="lawyer-profile-hero-section">
        <div className="lawyer-profile-container">
          {/* SVG Watermark background */}
          <div className="lawyer-profile-bg-svg-wrapper">
            <img src="assets/hero-bg.svg" alt="H&H Background Logo" className="lawyer-profile-bg-svg" />
          </div>

          <div className="testimonials-section-view">
            <div className="testimonials-header">
              <h1>Client Testimonials</h1>
              <p>At Hightower & Hightower, we fight relentlessly for our clients. Read and watch their
                personal experiences working with our legal team.</p>
            </div>

            <div className="testimonials-grid">
              {/* Card 1: Text Review */}
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">"I did a lot of research before choosing Hightower & Hightower, spoke
                  to other attorneys in the field. The compliments to this firm were consistently
                  positive. My experience with every member of the team was stellar, the level of
                  professionalism ever constant.

                  Mr. Hightower welcomes you to the firm, which is the first indication to me that I
                  mattered. My attorney, Barbara, Richardson and legal assistant, Angela VanRyn guided me
                  through the process and were always open to my questions and concerns. Other staff
                  helped periodically and showed the same professionalism and welcoming attitude that
                  their colleagues provided.

                  To see my attorney and her assistance navigate the workers comp process was truly
                  inspiring. They were quick to educate me on the various facets that we faced. They were
                  calm and caring over the years as my case took their time. Just calm advocacy was ever
                  present, it prepared me well and reduced any fears I had. I feel very blessed to have
                  had them on my team. Mr. Hightower met with me to provide the finishing touches and my
                  settlement. It ended as as it began… With grace, respect and confidence."</p>
                <div className="review-footer">
                  <span className="review-author">- LAURA K.</span>
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
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“My husband was rear-ended by an underinsured motorist. This
                  collision seriously aggravated a previously existing condition, which subsequently
                  resulted in requiring a hip replacement operation. We consulted one local lawyer who
                  said we had no case. Fortunately an acquaintance who works at a medical practice in
                  Ocala sent us to Dan Hightower. Mr. Hightower assured us at our first meeting that we
                  had a strong case. He proved to be correct. After a year of unsuccessful back-and-forth
                  with the insurance company, Dan filed suit. This resulted in mediation and we ultimately
                  received a generous six figure award for pain and suffering as well as reduced ability
                  to function and enjoy life. Dan and his staff are thorough, detail oriented and
                  completely committed to success. They are also very personable and a pleasure to work
                  with. We highly recommend Daniel Hightower, his firm and his staff.”</p>
                <div className="review-footer">
                  <span className="review-author">- Pat M.</span>
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
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“If you’ve been in an accident. You need a lawyer. I was told to go
                  to Daniel Hightower. “He’s a fighter” they said. I am so glad I did. Professional,
                  organized, amazing staff and support, excellent advice and oversight. I was able to turn
                  my case over to capable hands and focus on healing. Thank You Allison Hightower, for the
                  caring and thorough way you handled my case. Thank you Angie, for your relentless
                  attention to detail. And thank you Daniel Hightower for fighting for me. I will pass on
                  the best advice I’ve gotten. Go see Daniel Hightower.”</p>
                <div className="review-footer">
                  <span className="review-author">- Johanna L.</span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“My husband and I were in a head on collision. Being fairly new to
                  Ocala, we were not sure of the insurance here or the process to receive reimbursement of
                  our expenses. Meeting Mr. Hightower was the best person we could have found. We were
                  both in pain and overwhelmed with what to do next. Mr. Hightower is very knowledgeable
                  and through going over the details, making us feel very comfortable. He saw me through
                  my recovery and settlement. We are very pleased with him and his office staff. Our
                  contact with his legal assistant (Jennifer), who was always available for telephone
                  calls or returned them promptly. They were always caring and went above our
                  expectations. I would highly recommend Mr. Hightower for any injury claims.”</p>
                <div className="review-footer">
                  <span className="review-author">- Margaret H.
                  </span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“Mr. Hightower and his exceptional staff, went above and beyond my
                  expectations to help me resolve my issues. Mr. Hightower personally met with me and
                  always made me feel that he believed in me and my case. I received the best possible
                  results of my case and they fought for me to the end! I will always be grateful for all
                  their hard work they did representing Me! Thank you so much, Mr Hightower!”</p>
                <div className="review-footer">
                  <span className="review-author">- Tricia D.</span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“Mr. Hightower, Alison & team have been amazing at helping my parents
                  through a very difficult time in our lives after my dad was involved in a horrible car
                  accident! They made sure to keep my parents informed through every step of the case and
                  offer convenient Spanish translation services in their office. We are so grateful for
                  the compassion and understanding we felt from Mr. Hightower and his team, Thank you!”
                </p>
                <div className="review-footer">
                  <span className="review-author">- Millie B.</span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“Absolutely the best! I cannot express how much I value Mr. Hightower
                  and Candy Homan! They are a rarity in this world because I have found them both to be
                  completely honest and caring.”</p>
                <div className="review-footer">
                  <span className="review-author">- Ana S.</span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“On my initial visit with Mr. Hightower, he, along with Mrs.
                  Matthews, explained everything to me. They took the time to go over every piece of
                  paper, took pictures, and answered every question I asked. They didn’t make me feel
                  stupid or unwanted. They are both great! Mr. Hightower was true to his word. He knows
                  exactly what he’s talking about. I was constantly updated on everything that was going
                  on. Everything that he said would happen – happened! I tell everyone that I know about
                  his practice! He truly cares about his clients.”</p>
                <div className="review-footer">
                  <span className="review-author">- Cathy D.</span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“From beginning to end Mr. Hightower and his staff were always
                  available. Mr. Hightower and his staff worked all the way up to the end for my
                  settlement. I will be using them for my attorney needs in the future.”</p>
                <div className="review-footer">
                  <span className="review-author">- LuAnn F.</span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="review-card text-card">
                <img src="assets/coma.png" alt="Quote" className="quote-icon" />
                <p className="review-text">“The law firm is excellent. I am satisfied because thanks to them,
                  the benefits are being fulfilled.”</p>
                <div className="review-footer">
                  <span className="review-author">- Eliot V.</span>
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
