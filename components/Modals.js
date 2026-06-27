export default function Modals() {
  return (
    <>
      {/* video modal */}
      <div className="video-modal" id="video-modal">
        <div className="modal-overlay" id="modal-overlay"></div>
        <div className="modal-content">
          <button className="modal-close" id="modal-close" aria-label="Close video">&times;</button>
          <div className="video-wrapper">
            <video id="modal-video" src="" controls autoPlay></video>
          </div>
        </div>
      </div>

      {/* consultation modal */}
      <div className="consultation-modal" id="consultation-modal">
        <div className="consult-modal-overlay" id="consult-modal-overlay"></div>
        <div className="consult-modal-content">
          <button className="consult-modal-close" id="consult-modal-close" aria-label="Close form">&times;</button>
          <div className="form-card" style={{ boxShadow: 'none', borderTop: 'none', margin: '0 !important' }}>
            <div className="form-badge">✓ 100% FREE - NO FEE UNLESS WE WIN</div>
            <h2 className="form-title">Talk to Hightower & Hightower</h2>
            <p className="form-subtitle">We'll review your case and respond within hours.</p>

            <form className="case-review-form" action="#" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-first-name">FIRST NAME</label>
                  <input type="text" id="modal-first-name" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-last-name">LAST NAME</label>
                  <input type="text" id="modal-last-name" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-phone-number">PHONE NUMBER</label>
                <input type="tel" id="modal-phone-number" placeholder="(407) 555-1234" required />
              </div>

              <div className="form-group">
                <label htmlFor="modal-case-type">CASE TYPE</label>
                <select id="modal-case-type" required defaultValue="">
                  <option value="" disabled>Select your case type</option>
                  <option value="personal-injury">Personal Injury</option>
                  <option value="car-accident">Car Accident</option>
                  <option value="medical-malpractice">Medical Malpractice</option>
                  <option value="wrongful-death">Wrongful Death</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-brief-description">BRIEF DESCRIPTION</label>
                <textarea id="modal-brief-description" rows="3" placeholder="Tell us briefly what happened and when..." required></textarea>
              </div>

              <button type="submit" className="btn-submit-case">SUBMIT MY FREE CASE REVIEW <i className="fa-solid fa-arrow-right-long"></i></button>
            </form>

            <p className="form-footer-text">
              By submitting, you agree to our Privacy Policy. Your information is confidential and
              protected by attorney-client privilege.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
