import React from 'react'
import CardSpecialOffer from '../components/card-special-offer'

<CardSpecialOffer
  title="Win a ticket for code.talks in Hamburg!"
  text="cardtext"
  disclaimerText="As this project is all about enabling and empowering
        others through being a Buddy, please only take part in the
        raffle if you either want to be or want to have a
        Conference Buddy. Thanks ❤️"
>
  <p className="px-3">
    Thanks to one of the early adopters you've the chance to{' '}
    <strong>
      win a ticket for the{' '}
      <a href="https://www.codetalks.de/">code.talks</a> conference
    </strong>{' '}
    in Hamburg from October 18-19! And there's already one Conference
    Buddy for that conference if you would feel better with support -
    best way to start, right?
  </p>
  <h4 className="h5">How to take part at the raffle</h4>
  <ul>
    <li>Sign up at the forum until 30.09.2018.</li>
    <li>
      Find the post about the <strong>code.talks</strong> conference.
    </li>
    <li>
      Reply to the post with a short introduction.{' '}
      <sup className="text-secondary">(*)</sup>
    </li>
    <li>Winners will be drawn random from all replies.</li>
  </ul>
</CardSpecialOffer>
