import Footer from '@/components/Footer';
import { all } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'News - Hightower & Hightower' };

function newsExcerpt(b) {
  if (b.excerpt) return b.excerpt;
  const text = (b.content || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > 130 ? text.slice(0, 130) + '…' : text;
}

export default async function Page() {
  const items = await all(`
    SELECT id, title, excerpt, content, image FROM news WHERE published = 1
    ORDER BY created_at DESC, id DESC
  `);

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
            left: 0;
            width: 100%;
            background: transparent !important;
            z-index: 100;
            box-shadow: none !important;
        }
        .nav-list { margin-top: 34px; }
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
      ` }} />

      {/* News Showcase Section */}
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
              <h2 className="videos-title-sub">Updates</h2>
            </div>
          </div>
          <section className="blogs-grid-section">
            <div className="blogs-container-grid">
              <div className="blogs-grid">
                {items.map((n) => (
                  <a key={n.id} href={`news-detail.html?id=${n.id}`} className="blog-card">
                    <div className="blog-card-img-wrapper">
                      <img src={n.image || './assets/hh-blog1.jpg'} alt={n.title} className="blog-card-img" />
                    </div>
                    <div className="blog-card-content">
                      <h3 className="blog-card-title">{n.title}</h3>
                      <p className="blog-card-excerpt">{newsExcerpt(n)}</p>
                      <span className="blog-card-link">Read More</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
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
          <h2 className="cta-text">Fighting for the injured since 1976.</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
