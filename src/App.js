import './App.css';
import logo from './images/logo.svg';
import mockup from './images/screen-mockups.svg';
import communities from './images/icon-communities.svg';
import messages from './images/icon-messages.svg';
import growTogether from './images/illustration-grow-together.svg';
import flowingConversations from './images/illustration-flowing-conversation.svg';
import yourUsers from './images/illustration-your-users.svg';
import footerLogo from './images/footer-logo.svg';
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';


function App() {
  return (
    <>
      <header>
        <img src={logo} alt="" />
        <button>Try it Free</button>
      </header>

      <div className='section1'>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. 
           You have a voice, but so does your audience. Create 
           connections with your users as you engage in genuine discussion. </p>
        <button type="submit">Get Started For Free</button>
        <img src={mockup} alt="" />
      </div>

      <div className='section2'>
        <div className='communities'>
          <img src={communities} alt="" />
          <h2>1.4k+</h2>
          <p>Communities Formed</p>
        </div>
        <div className='messages'>
          <img src={messages} alt="" />
          <h2>2.7m+</h2>
          <p>Messages Sent</p>
        </div>
      </div>

      
        <div className='sectionGT'>
          <div className='section3'>
            <div className='grow-together'>
                <h2>Grow Together</h2>
                <p>Generate meaningful discussions with your audience 
                  and build a strong, loyal community. Think of the 
                  insightful conversations you miss out on with a 
                  feedback form. </p>
            </div>
            <div className='grow-togetherImg'>
              <img src={growTogether} alt="" />
            </div>
          </div>
        </div>

      <div className='section4'>
        <div className='flowingConversationsImg'>
          <img src={flowingConversations} alt="" />
        </div>
        <div className='flowingConversations'>
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life,
             so why do it online? Our threads have just-in-time 
             loading for a more natural flow.</p>
        </div>
      </div>


      <div className='sectionYU'>
        <div className='section5'>
          <div className='yourUsers'>
            <h2>Your Users</h2>
            <p>It takes no time at all to integrate Huddle with your app's 
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.</p>
          </div>
          <div className='yourUsersImg'>
            <img src={yourUsers} alt="" />
          </div>
        </div>
      </div>


      <div className='section6'>
        <h2>Ready To Build Your Community?</h2>
        <button>Get Started For Free</button>
      </div>

      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-top'>

            <div className='footer1'>
              <img src={footerLogo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices
                quis sem.</p>
              <div className='phone'>
                <img src={phone} alt="" />
                <p>Phone: +1-543-123-4567</p>
              </div>
              <div className='email'>
                <img src={email} alt="" />
                <p>example@huddle.com</p>
              </div>
            </div>

            <div className='footer2'>
              <h2>Newsletter</h2>
              <p>To recieve tips on how to grow your community, 
                sign up to our weekly newsletter. We’ll never 
                send you spam or pass on your email address</p>
              <div className='subscribe-input'>
                <input type="email" required />
                <button type='submit'>Subscribe</button>
              </div>
            </div>
          </div>

          <div className='socials'>
            {/* facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}   viewBox="0 0 448 512">
              <path id='myPath' fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
            </svg>

            {/* instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 448 512">
                <path id='myPath' fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            
            {/* twitter */}
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 448 512">
                <path id='myPath' fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/>
              </svg>

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
