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
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
