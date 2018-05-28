import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <section className="bg-white">
      <div className="container text-center">
        <h2 className="section-heading text-uppercase">Join Our Newsletter</h2>
        {/* Begin MailChimp Signup Form */}
        <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
        <div id="mc_embed_signup">
          <form action="https://coolwebsite.us12.list-manage.com/subscribe/post?u=d85f808a9af64d58bbb1fa212&amp;id=344d2f93f1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" rel="noopener noreferrer" noValidate>
            <div id="mc_embed_signup_scroll">
              {/* Do not remove this or risk form bot signups */}
              <div style={{ position: "absolute", left: "-5000px", ariaHidden: "true" }}>
                <input type="text" name="b_d85f808a9af64d58bbb1fa212_344d2f93f1" tabIndex="-1" value="" />
              </div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-yellow btn-xl text-uppercase" />
              </div>
            </div>
          </form>
        </div>
        {/* End MailChimp Signup Form */}
      </div>
    </section>
  )
}

export default NewsLetter;