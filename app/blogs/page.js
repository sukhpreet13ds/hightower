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
      ` }} />

      {/* Videos Showcase Section */}
      <section className="videos-showcase-section">
        <div className="videos-container">
          {/* SVG Watermark background */}
          <div className="videos-bg-svg-wrapper">
            <img src="./assets/hero-bg.svg" alt="H&H Background Logo" className="videos-bg-svg" />
          </div>

          <div className="videos-title-area">
            <h1 className="videos-title-main">News &</h1>
            <div className="videos-title-sub-wrapper">
              <span className="videos-title-line"></span>
              <h2 className="videos-title-sub">Articles</h2>
            </div>
          </div>
          <section className="blogs-grid-section">
            <div className="blogs-container-grid">
              <div className="blogs-grid">
                {/* Card 1 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog1.jpg" alt="What Evidence Strengthens Your Injury Case?" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">What Evidence Strengthens Your Injury Case?</h3>
                    <p className="blog-card-excerpt">To strengthen a personal injury case, you need
                      objective proof that establishes who is at fault for...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 2 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog2.png" alt="When Should You Hire a Personal Injury Lawyer?" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">When Should You Hire a Personal Injury Lawyer?</h3>
                    <p className="blog-card-excerpt">If you've recently been in an accident, are still in
                      pain, and believe someone else is to blame...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 3 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog3.jpg" alt="Understanding Pain and Suffering in Injury Claims" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">Understanding Pain and Suffering in Injury Claims</h3>
                    <p className="blog-card-excerpt">Pain and suffering are part of life, but after an
                      accident, they can become part of a much bigger...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 4 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog4.jpg" alt="How Long Do Personal Injury Cases Typically Take?" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">How Long Do Personal Injury Cases Typically Take?</h3>
                    <p className="blog-card-excerpt">On average, a personal injury case takes 6 to 18 months
                      to resolve, but some cases can take several...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 5 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog5.jpeg" alt="When a Car Accident Becomes a Wrongful Death Case" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">When a Car Accident Becomes a Wrongful Death Case</h3>
                    <p className="blog-card-excerpt">Losing a loved one in a fatal car accident is extremely
                      devastating. When that car accident is the result of...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 6 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog6.jpeg" alt="What Qualifies as a Catastrophic Injury in a Lawsuit?" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">What Qualifies as a Catastrophic Injury in a Lawsuit?
                    </h3>
                    <p className="blog-card-excerpt">We rarely get a warning before life changes forever.
                      One moment, you're driving home from work and the...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 7 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog7.webp" alt="Workers' Compensation in Florida" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">Workers' Compensation in Florida</h3>
                    <p className="blog-card-excerpt">No one clocks in expecting to leave work with an
                      injury, but it happens, and thousands of employees file for workers'
                      compensation each year...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 8 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog8.jpg" alt="Under The Radar" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">Under The Radar</h3>
                    <p className="blog-card-excerpt">By Daniel L. Hightower For forty plus years, when
                      someone finds out I'm a lawyer and asks for my card, I give them one and always
                      say "I hope you...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>

                {/* Card 9 */}
                <a href="blog-detail.html" className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src="./assets/hh-blog9.jpg" alt="What To Do If You've Been In a Motorcycle Accident" className="blog-card-img" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">What To Do If You've Been In a Motorcycle Accident</h3>
                    <p className="blog-card-excerpt">Florida's warm weather and scenic roads make it
                      enjoyable for motorcyclists, as we see many of them...</p>
                    <span className="blog-card-link">Read More</span>
                  </div>
                </a>
              </div>

              <div className="blogs-load-more-container">
                <button className="blogs-load-more-btn">READ MORE ARTICLES</button>
              </div>
            </div>
          </section>
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
                <img src="./assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              {/* Clones for seamless mobile marquee */}
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
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
