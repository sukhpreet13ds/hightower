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

      <section className="lawyer-profile-hero-section">
        <div className="lawyer-profile-container">
          {/* SVG Watermark background */}
          <div className="lawyer-profile-bg-svg-wrapper">
            <img src="../assets/hero-bg.svg" alt="H&H Background Logo" className="lawyer-profile-bg-svg" />
          </div>

          <div className="lawyer-profile-flex">
            {/* Left Side: Portrait Image */}
            <div className="lawyer-profile-image-col">
              <img src="../assets/Mark.N.jpg" alt="Mark N. Tipton" className="lawyer-profile-img" />
            </div>

            {/* Right Side: Biography and Title */}
            <div className="lawyer-profile-content-col">
              <div className="lawyer-profile-title-area">
                <h1 className="lawyer-profile-title-main">Mark N.</h1>
                <div className="lawyer-profile-title-sub-wrapper">
                  <span className="lawyer-profile-title-line"></span>
                  <h2 className="lawyer-profile-title-sub">Tipton</h2>
                </div>
              </div>
              <div className="lawyer-profile-bio-text">
                <p>Mark N. Tipton received a Bachelor’s degree from Weber State College in 1988. While
                  attending Weber State College, he had the privilege of being selected for an internship
                  with the Utah Legal Services Corporation, where he represented clients in <a href="#"
                    style={{ color: '#C2905B', textDecoration: 'none', fontStyle: 'italic' }}>social security
                    disability</a> and other public entitlement cases. Thereafter he attended the
                  University of Florida College of Law where he received his law degree in 1991. He was
                  admitted to the Florida Bar in 1991 and has been a practicing attorney in the
                  Ocala/Gainesville area since that time.</p>
                <p>He has limited his practice almost exclusively to workers’ compensation and social
                  security disability cases since being admitted to the Bar. Mark Tipton received Board
                  Certification in workers’ compensation in 1998, based upon his experience litigating
                  Workers’ Compensation cases and his knowledge of the law. Board Certification is the
                  highest level of recognition of the competence and experience of attorneys by the
                  Florida Bar. Mark holds an AV® Preeminent™ rating from Martindale-Hubbell Peer Review.
                </p>
                <p>In addition to workers’ compensation, a significant portion of his practice is devoted to
                  representing clients in social security disability cases. His experience with the Legal
                  Services Corporation exposed him to many abuses that occur in the Social Security System
                  and the seemingly needless barriers which people have to overcome to receive social
                  security benefits. As a result, he is committed to ensuring that people who meet the
                  social security disability standard receive proper representation and a fair opportunity
                  to establish their entitlement to the disability insurance benefits.</p>

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
