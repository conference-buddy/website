import React from "react";

function AboutSection() {
  return (
    <div className="container-fluid position-relative bg-bordered-wave">
      <div className="p-content-section" id="onPageLinkId-section-about">
        <div className="container">
          <div className="d-none d-sm-block">
            <h2 className="display-4">
              What is <strong>Conference Buddy</strong>?
            </h2>
          </div>
          <div className="d-block d-sm-none">
            <h2>What is Conference Buddy?</h2>
          </div>
          <div className="row pt-3">
            <div className="col-md-6">
              <h3>What does it do?</h3>
              <p>
                Conference Buddy provides a platform to find{" "}
                <strong>companions for tech conferences</strong>. You can look
                for one or more person with whom you can attend a conference{" "}
                <strong>together</strong>. Support each other, find a familiar
                face between all these strangers. You will feel more at ease and
                comfortable just knowing you’re not alone.
              </p>
              <p>
                At the same time, you have the opportunity to{" "}
                <strong>help others</strong> to feel better! Let’s make tech
                events more approachable - one Buddy at a time.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Who can use it?</h3>
              <p>
                That's pretty simple: <strong>Everyone</strong> who feels like a
                bit of support at tech events would help them feel more at ease.
                At the same time it's for all you great folks out there who
                want's to be that kind of support!
              </p>
              <p>
                It doesn't matter if it's your first time or if you're an
                international speaker: You feel nervous or anxious about being
                around a lot of (stranger) people and interacting with them?
                Conference Buddy wants to help you{" "}
                <strong>feel more comfortable</strong>!
              </p>
              <p />
            </div>
          </div>

          <div className="text-center pt-3 pb-5">
            <div className="col">
              <h2>Conference Buddy 2.0 is coming!</h2>
              <p>
                I'm actively working a release of a Conference Buddy web app!
                You can follow along the progress in the{" "}
                <a href="https://github.com/conference-buddy/conference-buddy-web-app#readme">
                  github
                </a>
                !
              </p>
              <p>
                If you want to be informed about the most important milestones -
                alpha release and, of course, the real release - you can sign up
                to my mailing list.
              </p>
              <form
                action="https://buttondown.email/api/emails/embed-subscribe/conferencebuddy"
                method="post"
                target="popupwindow"
                onsubmit="window.open('https://buttondown.email/conferencebuddy', 'popupwindow')"
                class="embeddable-buttondown-form"
              >
                <label for="bd-email">
                  Enter your email
                  <input type="email" name="email" id="bd-email" />
                </label>
                <input
                  className="btn btn-custom btn-primary"
                  type="submit"
                  value="Subscribe"
                />
                <p>
                  <a
                    href="https://buttondown.email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Powered by Buttondown.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
