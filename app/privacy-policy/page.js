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
          <h1>Privacy Policy</h1>
          <p>Welcome to the Hightower & Hightower, P.A. website</p>
        </div>

        <div className="privacy-container">
          <div className="privacy-intro-box">
            <p>Hightower & Hightower, P.A. has created this privacy statement to demonstrate its firm commitment
              to privacy for Hightower & Hightower, P.A. clients and other website users and to disclose its
              information gathering and dissemination practices. If you have any questions regarding this
              Privacy Policy or the practices of this website, please contact us at:</p>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>7 E Silver Springs Blvd #300, Ocala, FL 34470</span>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:352-656-6959">352-656-6959</a>
              </div>
              <div className="contact-info-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:Info@hightowerandhightower.com">Info@hightowerandhightower.com</a>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-database"></i> INFORMATION COLLECTED</h2>
            <p>Hightower & Hightower, P.A. collects “Non-Personal Information” and “Personal Information.”
              Non-Personal Information includes information that cannot be used to personally identify you,
              such as anonymous usage data, general demographic information we may collect, referring/exit
              pages and URLs, platform types, preferences you submit and preferences that are generated based
              on the data you submit and number of clicks.</p>
            <p>Personal Information includes contact details, name, phone number, email address, case details,
              or any other information, which you submit to us through the website’s contact form(s) or client
              portal.</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-server"></i> SERVER LOG INFORMATION</h2>
            <p>When you visit Hightower & Hightower, P.A. website, you are identified as a unique IP address
              that is automatically collected in server logs. Hightower & Hightower, P.A. uses this
              information to help diagnose problems with our server and to analyze server traffic to learn
              which pages on Hightower & Hightower, P.A. website receive more or fewer visitors. This
              information is anonymous and cannot be traced back to a specific individual.</p>
            <p>The server log also can tell us the time and date of access, which browser you are using, and the
              name of the website you came from (known as the “referring URL”).</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-cookie-bite"></i> COOKIES</h2>
            <p>When you visit Hightower & Hightower, P.A. website, we track certain Non-Personal Information
              using cookies, small text files which include an anonymous unique identifier. Hightower &
              Hightower, P.A. may use both persistent and session cookies; persistent cookies remain on your
              computer after you close your session and until you delete them, while session cookies expire
              when you close your browser. Sending a cookie to a user’s browser enables us to collect
              Non-Personal Information about that user and keep a record of the user’s preferences when
              utilizing our website.</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-user-shield"></i> USER-INPUT PERSONAL INFORMATION</h2>
            <p>Hightower & Hightower, P.A. collects Personal Information in the course of providing legal
              services to clients and as provided by visitors to its website. We store all user-input data,
              including Personal Information, sent through the website’s contact form(s).</p>
            <p>Current and future services on Hightower & Hightower, P.A. website may require users to set up an
              account and provide names, email addresses, billing and delivery information, credit card or
              other financial account information, and other Personal Information. By providing this Personal
              Information, you can transact business via the Internet, which in the past required telephone or
              mail contact with Hightower & Hightower, P.A.</p>
            <p>Access to the website’s client portal is protected by a password. We recommend that you do not
              divulge your password to anyone. Users who have logged into the client portal have the option of
              updating contact information and preferences. These online services are provided as a
              convenience and allow Hightower & Hightower, P.A. to provide clients with efficient and
              high-quality legal services at a lower cost.</p>
            <p>Users are responsible for maintaining the confidentiality of accounts and passwords and agree to
              accept responsibility for all activities that occur under their accounts and passwords.</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-share-nodes"></i> HOW INFORMATION IS USED & SHARED</h2>

            <h3>PERSONAL INFORMATION:</h3>
            <p>Except as otherwise stated in this Privacy Policy, we <strong>DO NOT</strong> disclose any
              Personal Information to unrelated parties outside of the firm except in limited circumstances.
              Such circumstances include disclosures to our agents or data processors or other contractors
              acting on our behalf and at our direction, subject to appropriate confidentiality, privacy and
              information security commitments provided by the receiving party, or where we believe it
              necessary to provide a service which you have requested, or as permitted or required by law, or
              as otherwise authorized or directed by you.</p>
            <p>Consistent with our professional obligations, we may provide Personal Information to regulatory
              authorities and law enforcement officials in accordance with applicable law or when we otherwise
              believe in good faith that the provision of such information is required or permitted by law,
              such as in connection with the investigation or assertion of our legal defenses or for our
              compliance matters.</p>
            <p>We will use and process your Personal Information for providing, promoting, and improving our
              legal services and complying with our legal and ethical obligations related to those legal
              services. In general, the Personal Information you provide to us is used to help us communicate
              with you. For example, we use Personal Information to contact clients regarding their
              representation, contact users in response to questions, solicit feedback from users, provide
              technical support, and inform users about promotional offers.</p>

            <h3>NON-PERSONAL INFORMATION:</h3>
            <p>In general, we use Non-Personal Information to help us improve the website and customize the user
              experience. We also aggregate Non-Personal Information in order to track traffic and analyze use
              patterns on the website. This Privacy Policy does not limit in any way our use or disclosure of
              Non-Personal Information and we reserve the right to use and disclose anonymous, aggregate,
              Non-Personal Information to our partners, advertisers, and other reputable third parties at our
              discretion.</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-link"></i> LINKED SITES</h2>
            <p>Hightower & Hightower, P.A. website contains links to other external websites (“linked sites”)
              that we believe may be useful to Hightower & Hightower, P.A. users and the public. Hightower &
              Hightower, P.A. is not responsible for the content, business practices, or privacy practices of
              linked sites. This Privacy Policy applies solely to information collected by us through this
              website.</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-lock"></i> SECURITY</h2>
            <p>Hightower & Hightower, P.A. website has security measures in place to protect your information
              from unauthorized access. We further protect your information from potential security breaches
              by implementing certain technological security measures including encryption, firewalls, and
              secure socket layer (SSL) technology. Only authorized employees, agents, and contractors (who
              have agreed to keep information secure and confidential) have access to this information.</p>
            <p>Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure.
              Accordingly, and despite our efforts, Hightower & Hightower, P.A. cannot guarantee or warrant
              that your information will not be accessed, disclosed, altered, or destroyed by breach of such
              firewalls and secure server software. By using our website, you acknowledge that you understand
              and agree to assume these risks.</p>
          </div>

          <div className="privacy-section">
            <h2><i className="fa-solid fa-clock-rotate-left"></i> CHANGES TO OUR PRIVACY POLICY</h2>
            <p>Hightower & Hightower, P.A. reserves the right to revise this policy at any time without advance
              notice. Please review the policy periodically for changes. We will endeavor to provide notice
              ahead of significant changes by email or through a notice on the website.</p>
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
