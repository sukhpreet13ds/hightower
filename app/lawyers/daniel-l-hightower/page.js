import Footer from '@/components/Footer';
import { getSectionContent } from '@/lib/content';
export const metadata = {
  title: 'Daniel L. Hightower - Hightower & Hightower, P.A.',
  description: 'Learn about Daniel L. Hightower, the founding attorney of the Law Office of Daniel L. Hightower, P.A., and his dedication to serving clients in personal injury and workers compensation law.',
};
export default async function Page() {
  const c = await getSectionContent('lawyer-daniel');
  return (
    <main className="main-content">
      <style dangerouslySetInnerHTML={{
        __html: `

         .top-bar-center-link{
            color: #000000 !important;
          }
        .top-bar-center-link:hover {
            color: #c2905b !important;
          }
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
      ` }} />

      <section className="lawyer-profile-hero-section">
        <div className="lawyer-profile-container">
          {/* SVG Watermark background */}
          <div className="lawyer-profile-bg-svg-wrapper">
            <img src="../assets/hero-bg.svg" alt="H&H Background Logo" className="lawyer-profile-bg-svg" />
          </div>

          <div className="lawyer-profile-flex">
            {/* Left Side: Portrait Image */}
            <div className="lawyer-profile-image-col">
              <img src="../assets/lawyer-profile1.png" alt="Daniel L. Hightower" className="lawyer-profile-img" />
            </div>

            {/* Right Side: Biography and Title */}
            <div className="lawyer-profile-content-col">
              <div className="lawyer-profile-title-area">
                <h1 className="lawyer-profile-title-main">{c.title_main}</h1>
                <div className="lawyer-profile-title-sub-wrapper">
                  <span className="lawyer-profile-title-line"></span>
                  <h2 className="lawyer-profile-title-sub">{c.title_sub}</h2>
                </div>
              </div>
              <div className="lawyer-profile-bio-text">
                <p>{c.bio_p1}</p>
                <p>{c.bio_p2_before}<a href="/areas-of-practice/personal-injury-law"
                    className="inline-partner-link">Personal Injury</a>{c.bio_p2_after}</p>
                <p>{c.bio_p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lawyer-timeline-section">
        <div className="timeline-outer-container">
          <div className="timeline-scroll-container">
            <div className="timeline-inner-wrapper">
              {/* Original Track */}
              <div className="timeline-track">
                {/* 1982 */}
                <div className="timeline-item below">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">1982</div>
                    <div className="timeline-card">
                      Served as Chairman of the Fifth Judicial Circuit Grievance Committee of The
                      Florida Bar
                    </div>
                  </div>
                </div>
                {/* 1984 */}
                <div className="timeline-item above">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">1984</div>
                    <div className="timeline-card">
                      Elected President of the Marion County Bar Association
                    </div>
                  </div>
                </div>
                {/* 1988 */}
                <div className="timeline-item below">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">1988</div>
                    <div className="timeline-card">
                      Appointed by Governor Bob Martinez to the Fifth Judicial Circuit Judicial
                      Nominating Commission
                    </div>
                  </div>
                </div>
                {/* 2006 */}
                <div className="timeline-item above too-above">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2006</div>
                    <div className="timeline-card">
                      Awarded the Rick Custereri Pro Bono Award for providing free legal services to
                      those in need by The Marion County Bar Association
                    </div>
                  </div>
                </div>
                {/* 2011 */}
                <div className="timeline-item below">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2011</div>
                    <div className="timeline-card">
                      Awarded the Florida Bar President's Pro Bono Service Award
                    </div>
                  </div>
                </div>
                {/* 2015 */}
                <div className="timeline-item above too-above">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2012</div>
                    <div className="timeline-card">
                      Inducted into the Charter Class of the Florida Workers’ Compensation Institute
                      Hall of Fame
                    </div>
                  </div>
                </div>
                {/* 2018 */}
                <div className="timeline-item below">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2017</div>
                    <div className="timeline-card">
                      Received the Pro Bono Attorney of the Year Award from Community Legal Services
                      of Mid-Florida
                    </div>
                  </div>
                </div>
                {/* 2023 */}
                <div className="timeline-item above">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2020</div>
                    <div className="timeline-card">
                      Voted Best Attorney in the Ocala Magazine Survey
                    </div>
                  </div>
                </div>
                <div className="timeline-item below">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2023</div>
                    <div className="timeline-card">
                      Honored by Mayor Guinn and the City of Ocala for an outstanding 50 years of
                      service as an attorney in the community
                    </div>
                  </div>
                </div>
                <div className="timeline-item above">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2024</div>
                    <div className="timeline-card">
                      Voted Ocala Magazine’s “Better Than The Best” Local Attorney (Any
                      Practice/Specialty)
                    </div>
                  </div>
                </div>
                <div className="timeline-item below">
                  <div className="timeline-node"></div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-box-wrapper">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-card">
                      Voted Ocala Magazine’s “Better Than The Best” Injury Attorney, while Hightower &
                      Hightower, P.A. was voted Ocala Magazine’s “Better Than The Best” Local Attorney
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyer Ranch Section */}
      <section className="lawyer-ranch-section">
        <div className="lawyer-ranch-container">
          <div className="ranch-row">
            <div className="ranch-image-col">
              <img src="../assets/lawyer-profile-bw.jpg" alt="Daniel L. Hightower on a horse"
                className="ranch-img" />
            </div>
            <div className="ranch-content-col">
              <p className="ranch-text">
                {c.ranch_text} <i
                  style={{ color: '#0000007c' }}>"{c.ranch_quote}"</i>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyer Award Showcase Section */}
      <section className="lawyer-award-showcase-section">
        <div className="lawyer-award-showcase-container">
          <div className="award-showcase-image-wrapper">
            <img src="../assets/lawyer-profile-bottom.jpg"
              alt="Daniel L. Hightower receiving Florida Bar Pro Bono Award" className="award-showcase-img" />
          </div>
          <p className="award-showcase-caption">
            {c.award_caption}
          </p>
        </div>
      </section>

      {/* H&H Honors & Awards Section */}
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
      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="cta-container">
          <h2 className="cta-text">{c.cta_text}</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
