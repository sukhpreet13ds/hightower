export default function Header() {
  return (
    <>
      {/* top bar: social icons + phone + contact */}
      <div className="top-header-bar">
        <div className="top-bar-container">
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
            <a href="/faq.html" className="top-bar-center-link">FAQ's</a>
            <a href="/blogs.html" className="top-bar-center-link">Blogs</a>
            <a href="/news.html" className="top-bar-center-link">News</a>
            <a href="/client-testimonials.html" className="top-bar-center-link">Testimonials</a>
          </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/danhightowerlawyer/" aria-label="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/company/daniel-l-hightower-p-a-" aria-label="LinkedIn" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://twitter.com/dan_hightower" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UC5QEO_t8BdcwOsEOWT5MHiQ" aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className="contact-info">
              <a href="tel:352-629-7777" className="phone-link">
                <i className="fa-solid fa-phone"></i> 352-629-7777
              </a>
              <a href="/contact-us.html" className="contact-btn">CONTACT US</a>
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
                    <a href="/lawyers.html" className="submenu-trigger-link">Lawyers <i className="fa-solid fa-chevron-right submenu-arrow"></i></a>
                    <ul className="submenu">
                      <li><a href="/lawyers/daniel-l-hightower.html">Daniel L. Hightower</a></li>
                      <li><a href="/lawyers/alison-l-hightower.html">Alison L. Hightower</a></li>
                      <li><a href="/lawyers/mark-n-tipton.html">Mark N. Tipton</a></li>
                      <li><a href="/lawyers/barbara-l-richard.html">Barbara L. Richard</a></li>
                      <li><a href="/lawyers/dave-guiley.html">Dave D. Guiley</a></li>
                      <li><a href="/lawyers/shawn-e-clark.html">Shawn E. Clark</a></li>
                    </ul>
                  </li>
                  <li><a href="/videos.html">Videos</a></li>
                  <li><a href="/community-service.html">Community Service</a></li>
                </ul>
              </li>
              <li className="nav-item has-dropdown">
                <a href="#" className="nav-link-item">Practice Areas <i className="fa-solid fa-chevron-down dropdown-arrow"></i></a>
                <ul className="dropdown-menu">
                  <li><a href="/areas-of-practice.html">Areas of Practice </a></li>
                  <li><a href="/areas-of-practice/personal-injury-law.html">Personal Injury</a></li>
                  <li><a href="/areas-of-practice/car-accident-lawyer.html">Car Accident Lawyer</a></li>
                  <li><a href="/areas-of-practice/motorcycle-accident-lawyer.html">Motorcycle Accident Lawyer</a></li>
                  <li><a href="/areas-of-practice/truck-accident-lawyer.html">Truck Accident Lawyer</a></li>
                  <li><a href="/areas-of-practice/work-accident-law.html">Work Accident Law</a></li>
                  <li><a href="/areas-of-practice/wrongful-death-law.html">Wrongful Death Law</a></li>
                  <li><a href="/areas-of-practice/social-security-disability-law.html">Social Security Disability Law</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/notable-trial-results-settlements.html" className="nav-link-item">Notable Trial Results & Settlements</a>
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
                  <a href="/lawyers.html" className="submenu-trigger-link">Lawyers <i className="fa-solid fa-chevron-right submenu-arrow"></i></a>
                  <ul className="submenu">
                    <li><a href="/lawyers/daniel-l-hightower.html">Daniel L. Hightower</a></li>
                    <li><a href="/lawyers.html#alison">Alison L. Hightower</a></li>
                    <li><a href="/lawyers.html#daniel">Mark N. Tipton</a></li>
                    <li><a href="/lawyers.html#alison">Barbara L. Richard</a></li>
                    <li><a href="/lawyers.html#daniel">Dave D. Guiley</a></li>
                    <li><a href="/lawyers.html#alison">Shawn E. Clark</a></li>
                  </ul>
                </li>
                <li><a href="/videos.html">Videos</a></li>
                <li><a href="/community-service.html">Community Service</a></li>
              </ul>
            </li>
            <li className="floating-nav-item has-dropdown">
              <a href="#" className="floating-nav-link-item">Practice Areas <i className="fa-solid fa-chevron-down dropdown-arrow"></i></a>
              <ul className="floating-dropdown-menu">
                <li><a href="/areas-of-practice.html">Areas of Practice </a></li>
                <li><a href="/areas-of-practice/personal-injury-law.html">Personal Injury</a></li>
                <li><a href="/areas-of-practice/car-accident-lawyer.html">Car Accident Lawyer</a></li>
                <li><a href="/areas-of-practice/motorcycle-accident-lawyer.html">Motorcycle Accident Lawyer</a></li>
                <li><a href="/areas-of-practice/truck-accident-lawyer.html">Truck Accident Lawyer</a></li>
                <li><a href="/areas-of-practice/work-accident-law.html">Work Accident Law</a></li>
                <li><a href="/areas-of-practice/wrongful-death-law.html">Wrongful Death Law</a></li>
                <li><a href="/areas-of-practice/social-security-disability-law.html">Social Security Disability Law</a></li>
              </ul>
            </li>
            <li className="floating-nav-item">
              <a href="/notable-trial-results-settlements.html" className="floating-nav-link-item">Notable Trial Results & Settlements</a>
            </li>
            <li className="floating-nav-item">
              <a href="/faq.html" className="floating-nav-link-item">FAQ's</a>
            </li>
            <li className="floating-nav-item">
              <a href="/blogs.html" className="floating-nav-link-item">Blogs</a>
            </li>
            <li className="floating-nav-item">
              <a href="/news.html" className="floating-nav-link-item">News</a>
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
                      <a href="/lawyers.html">Lawyers</a>
                      <a href="/lawyers/daniel-l-hightower.html">Daniel L. Hightower</a>
                      <a href="/lawyers.html#alison">Alison L. Hightower</a>
                      <a href="/lawyers.html#daniel">Mark N. Tipton</a>
                      <a href="/lawyers.html#alison">Barbara L. Richard</a>
                      <a href="/lawyers.html#daniel">Dave D. Guiley</a>
                      <a href="/lawyers.html#alison">Shawn E. Clark</a>
                    </div>
                  </div>
                  <a href="/videos.html">Videos</a>
                  <a href="/community-service.html">Community Service</a>
                </div>
              </div>

              <div className="mobile-nav-accordion">
                <button className="accordion-trigger">
                  <span>Practice Areas</span> <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className="accordion-panel">
                  <a href="/areas-of-practice.html">Areas of Practice </a>
                  <a href="/areas-of-practice/personal-injury-law.html">Personal Injury</a>
                  <a href="/areas-of-practice/car-accident-lawyer.html">Car Accident Lawyer</a>
                  <a href="/areas-of-practice/motorcycle-accident-lawyer.html">Motorcycle Accident Lawyer</a>
                  <a href="/areas-of-practice/truck-accident-lawyer.html">Truck Accident Lawyer</a>
                  <a href="/areas-of-practice/work-accident-law.html">Work Accident Law</a>
                  <a href="/areas-of-practice/wrongful-death-law.html">Wrongful Death Law</a>
                  <a href="/areas-of-practice/social-security-disability-law.html">Social Security Disability Law</a>
                </div>
              </div>

              <a href="/notable-trial-results-settlements.html" className="mobile-nav-item-link">Notable Trial Results & Settlements</a>
              <a href="/faq.html" className="mobile-nav-item-link">FAQ's</a>
              <a href="/blogs.html" className="mobile-nav-item-link">Blogs</a>
              <a href="/news.html" className="mobile-nav-item-link">News</a>
            </div>

            <div className="mobile-menu-footer">
              <a href="/contact-us.html" className="mobile-contact-btn">CONTACT US</a>
              <a href="tel:352-629-7777" className="mobile-phone-link">
                <i className="fa-solid fa-phone"></i> 352-629-7777
              </a>
              <div className="mobile-footer-socials">
                <a href="https://www.linkedin.com/company/hightower-law/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/HightowerLawFL/" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
