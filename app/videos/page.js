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
            <img src="./assets/hero-bg.svg" alt="H&H Background Logo" className="videos-bg-svg"/>
          </div>

          <div className="videos-title-area">
            <h1 className="videos-title-main">Watch Our</h1>
            <div className="videos-title-sub-wrapper">
              <span className="videos-title-line"></span>
              <h2 className="videos-title-sub">Videos</h2>
            </div>
          </div>

          {/* Featured Video Wrapper */}
          <div className="featured-video-wrapper">
            <video controls className="featured-video-player">
              <source src="assets/Spot-3-Alison-Final.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Grid */}
          <div className="videos-grid">
            {/* Vimeo Video 1 */}
            <div className="video-grid-item">
              <iframe title="vimeo-player" src="https://player.vimeo.com/video/698170793?h=103f21508c"
                frameBorder="0" referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen></iframe>
            </div>
            {/* Vimeo Video 2 */}
            <div className="video-grid-item">
              <iframe title="vimeo-player" src="https://player.vimeo.com/video/698169678?h=82daf1ea63"
                frameBorder="0" referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen></iframe>
            </div>
            {/* Local Video 1 */}
            <div className="video-grid-item">
              <video controls className="grid-video-player">
                <source src="assets/Spot-1-Alison-Final.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Local Video 2 */}
            <div className="video-grid-item">
              <video controls className="grid-video-player">
                <source src="assets/Spot-2-Alison-Final.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
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
                <img src="./assets/award1.png" alt="The National Trial Lawyers Top 100"/>
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award2.png" alt="AV Preeminent Rated"/>
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award3.png" alt="Martindale-Hubbell Client Champion Gold"/>
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award4.webp" alt="Florida Bar Certified Civil Trial"/>
              </div>
              <div className="honor-logo-item">
                <img src="./assets/award5.png" alt="Florida Bar Certified Workers Compensation"/>
              </div>
              {/* Clones for seamless mobile marquee */}
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award1.png" alt="The National Trial Lawyers Top 100"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award2.png" alt="AV Preeminent Rated"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award3.png" alt="Martindale-Hubbell Client Champion Gold"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award4.webp" alt="Florida Bar Certified Civil Trial"/>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="./assets/award5.png" alt="Florida Bar Certified Workers Compensation"/>
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
