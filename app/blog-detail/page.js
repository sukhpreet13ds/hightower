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

      {/* Videos Showcase Section */}
      <section className="videos-showcase-section">
        <div className="videos-container">
          {/* SVG Watermark background */}
          <div className="videos-bg-svg-wrapper">
            <img src="./assets/hero-bg.svg" alt="H&H Background Logo" className="videos-bg-svg" />
          </div>

          <div className="videos-title-area">
            <h1 className="blog-title-main">How Long Do Personal Injury Cases Typically Take?</h1>
          </div>

          {/* Source / publication logo (filled for posts that have one) */}
          <div className="blog-source-logo" id="blog-source-logo" style={{ display: 'none' }}>
            <img id="blog-source-logo-img" alt="Source logo" />
          </div>

          <div className="blog-full-detail">
            {/* Main Blog Image */}
            <div className="blog-main-image-wrapper">
              <img src="./assets/blog-detail.jpg" alt="How Long Do Personal Injury Cases Typically Take?" className="blog-main-image" />
            </div>

            {/* Blog Content */}
            <div className="blog-article-content">
              <p>On average, a personal injury case takes 6 to 18 months to resolve, but some cases can take
                several years to settle. How long your specific case takes will depend on the facts of the
                case, including the severity of the injury, the total losses experienced, and the pain and
                suffering caused by the accident. A lawyer can help you determine the best approach to take
                for your case, and can give you insight into what to expect along the way.</p>

              <h2>Key Takeaways</h2>
              <ul className="blog-bullets">
                <li>Most personal injury cases take 6 to 18 months to resolve.</li>
                <li>Settling too early can leave future medical costs and ongoing losses uncompensated.</li>
                <li>Florida has the highest personal injury filing rate in the nation, which means courts
                  are busy and having a knowledgeable local attorney matters to your case.</li>
              </ul>

              <h2>What Is a Personal Injury Case?</h2>
              <p>Personal injury law covers cases where someone is hurt due to another's wrongdoing or
                recklessness, also called negligence. This harm can be emotional, physical, or financial and
                often affects the injured person's quality of life. Common types of personal injury cases
                include:</p>
              <ul className="blog-bullets">
                <li>Motorcycle accidents</li>
                <li>Car accidents</li>
                <li>Tractor-trailer accidents</li>
                <li>Slip-and-falls</li>
                <li>Pedestrian accidents</li>
                <li>Bicycle accidents</li>
                <li>Workplace accidents</li>
                <li>Product liability claims</li>
              </ul>
              <p>These accidents can cause long-lasting physical changes, pain, and discomfort. They can also
                lead to medical expenses, lost income, property loss, and lifelong changes for the injured
                person.</p>

              <h2>Auto-Related Claims Lead Florida Personal Injury Filings</h2>
              <p>Florida personal injury cases cover a wide range of claims, but the numbers show that
                auto-related cases make up the largest share by far, accounting for 41.1% of statewide
                circuit civil filings.</p>

              {/* Mid Graphic (table.jpg) */}
              <div className="blog-mid-image-wrapper">
                <img src="./assets/table.jpg" alt="Florida Personal Injury-Related Case Types Graphic" className="blog-mid-image" />
              </div>

              <p>Once it's determined what type of case you may have, the next question most people ask is how
                long the process takes in Florida.</p>

              <h2>How Long Do Personal Injury Cases Take in Florida?</h2>
              <p>Florida court statistics do not provide an exact average timeline for every type of personal
                injury case. However, Florida's civil case time standards generally aim for most non-jury
                civil cases to resolve within 12 months, most jury civil cases within 18 months, and complex
                civil cases within 30 months. In practice, many personal injury cases resolve through
                settlement before trial, while cases involving serious injuries, disputed liability,
                multiple parties, or complex damages can or may take longer.</p>

              {/* Custom Styled Table */}
              <div className="blog-table-container">
                <table className="blog-time-table">
                  <thead>
                    <tr>
                      <th>Case Track</th>
                      <th>Florida Time Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Non-jury civil cases</td>
                      <td>12 months</td>
                    </tr>
                    <tr>
                      <td>Jury civil cases</td>
                      <td>18 months</td>
                    </tr>
                    <tr>
                      <td>Complex civil cases</td>
                      <td>30 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>What Affects Your Injury Case Timeline?</h2>
              <p>One of the biggest factors that controls when a case can settle is something called Maximum
                Medical Improvement, or MMI. MMI is considered a milestone in a personal injury case because
                it signifies that either (1) the condition has stabilized to a point where future medical
                treatment is unnecessary or (2) the injured person has recovered from the injury as much as
                possible.</p>
              <p>This milestone provides a foundation for calculating how much the case may be worth. If the
                case is settled too soon, before the full extent of the injuries is known, the injured
                person may miss the opportunity to be compensated for future medical bills, ongoing care, or
                losses that continue to build if the injury gets worse.</p>
              <p>Beyond MMI, other variables include the severity of your injuries, whether liability is
                disputed, the number of parties involved, and how cooperative the insurance company is.
                Court scheduling itself can also be a factor, as Florida handles thousands of cases per
                year, and criminal cases are given priority over civil trials.</p>
              <p>Even when both sides are ready to move forward, the pace of the court system can add time to
                the process. Patience is part of navigating a personal injury case, and understanding that
                delays are often outside anyone's control can help set realistic expectations.</p>

              <h2>The Stages of a Personal Injury Case</h2>
              <p>Every case is different to some degree. For example, a product liability case is treated
                differently than a car accident claim, but they do have a commonality: they are capable of
                being settled at any point throughout the process. However, settlement should not happen
                before the full extent of the injury is understood.</p>

              <p className="blog-intro-strong"><strong>The stages of a personal injury case include:</strong></p>
              <ol className="blog-ordered-list">
                <li><strong>Medical Treatment and Recovery:</strong> After the accident, the injured person
                  usually begins medical treatment. This is important because it creates records of the
                  injury, the treatment needed, and how the injury affects their daily life.</li>
                <li><strong>Investigation and Evidence Gathering:</strong> An attorney reviews the facts of
                  the accident, gathers evidence, speaks with witnesses, reviews medical records, and
                  determines who may be legally responsible.</li>
                <li><strong>Maximum Medical Improvement:</strong> A case typically cannot be fully valued
                  until the injured person reaches Maximum Medical Improvement, or MMI.</li>
                <li><strong>Calculating Damages:</strong> Once the full extent of the injuries is known, the
                  attorney can calculate damages.</li>
                <li><strong>Demand and Negotiation:</strong> The attorney may send a demand to the insurance
                  company or responsible party. From there, both sides may negotiate to try to reach a
                  fair settlement.</li>
                <li><strong>Filing a Lawsuit:</strong> If the case cannot be resolved through a settlement,
                  a lawsuit may be filed. This does not always mean the case will go to trial, but it does
                  move the case into the court system.</li>
                <li><strong>Discovery and Mediation:</strong> During discovery, both sides exchange
                  information, documents, and evidence. Many cases also go through mediation, where both
                  sides try to resolve the case before trial.</li>
                <li><strong>Trial or Settlement:</strong> Most personal injury cases settle before trial.
                  However, if both sides cannot agree, the case may go before a judge or jury, who will
                  decide the outcome.</li>
              </ol>

              <p>For a closer look at how civil cases move through the local system, the Florida Rules of
                Civil Procedure outline the formal process used in Florida courts. These rules help explain
                the steps that may happen after a personal injury claim is filed, including discovery,
                mediation, settlement procedures, and trial.</p>
              <p><a href="#" className="blog-inline-link">Florida Rules of Civil Procedure, The Florida Bar,
                effective April 1, 2026 | New Window | Opens PDF</a></p>

              <h3>The insurance company offered me a settlement. Should I take it?</h3>
              <p>Not always. A quick settlement may not account for the full impact of an injury. Insurance
                companies also have claims adjusters that will work to try and undervalue your claim. This
                is why we advise to never make any statement on record, as it could potentially be used
                against you later. Before you agree to anything, it's important to understand what your case
                is worth by sitting down with an <a href="#" className="blog-inline-link">experienced personal
                  injury lawyer</a>.</p>

              {/* Quote Callout Block */}
              <div className="blog-quote-callout">
                Remember: A fast settlement is not always a fair settlement.
              </div>

              <h2>Not sure where you are in the personal injury process?</h2>
              <p>A personal injury case can take time, especially if your injuries are still developing.
                Before you settle, make sure that the settlement accounts for the full extent of injuries,
                losses, future medical needs, and the pain and suffering caused by the accident. A local
                attorney like Hightower & Hightower can help you understand exactly where you stand and what
                your case may be worth. <a href="#" className="blog-inline-link">Contact Hightower & Hightower,
                  P.A. today</a> to schedule a consultation and get guidance on your next step.</p>
            </div>

            {/* Post Tags (filled when the post has tags) */}
            <div className="blog-tags" id="blog-tags" style={{ display: 'none' }}>
              <h3 className="blog-tags-title">Post Tags</h3>
              <div className="blog-tags-list" id="blog-tags-list"></div>
            </div>

            {/* Share This Story bar */}
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
