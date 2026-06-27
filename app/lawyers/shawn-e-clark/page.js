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
              <img src="../assets/Shawn-E.jpg" alt="Shawn E. Clark" className="lawyer-profile-img" />
            </div>

            {/* Right Side: Biography and Title */}
            <div className="lawyer-profile-content-col">
              <div className="lawyer-profile-title-area">
                <h1 className="lawyer-profile-title-main">Shawn E.</h1>
                <div className="lawyer-profile-title-sub-wrapper">
                  <span className="lawyer-profile-title-line"></span>
                  <h2 className="lawyer-profile-title-sub">Clark</h2>
                </div>
              </div>
              <div className="lawyer-profile-bio-text">
                <p>Shawn Clark graduated from the University of Florida in Gainesville with a Bachelor’s
                  degree in 2007. He furthered his education at the University of Florida Levin College of
                  Law, earning his Juris Doctor degree in 2011. His academic excellence was recognized
                  when he was inducted into the prestigious Order of the Coif, a national honor society
                  for law graduates ranking in the top 10% of their class.</p>
                <p>Shawn began his legal career as an associate attorney at an employment law firm in
                  Jacksonville Beach, where he honed his skills in litigation strategy and complex legal
                  research.</p>
                <p>In 2013, he returned to Gainesville and transitioned his practice to criminal defense.
                  Over the years, Shawn has personally represented thousands of clients facing criminal
                  charges, guiding them through every stage of the legal process—from arrest to trial. His
                  dedication to client advocacy earned him the role of supervisor for the Levy and
                  Gilchrist offices within his firm.</p>
                <p>Shawn is admitted to practice in the State of Florida. He actively contributes to the
                  legal community as the current Treasurer of the Marion County Bar Association, as a
                  voting member of the Eighth Judicial Circuit Bar Grievance Committee, and as a pro bono
                  attorney providing free legal services with Community Legal Services of Mid-FL. He is
                  also affiliated with several professional organizations, including the Florida Justice
                  Association, the National Institute for Trial Advocacy, and the Florida Association of
                  Criminal Defense Lawyers.
                </p>
                <p>Beyond his professional achievements, Shawn values family and community involvement. He
                  enjoys spending time with his wife, Catherine, their two dogs, and their cat. Since
                  2022, he has proudly served as a mentor in the Big Brothers Big Sisters program.
                </p>
                <p>Shawn currently practices in the area of <a href="daniel-l-hightower.html"
                  className="inline-partner-link">Personal Injury</a>, leveraging his extensive
                  experience to provide compassionate and effective representation for his clients.</p>
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
