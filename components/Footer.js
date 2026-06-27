export default function Footer() {
  return (
    <footer className="footer-section" id="footer-section">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-contact">
            <span className="consult-badge">100% Free Consultation</span>
            <a href="tel:352-646-3944" className="footer-phone">352-646-3944</a>
          </div>
          <div className="footer-logo-wrapper">
            <img src="/assets/footer-logo.svg" alt="H&H Lawyers Logo" className="footer-logo-img" />
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/danhightowerlawyer/" aria-label="Facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/dan_hightower" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UC5QEO_t8BdcwOsEOWT5MHiQ" aria-label="YouTube" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/daniel-l-hightower-p-a-" aria-label="LinkedIn" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-nav-row">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/lawyers.html">Meet Our Attorneys</a></li>
              <li><a href="/areas-of-practice.html">Practice Areas</a></li>
              <li><a href="#">Our Victories</a></li>
              <li><a href="/contact-us.html">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-disclaimer">
            <div className="footer-bottom-meta">
              <p className="copyright-text">Copyright &copy; 2026 Hightower & Hightower. All Rights Reserved.</p>
              <div className="legal-links">
                <a href="/privacy-policy.html">Privacy Policy</a>
                <span className="legal-divider">|</span>
                <a href="#">Site Map</a>
              </div>
            </div>
            <div className="footer-meta-desc">
              <p style={{ paddingTop: '60px' }}>The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. The verdicts and settlements listed on this site are intended to be representative of cases handled by Hightower & Hightower. These listings are not a guarantee or prediction of the outcome of any other claims.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
