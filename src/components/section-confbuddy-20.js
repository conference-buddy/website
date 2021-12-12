import React from "react";

function ConfBuddy20Section() {
  return (
    <div className="container-fluid position-relative bg-bordered-wave">
      <div className="p-content-section" id="onPageLinkId-section-about">
        <div className="container">
          <div className="d-none d-sm-block text-center">
            <h2 className="display-4">Conference Buddy 2.0.</h2>
          </div>
          <div className="d-block d-sm-none text-center ">
            <h2>Conference Buddy 2.0.</h2>
          </div>
          <div className="pb-5 row justify-content-center">
            <div className="col col-lg-8">
              <h3 className="text-center">✨ Webapp in progress ✨</h3>
              <p>
                I'm actively working a release of a first MVP for a Conference
                Buddy web app! You can follow along the progress in the{" "}
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
            </div>
          </div>
          <div className="row col justify-content-center">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/conferencebuddy"
              method="post"
              name="email-subscribe"
              target="popupwindow"
              onSubmit="window.open('https://buttondown.email/conferencebuddy', 'popupwindow')"
            >
              {/*eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
              <label htmlFor="bd-email" className="sr-only">
                Enter your email
              </label>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="bd-email"
                  placeholder="Enter your email"
                  className="form-control"
                />

                <div className="input-group-append">
                  <input
                    className="btn btn-outline-secondary"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </div>
              <p className="text-center mt-2">
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
  );
}

export default ConfBuddy20Section;
