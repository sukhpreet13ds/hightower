import Footer from '@/components/Footer';
import { getSectionContent } from '@/lib/content';

export const metadata = {
  title: 'Privacy Policy - Hightower & Hightower, P.A.',
  description: 'Read the privacy policy of the Law Office of Daniel L. Hightower, P.A. Learn how we collect, use, and protect your personal information.',
};

function renderParagraphs(text) {
  return String(text || '').split('\n\n').map((para, i) => (
    <p key={i}>{para}</p>
  ));
}

export default async function Page() {
  const c = await getSectionContent('privacy-policy');
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

        /* Scoped Privacy Policy Page Styles */
        .privacy-hh-section {
            padding-top: 140px;
            background-color: #fcfcfc;
            color: #444;
            font-family: 'Outfit', sans-serif;
        }

        .privacy-hero {
            background: linear-gradient(135deg, #f4f6f9 0%, #e9ecef 100%);
            padding: 80px 20px 60px 20px;
            text-align: center;
            border-bottom: 1px solid #e2e8f0;
        }

        .privacy-hero h1 {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 48px;
            color: #0f1c2d;
            margin: 0 0 10px 0;
            font-weight: 700;
        }

        .privacy-hero p {
            font-size: 16px;
            color: #666;
            margin: 0;
        }

        .privacy-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        .privacy-intro-box {
            background-color: #fff;
            border-radius: 12px;
            padding: 35px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
            margin-bottom: 40px;
            border-left: 5px solid var(--button);
        }

        .privacy-intro-box p {
            font-size: 18px;
            line-height: 1.8;
            margin: 0 0 20px 0;
            color: #333;
        }

        .privacy-intro-box p:last-child {
            margin-bottom: 0;
        }

        .contact-info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 25px;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
        }

        .contact-info-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 16px;
            color: #333;
        }

        .contact-info-item i {
            color: var(--button);
            font-size: 18px;
            width: 20px;
            text-align: center;
        }

        .contact-info-item a {
            color: #1D3656;
            text-decoration: none;
            font-weight: 600;
        }

        .contact-info-item a:hover {
            text-decoration: underline;
        }

        .privacy-section {
            background-color: #fff;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
            margin-bottom: 30px;
        }

        .privacy-section h2 {
            font-family: var(--family-editor), Georgia, serif;
            font-size: 24px;
            color: #0f1c2d;
            margin: 0 0 20px 0;
            border-bottom: 2px solid #f4f6f9;
            padding-bottom: 12px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .privacy-section h2 i {
            color: var(--button);
            font-size: 20px;
        }

        .privacy-section h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 18px;
            color: #1D3656;
            margin: 20px 0 10px 0;
            font-weight: 600;
        }

        .privacy-section p {
            font-size: 16px;
            line-height: 1.8;
            color: #555;
            margin: 0 0 15px 0;
        }

        .privacy-section p:last-child {
            margin-bottom: 0;
        }

        @media (max-width: 768px) {
            .privacy-hero h1 {
                font-size: 36px;
            }

            .privacy-section {
                padding: 25px 20px;
            }

            .privacy-intro-box {
                padding: 25px 20px;
            }
        }
      ` }} />

      <section className="privacy-hh-section">
        <div className="privacy-hero">
          <h1>{c.hero_title}</h1>
          <p>{c.hero_subtitle}</p>
        </div>

        <div className="privacy-container">
          <div className="privacy-intro-box">
            <p>{c.intro_text}</p>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>{c.contact_address}</span>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-phone"></i>
                <a href={`tel:${c.contact_phone}`}>{c.contact_phone}</a>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-envelope"></i>
                <a href={`mailto:${c.contact_email}`}>{c.contact_email}</a>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-database"></i> INFORMATION COLLECTED</h2>
            {renderParagraphs(c.section_info_collected)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-server"></i> SERVER LOG INFORMATION</h2>
            {renderParagraphs(c.section_server_log)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-cookie-bite"></i> COOKIES</h2>
            {renderParagraphs(c.section_cookies)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-user-shield"></i> USER-INPUT PERSONAL INFORMATION</h2>
            {renderParagraphs(c.section_user_input)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-share-nodes"></i> HOW INFORMATION IS USED & SHARED</h2>

            <h3>PERSONAL INFORMATION:</h3>
            {renderParagraphs(c.section_shared_personal)}

            <h3>NON-PERSONAL INFORMATION:</h3>
            {renderParagraphs(c.section_shared_nonpersonal)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-link"></i> LINKED SITES</h2>
            {renderParagraphs(c.section_linked_sites)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-lock"></i> SECURITY</h2>
            {renderParagraphs(c.section_security)}
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-clock-rotate-left"></i> CHANGES TO OUR PRIVACY POLICY</h2>
            {renderParagraphs(c.section_changes)}
          </div>
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
          <h2 className="cta-text">{c.cta_text}</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
