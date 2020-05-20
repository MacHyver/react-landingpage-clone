import React from 'react';
import Insidescoop from './insidescoop.gif';
import dDishonesty from './dDishonesty.jpg';
import ExBoyTears from './ExBoyTears.jpg';
import LetterForLunch from './LetterForLunch.jpg';
import noPhoto from './noPhoto.jpg';
import flourCrowns from './flourCrowns.jpg';

/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/core';

const wholePageStyle = css`
  background: #d7f1e7 none no-repeat center/cover;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  height: auto;
  width: 100%;
  background-color: #d7f1e7;
  background-position: center;
  /* background-size: cover;
position: relative;
background-image: none;
background-repeat: no-repeat;
min-height: 100vh;
box-sizing: border-box 
;margin: 0 
;padding: 0  */
`;

const columnPageStyle = css`
background:transparent;
max-width:780px;
width: 100%;
flex: 0 0 auto;
background-position: center;
background-size: cover;
border-top: 0
border-bottom: 0;
padding-top: 0;
padding-bottom: 45px;
`;

const headerStyle = css`
  padding: 20px 40px;
  background: #d7f1e7;
  text-align: center;
  color: #008080;
  font-family: Helvetica;
  font-style: italic;
  font-size: 20px;
  font-weight: bold;
  line-height: 200%;
`;

const bodyStyle = css`
  background: #d7f1e7;
  text-align: center;
`;

const hTwoStyle = css`
  color: #f68b8b;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: bold, 700;
`;

const nameMailStyle = css`
  width: 25%;
  height: 20px;
  padding: 12px 20 px;
  margin: 0 0 24px;
  box-sizing: border-box;
  border: 2px solid #c9c9c9;
  border-radius: 3px;
  display: inline-block;
  vertical-align: middle;
`;

const buttonStyle = css`
  background-color: #f68b8b;
  color: white;
  width: 25%;
  height: 40px;
  padding: 12px 20 px;
  margin: 5px 0;
  box-sizing: border-box;
  border: 20px;
  border-radius: 2px;
`;

const bulletsStyle = css`
  color: #008080;
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: bold, 700;
`;

const greyStyle = css`
  color: #808080;
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: bold, 700;
`;

const hFourStyle = css`
  color: #f68b8b;
`;

function App() {
  return (
    <div className="App" css={columnPageStyle}>
      <div css={wholePageStyle}></div>
      <header css={headerStyle}>
        <p
          css={css`
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 40px;
          `}
        >
          You're invited to...
        </p>
        <div>
          <img src={Insidescoop} alt="inside scoop gif"></img>
        </div>
        <h1
          css={css`
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: bold, 700;
          `}
        >
          A free 5-day livestream event where I'll take you on a
          behind-the-scenes tour of my most successful passion projects!
        </h1>
        <br />
        <hr />
      </header>
      <main css={bodyStyle}>
        <section>
          <h2 css={hTwoStyle}>For each project I'll share...</h2>

          <div css={bulletsStyle}>
            <ul>
              <li>
                <strong> How I came up with each idea</strong> (plus how much
                time + money it took to bring it to life)
              </li>
              <li>
                <strong>
                  {' '}
                  The EXACT tangible outcomes each project led to
                </strong>
                (income, clients, followers, book deal, etc.)
              </li>
              <li>
                <strong>
                  What lessons I learned and what I'd do differently now
                </strong>
                (so you can learn from my mistakes)
              </li>
            </ul>
          </div>
          <p css={greyStyle}>
            <strong>
              These videos will only be available to watch for *1 week* after
              recording unless you register for this event via email, so don’t
              delay!
            </strong>
            If you register, you'll receive a link with lifetime access to the
            video playbacks, so you'll always have the inside scoop on my
            creative marketing strategies.
          </p>
          <h2 css={hTwoStyle}>
            <strong>Sign up to receive reminders & video playbacks!</strong>
          </h2>
          <ul>
            Email Address
            <br />
            <label for="mail"></label>
            <input
              type="email"
              id="mail"
              name="user_email"
              css={nameMailStyle}
            ></input>
            <br />
            First Name
            <br />
            <label for="firstName"></label>
            <input type="firstName" id="firstName" name="first_name"></input>
            <div class="button">
              <button type="submit" css={buttonStyle}>
                <strong>Sign me up for the scoop!</strong>
              </button>
            </div>
          </ul>

          <hr />
        </section>

        <section>
          <h2 css={hTwoStyle}>
            Here's a quick look at our inside scoop schedule:
          </h2>
          <section>
            <img
              src={dDishonesty}
              alt="book cover"
              css={css`
                float: left;
              `}
            ></img>
            <h3>Day 1 / May 6th at 12pm EST </h3>
            <a href="#" alt="lettering bloq and book">
              Daily Dishonesty
            </a>
            <p>
              In 2012, I started a lettering blog that chronicled all of the
              little white lies my friends and I told in college. Little did I
              know it would go viral and land me a book deal while I was still
              in school! This is the project that launched my lettering career &
              gave me the confidence to leave my full-time job to pursue
              freelance.
            </p>
          </section>
          <section>
            <img
              src={ExBoyTears}
              alt="the Ex Boyfriend Tears flasq"
              css={css`
                float: left;
              `}
            ></img>
            <h3>Day 2 / May 7th at 12pm EST </h3>
            <a href="#" alt="Story behind the ex Boyfriend Tears">
              Ex Boyfriend Tears
            </a>
            <p>
              A particular nasty break up inspired a line of cups and flasks
              called Ex Boyfriend Tears. I was originally only planning on
              producing about 50 for fun, but they got shared like crazy
              online...and I ended up selling over 600 of them. Nasty Gal (RIP)
              bought a wholesale order from me, and Urban Outfitters even ripped
              me off!
            </p>
          </section>
          <section>
            <img
              src={LetterForLunch}
              alt="me doing lettering in resti"
              css={css`
                float: left;
              `}
            ></img>
            <h3> Day 3 / May 8th at 12pm EST</h3>
            <a href="#" alt="Lecture about the letter for lunch">
              Will Letter for Lunch
            </a>
            <p>
              I started bartering restaurant chalkboard menus for the exact menu
              items I lettered. Within 1 year, I had practiced lettering and
              eaten delicious free food at over 30 restaurants in New York City.
              Plus, I built my chalk lettering portfolio up and landed projects
              with Chobani, Samuel Adams, and Microsoft as a result.
            </p>
          </section>
          <section>
            <img
              src={noPhoto}
              alt="lettering the nice view"
              css={css`
                float: left;
              `}
            ></img>
            <h3>Day 4 / may 9th at 12pm EST</h3>
            <a href="#" alt="travel, draw and get tons of followers">
              No Photos Please
            </a>
            <p>
              For all of 2016, I traveled and worked around the world. In order
              to spend less time looking at a screen, I challenged myself to
              document my trip in travel drawings. I lettered my way around the
              world and shared my drawings, not travel pics, on social media.
              The result? Improved drawing skills and tons of new followers!
            </p>
          </section>
          <section>
            <img
              src={flourCrowns}
              alt="inside scoop gif"
              css={css`
                float: left;
                width: 500px;
                align-self: center;
                max-width: 100%;
                box-shadow: none;
                border: 0;
                height: auto;
                outline: none;
                vertical-align: bottom;
              `}
            ></img>
            <h3>Day 5 / May 10th at 12pm EST</h3>
            <a href="#" alt="my first step into the food world">
              Flour Crowns
            </a>
            <p>
              I decided to take a pun way too far and put flours instead of
              flowers in my hair. Why? Mostly for fun, but also to become more
              associated with the food world because I knew I wanted to work on
              a cookbook in the future. This was a delicious baby step in that
              direction without distracting from my lettering career too much.
            </p>
          </section>
          <hr />
        </section>
        <section>
          <img src={Insidescoop} alt="inside scoop gif"></img>
          <h4 css={hFourStyle}>A lil' bit about me!</h4>
          <p>
            Hello! My name is Lauren Hom, and I'm a designer & letterer who's
            used passion projects to shape her career (and teaches others how to
            do the same). In 2014, I left my 9-to-5 job in advertising to start
            my own creative studio, Hom Sweet Hom. Since then, I've designed for
            clients like Google, Starbucks, and TIME Magazine, and my work has
            been recognized by the Type Directors Club, Communication Arts, and
            the Webby Awards. My motto is, and always will be, "Work hard, snack
            often."
          </p>

          <p>facebook Twitter insta</p>

          <hr />
        </section>
      </main>
    </div>
  );
}

export default App;
