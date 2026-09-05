import Footer from '@/components/Footer';
import { get } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const isNum = /^\d+$/.test(slug);
  const post = isNum
    ? await get('SELECT title FROM blogs WHERE (slug = ? OR id = ?) AND published = 1', [slug, Number(slug)])
    : await get('SELECT title FROM blogs WHERE slug = ? AND published = 1', [slug]);
  return {
    title: post ? `${post.title} - Hightower & Hightower` : 'Article - Hightower & Hightower',
  };
}

function cleanBlogContent(html) {
  if (!html) return '';
  let c = html;
  c = c.replace(/<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    if (/font-weight\s*:\s*(?:400|normal)/i.test(inner)) {
      return '<div class="blog-paragraph">' + inner + '</div>';
    }
    return match;
  });
  c = c.replace(/style=(["'])([\s\S]*?)\1/gi, (match, quote, styleContent) => {
    let newStyle = styleContent
      .replace(/font-size\s*:\s*[^;'"]+(?:;|$)/gi, '')
      .trim();
    if (!newStyle || newStyle === ';') return '';
    return 'style=' + quote + newStyle + quote;
  });
  c = c.replace(/(<h[1-6][^>]*>(?:<[^>]+>)*)\s*<br\s*\/?>/gi, '$1');
  return c;
}

function renderContent(content) {
  const c = content || '';
  if (/<[a-z][\s\S]*>/i.test(c)) return cleanBlogContent(c);
  return c
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((p) => '<p>' + p.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</p>')
    .join('');
}

export default async function Page({ params }) {
  const { slug } = await params;
  const isNum = /^\d+$/.test(slug);
  const post = isNum
    ? await get('SELECT * FROM blogs WHERE (slug = ? OR id = ?) AND published = 1', [slug, Number(slug)])
    : await get('SELECT * FROM blogs WHERE slug = ? AND published = 1', [slug]);
  const tags = post?.tags
    ? post.tags.split(',').map((t) => t.trim()).filter(Boolean)
    : [];

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

        .lawyer-hero-section {
            background-image: url('/assets/lawyer-hero.png');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            width: 100%;
            min-height: 800px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-top: 180px;
            overflow: hidden;
        }

        .lawyer-hero-container {
            max-width: 1825px;
            margin: 0 auto;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            padding: 0 40px 0px 40px;
            flex-grow: 1;
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

        .main-header .logo-img {
            filter: brightness(0) !important;
        }
      ` }} />

      <section className="videos-showcase-section">
        <div className="videos-container">
          <div className="videos-bg-svg-wrapper">
            <img src="/assets/hero-bg.svg" alt="H&H Background Logo" className="videos-bg-svg" />
          </div>

          <div className="videos-title-area">
            <h1 className="blog-title-main">{post ? post.title : 'Article not found'}</h1>
          </div>

          {post && post.logo && (
            <div className="blog-source-logo" id="blog-source-logo">
              <img id="blog-source-logo-img" src={post.logo} alt="Source logo" />
            </div>
          )}

          <div className="blog-full-detail">
            <div className="blog-main-image-wrapper">
              <img
                src={(post && post.image) || '/assets/blog-detail.jpg'}
                alt={post ? post.title : ''}
                className="blog-main-image"
              />
            </div>

            <div
              className="blog-article-content"
              dangerouslySetInnerHTML={{
                __html: post
                  ? renderContent(post.content)
                  : '<p>Sorry, this article could not be found. <a href="/blogs">Browse all articles</a>.</p>',
              }}
            />

            {tags.length > 0 && (
              <div className="blog-tags" id="blog-tags">
                <h3 className="blog-tags-title">Post Tags</h3>
                <div className="blog-tags-list" id="blog-tags-list">
                  {tags.map((t, i) => (
                    <span key={i} className="blog-tag">{t}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="blog-share" id="blog-share">
              <span className="blog-share-label">Share This Story, Choose Your Platform!</span>
              <div className="blog-share-icons" id="blog-share-icons">
                <a href="#" data-net="facebook" aria-label="Share on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" data-net="twitter" aria-label="Share on X"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" data-net="reddit" aria-label="Share on Reddit"><i className="fa-brands fa-reddit-alien"></i></a>
                <a href="#" data-net="linkedin" aria-label="Share on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" data-net="tumblr" aria-label="Share on Tumblr"><i className="fa-brands fa-tumblr"></i></a>
                <a href="#" data-net="pinterest" aria-label="Share on Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
                <a href="#" data-net="email" aria-label="Share by Email"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </div>
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
                <img src="/assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item">
                <img src="/assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item">
                <img src="/assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item">
                <img src="/assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item">
                <img src="/assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              <div className="honor-logo-item">
                <a
                  href="https://www.bbb.org/us/fl/ocala/profile/personal-injury-lawyers/hightower-hightower-p-a-0733-235974524/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="/assets/bbb-logo.png"
                    alt="Hightower & Hightower, P.A. BBB Accredited Business"
                    style={{ border: 0 }}
                  />
                </a>
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="/assets/award1.png" alt="The National Trial Lawyers Top 100" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="/assets/award2.png" alt="AV Preeminent Rated" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="/assets/award3.png" alt="Martindale-Hubbell Client Champion Gold" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="/assets/award4.webp" alt="Florida Bar Certified Civil Trial" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <img src="/assets/award5.png" alt="Florida Bar Certified Workers Compensation" />
              </div>
              <div className="honor-logo-item marquee-clone">
                <a
                  href="https://www.bbb.org/us/fl/ocala/profile/personal-injury-lawyers/hightower-hightower-p-a-0733-235974524/#sealclick"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="/assets/bbb-logo.png"
                    alt="Hightower & Hightower, P.A. BBB Accredited Business"
                    style={{ border: 0 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta-section">
        <div className="cta-container">
          <h2 className="cta-text">Fighting for the injured since 1976.</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
