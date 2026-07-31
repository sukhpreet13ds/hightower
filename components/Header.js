export default function Header() {
  return (
    <>
      {/* top bar: social icons + phone + contact */}
      <div className="top-header-bar">
        <div className="top-bar-container">
          <button className="side-panel-trigger" id="side-panel-trigger" aria-label="Open Side Panel">
            <i className="fa-solid fa-grip-lines"></i>
          </button>
          <div className="top-bar-left">
            <a href="https://maps.app.goo.gl/Fmg9FsvBxmEQRGR48" target="_blank" rel="noopener noreferrer" className="top-bar-location">
              <i className="fa-solid fa-location-dot"></i> E. Silver Springs Blvd., Suite 300, Ocala, FL 34470
            </a>
            <a href="https://maps.app.goo.gl/6airePnfPt9mrthM9" target="_blank" rel="noopener noreferrer" className="top-bar-location">
              <i className="fa-solid fa-location-dot"></i> 3259 W. Bryant Ave., Bell, FL 32619
            </a>
          </div>

          <div className="top-bar-right">
            <div className="top-bar-center">
              <a href="/faq" className="top-bar-center-link">FAQ's</a>
              <a href="/blogs" className="top-bar-center-link">Blogs</a>
              <a href="/news" className="top-bar-center-link">News</a>
              <a href="/client-testimonials" className="top-bar-center-link">Testimonials</a>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/danhightowerlawyer/" aria-label="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/company/daniel-l-hightower-p-a-" aria-label="LinkedIn" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://twitter.com/dan_hightower" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UC5QEO_t8BdcwOsEOWT5MHiQ" aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className="contact-info">
              <a href="tel:+1 3526297777" className="phone-link">
                <i className="fa-solid fa-phone"></i>

                <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                  <span>352-629-7777</span>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#BB8A55" }}>
                    Llámenos en Español
                  </span>
                </span>
              </a>
              <a href="/contact-us" className="contact-btn">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>

      {/* header */}
      <header className="main-header">
        <div className="navbar-container">
          <a href="/" className="logo-link">
            <img src="/assets/h&h-logo.svg" alt="Hightower & Hightower Logo" className="logo-img" />
          </a>

          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item has-dropdown">
                <a href="#" className="nav-link-item">About Us <i className="fa-solid fa-chevron-down dropdown-arrow"></i></a>
                <ul className="dropdown-menu">
                  <li className="has-submenu">
                    <a href="/lawyers" className="submenu-trigger-link">Lawyers <i className="fa-solid fa-chevron-right submenu-arrow"></i></a>
                    <ul className="submenu">
                      <li><a href="/lawyers/daniel-l-hightower">Daniel L. Hightower</a></li>
                      <li><a href="/lawyers/alison-l-hightower">Alison L. Hightower</a></li>
                      <li><a href="/lawyers/mark-n-tipton">Mark N. Tipton</a></li>
                      <li><a href="/lawyers/barbara-l-richard">Barbara L. Richard</a></li>
                      <li><a href="/lawyers/dave-guiley">Dave D. Guiley</a></li>
                      <li><a href="/lawyers/shawn-e-clark">Shawn E. Clark</a></li>
                    </ul>
                  </li>
                  <li><a href="/videos">Videos</a></li>
                  <li><a href="/community-service">Community Service</a></li>
                </ul>
              </li>
              <li className="nav-item has-dropdown">
                <a href="#" className="nav-link-item">Practice Areas <i className="fa-solid fa-chevron-down dropdown-arrow"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="/areas-of-practice">Areas of Practice </a></li>
                  <li><a href="/areas-of-practice/personal-injury-law">Personal Injury</a></li>
                  <li><a href="/areas-of-practice/car-accident-lawyer">Car Accident Lawyer</a></li>
                  <li><a href="/areas-of-practice/motorcycle-accident-lawyer">Motorcycle Accident Lawyer</a></li>
                  <li><a href="/areas-of-practice/truck-accident-lawyer">Truck Accident Lawyer</a></li>
                  <li><a href="/areas-of-practice/work-accident-law">Work Accident Law</a></li>
                  <li><a href="/areas-of-practice/wrongful-death-law">Wrongful Death Law</a></li>
                  <li><a href="/areas-of-practice/social-security-disability-law">Social Security Disability Law</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/notable-trial-results-settlements" className="nav-link-item">Notable Trial Results & Settlements</a>
              </li>
            </ul>
          </nav>

          <button className="burger-menu-btn" id="mobile-menu-trigger" aria-label="Open Menu">
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div className="floating-header" id="floating-navbar">
        <nav className="floating-nav-menu">
          <ul className="floating-nav-list">
            <li className="floating-nav-item has-dropdown">
              <a href="#" className="floating-nav-link-item">About Us <i className="fa-solid fa-chevron-down dropdown-arrow"></i></a>
              <ul className="floating-dropdown-menu">
                <li className="has-submenu">
                  <a href="/lawyers" className="submenu-trigger-link">Lawyers <i className="fa-solid fa-chevron-right submenu-arrow"></i></a>
                  <ul className="submenu">
                    <li><a href="/lawyers/daniel-l-hightower">Daniel L. Hightower</a></li>
                    <li><a href="/lawyers#alison">Alison L. Hightower</a></li>
                    <li><a href="/lawyers#daniel">Mark N. Tipton</a></li>
                    <li><a href="/lawyers#alison">Barbara L. Richard</a></li>
                    <li><a href="/lawyers#daniel">Dave D. Guiley</a></li>
                    <li><a href="/lawyers#alison">Shawn E. Clark</a></li>
                  </ul>
                </li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/community-service">Community Service</a></li>
              </ul>
            </li>
            <li className="floating-nav-item has-dropdown">
              <a href="#" className="floating-nav-link-item">Practice Areas <i className="fa-solid fa-chevron-down dropdown-arrow"></i></a>
              <ul className="floating-dropdown-menu">
                <li><a href="/areas-of-practice">Areas of Practice </a></li>
                <li><a href="/areas-of-practice/personal-injury-law">Personal Injury</a></li>
                <li><a href="/areas-of-practice/car-accident-lawyer">Car Accident Lawyer</a></li>
                <li><a href="/areas-of-practice/motorcycle-accident-lawyer">Motorcycle Accident Lawyer</a></li>
                <li><a href="/areas-of-practice/truck-accident-lawyer">Truck Accident Lawyer</a></li>
                <li><a href="/areas-of-practice/work-accident-law">Work Accident Law</a></li>
                <li><a href="/areas-of-practice/wrongful-death-law">Wrongful Death Law</a></li>
                <li><a href="/areas-of-practice/social-security-disability-law">Social Security Disability Law</a></li>
              </ul>
            </li>
            <li className="floating-nav-item">
              <a href="/notable-trial-results-settlements" className="floating-nav-link-item">Notable Trial Results & Settlements</a>
            </li>
            <li className="floating-nav-item">
              <a href="/faq" className="floating-nav-link-item">FAQ's</a>
            </li>
            <li className="floating-nav-item">
              <a href="/blogs" className="floating-nav-link-item">Blogs</a>
            </li>
            <li className="floating-nav-item">
              <a href="/news" className="floating-nav-link-item">News</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-menu-overlay" id="mobile-menu">
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            {/* <a href="/" className="logo-link">
              <img src="/assets/h&h-logo.svg" alt="Logo" className="logo-img-mobile" />
            </a> */}
            <div></div>
            <div className="mobile-menu-actions-tab">
              <div className="mobile-header-socials">
                <a href="https://twitter.com/dan_hightower" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UC5QEO_t8BdcwOsEOWT5MHiQ" aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
              </div>
              <button className="mobile-close-btn" id="mobile-menu-close">
                Close
              </button>
            </div>
          </div>

          <div className="mobile-menu-body">
            <div className="mobile-nav-list">
              <div className="mobile-nav-accordion">
                <button className="accordion-trigger">
                  <span>About Us</span> <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className="accordion-panel">
                  <div className="mobile-nav-sub-accordion">
                    <button className="sub-accordion-trigger">
                      <span>Lawyers</span> <i className="fa-solid fa-chevron-down sub-arrow"></i>
                    </button>
                    <div className="sub-accordion-panel">
                      <a href="/lawyers">Lawyers</a>
                      <a href="/lawyers/daniel-l-hightower">Daniel L. Hightower</a>
                      <a href="/lawyers#alison">Alison L. Hightower</a>
                      <a href="/lawyers#daniel">Mark N. Tipton</a>
                      <a href="/lawyers#alison">Barbara L. Richard</a>
                      <a href="/lawyers#daniel">Dave D. Guiley</a>
                      <a href="/lawyers#alison">Shawn E. Clark</a>
                    </div>
                  </div>
                  <a href="/videos">Videos</a>
                  <a href="/community-service">Community Service</a>
                </div>
              </div>

              <div className="mobile-nav-accordion">
                <button className="accordion-trigger">
                  <span>Practice Areas</span> <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className="accordion-panel">
                  <a href="/areas-of-practice">Areas of Practice </a>
                  <a href="/areas-of-practice/personal-injury-law">Personal Injury</a>
                  <a href="/areas-of-practice/car-accident-lawyer">Car Accident Lawyer</a>
                  <a href="/areas-of-practice/motorcycle-accident-lawyer">Motorcycle Accident Lawyer</a>
                  <a href="/areas-of-practice/truck-accident-lawyer">Truck Accident Lawyer</a>
                  <a href="/areas-of-practice/work-accident-law">Work Accident Law</a>
                  <a href="/areas-of-practice/wrongful-death-law">Wrongful Death Law</a>
                  <a href="/areas-of-practice/social-security-disability-law">Social Security Disability Law</a>
                </div>
              </div>

              <a href="/notable-trial-results-settlements" className="mobile-nav-item-link">Notable Trial Results & Settlements</a>
              <a href="/faq" className="mobile-nav-item-link">FAQ's</a>
              <a href="/blogs" className="mobile-nav-item-link">Blogs</a>
              <a href="/news" className="mobile-nav-item-link">News</a>
            </div>

            <div className="mobile-menu-footer">
              <a href="/contact-us" className="mobile-contact-btn">CONTACT US</a>
              <a href="tel:+1 3526297777" className="mobile-phone-link">
                <i className="fa-solid fa-phone"></i>
                <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                  <span>352-629-7777</span>
                  <span style={{ fontSize: "11px", fontWeight: "500" }}>
                    Llámenos en Español
                  </span>
                </span>
              </a>
              <div className="mobile-footer-socials">
                <a href="https://www.linkedin.com/company/hightower-law/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/HightowerLawFL/" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Side Panel for 992px to 1784px */}
      <div className="desktop-side-panel-overlay" id="desktop-side-panel">
        <div className="desktop-side-panel-content">
          <div className="desktop-side-panel-header">
            <button className="desktop-side-panel-close" id="desktop-side-panel-close" aria-label="Close Panel">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="desktop-side-panel-body">
            {/* Locations */}
            <div className="side-panel-section side-panel-locations">
              <h4 className="side-panel-title">Locations</h4>
              <a href="https://maps.app.goo.gl/Fmg9FsvBxmEQRGR48" target="_blank" rel="noopener noreferrer" className="side-panel-location-link">
                <i className="fa-solid fa-location-dot"></i> E. Silver Springs Blvd., Suite 300, Ocala, FL 34470
              </a>
              <a href="https://maps.app.goo.gl/6airePnfPt9mrthM9" target="_blank" rel="noopener noreferrer" className="side-panel-location-link">
                <i className="fa-solid fa-location-dot"></i> 3259 W. Bryant Ave., Bell, FL 32619
              </a>
            </div>

            {/* Central Items / Links */}
            <div className="side-panel-section side-panel-nav">
              <h4 className="side-panel-title">Quick Links</h4>
              <a href="/faq" className="side-panel-nav-link">FAQ's</a>
              <a href="/blogs" className="side-panel-nav-link">Blogs</a>
              <a href="/news" className="side-panel-nav-link">News</a>
              <a href="/client-testimonials" className="side-panel-nav-link">Testimonials</a>
            </div>

            {/* Social Icons */}
            <div className="side-panel-section side-panel-socials">
              <h4 className="side-panel-title">Follow Us</h4>
              <div className="side-panel-social-icons">
                <a href="https://www.facebook.com/danhightowerlawyer/" aria-label="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/daniel-l-hightower-p-a-" aria-label="LinkedIn" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://twitter.com/dan_hightower" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UC5QEO_t8BdcwOsEOWT5MHiQ" aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="side-panel-section side-panel-contact">
              <h4 className="side-panel-title">Contact</h4>
              <a href="tel:+1 3526297777" className="side-panel-phone">
                <i className="fa-solid fa-phone"></i>
                <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                  <span>352-629-7777</span>
                  <span style={{ fontSize: "12px", fontWeight: "500", color: "#BB8A55" }}>
                    Llámenos en Español
                  </span>
                </span>
              </a>
              <a href="/contact-us" className="side-panel-contact-btn">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
