import React from "react"
import Layout from '../components/layout'
import DividerHeading from '../components/divider_heading'

export default () => (
  <div>
    <Layout>
      <div className='layoutTopPadding'></div>
      <DividerHeading headerText={'Booking Request'} />
      <div id="booking-form">
        <form name="booking" method="POST" data-netlify="true">
          <p>
            <label><input type="text" name="name" placeholder="your name..." /></label>   
          </p>
          <p>
            <label><input type="email" name="email" placeholder="your email..." /></label>
          </p>
          <p>
            <label><textarea name="message" placeholder="type us a message here..."></textarea></label>
          </p>
          <p>
            <button className="btn" type="submit">Send Booking Request</button>
          </p>
        </form>
      </div>
      <DividerHeading headerText={'Mailing List'} />
      <div id="mailing-list-container">
        <form name="mailing-list" method="POST" data-netlify="true">
          <input type="email" name="email" placeholder="your email..." />
          <button className="btn" type="submit">Join Mailing List</button>
        </form>
      </div>
    </Layout>
  </div>
)