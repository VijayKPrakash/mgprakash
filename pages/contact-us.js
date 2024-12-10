import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar4 from '../components/navbar4'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer1 from '../components/footer1'

const ContactUs = (props) => {
  return (
    <>
      <div className="contact-us-container">
        <Head>
          <title>ContactUs - Spotless Hungry Crocodile</title>
          <meta
            property="og:title"
            content="ContactUs - Spotless Hungry Crocodile"
          />
        </Head>
        <Navbar4
          link1={
            <Fragment>
              <span className="contact-us-text10">Home</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="contact-us-text11">Contact</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="contact-us-text12">Request Catering</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-us-text13">Menu</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-us-text14">Catering</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-us-text15">Testimonials</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-us-text16">Customize Menu</span>
            </Fragment>
          }
        ></Navbar4>
        <ContactForm3
          content2={
            <Fragment>
              <span className="contact-us-text17">Get in touch with us</span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="contact-us-text18">Submit</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-us-text19">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text22">Contact us</span>
            </Fragment>
          }
        ></ContactForm3>
        <Contact14
          link1={
            <Fragment>
              <span className="contact-us-text23">Start new chat</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-us-text24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text25">Contact Us</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-us-text26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="contact-us-text27">Office</span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="contact-us-text28">
                123 Main Street, City, State, Zip Code
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="contact-us-text29">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="contact-us-text30">Phone</span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="contact-us-text31">(123) 456-7890</span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-us-text32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="contact-us-text33">Live Chat</span>
            </Fragment>
          }
          email1={
            <Fragment>
              <span className="contact-us-text34">
                info@mgprakashcatering.com
              </span>
            </Fragment>
          }
        ></Contact14>
        <Contact7
          location2={
            <Fragment>
              <span className="contact-us-text35">Customer Support</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-us-text36">
                For general inquiries and catering bookings, please contact our
                main office.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="contact-us-text37">
                For any assistance or support regarding your catering orders,
                reach out to our customer support team.
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="contact-us-text38">
                123 South Indian Cuisine Street, Chennai, India
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="contact-us-text39">Main Office</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-us-text40">Contact Us</span>
            </Fragment>
          }
        ></Contact7>
        <Footer1
          column2Title={
            <Fragment>
              <span className="contact-us-text41">Explore</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="contact-us-text42">FAQs</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="contact-us-text43">Testimonials</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="contact-us-text44">Request a Quote</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-us-text45">/contact</span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-us-text46">
                &amp;copy; 2023 M G Prakash Catering. All rights reserved.
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-us-text47">Pricing</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="contact-us-text48">Cookies Settings</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-us-text49">
                Connect with us on social media for more updates and offers.
              </span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="contact-us-text50">Terms of Service</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="contact-us-text51">About Us</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="contact-us-text52">Home</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="contact-us-text53">Privacy Policy</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="contact-us-text54">Privacy Policy</span>
            </Fragment>
          }
          column1Title={
            <Fragment>
              <span className="contact-us-text55">Contact Us</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="contact-us-text56">Terms of Service</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-us-text57">Catering Events</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-us-text58">Menu</span>
            </Fragment>
          }
          socialLinkTitleCategory={
            <Fragment>
              <span className="contact-us-text59">Connect with us</span>
            </Fragment>
          }
        ></Footer1>
      </div>
      <style jsx>
        {`
          .contact-us-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-us-text10 {
            display: inline-block;
          }
          .contact-us-text11 {
            display: inline-block;
          }
          .contact-us-text12 {
            display: inline-block;
          }
          .contact-us-text13 {
            display: inline-block;
          }
          .contact-us-text14 {
            display: inline-block;
          }
          .contact-us-text15 {
            display: inline-block;
          }
          .contact-us-text16 {
            display: inline-block;
          }
          .contact-us-text17 {
            display: inline-block;
          }
          .contact-us-text18 {
            display: inline-block;
          }
          .contact-us-text19 {
            display: inline-block;
          }
          .contact-us-text22 {
            display: inline-block;
          }
          .contact-us-text23 {
            display: inline-block;
          }
          .contact-us-text24 {
            display: inline-block;
          }
          .contact-us-text25 {
            display: inline-block;
          }
          .contact-us-text26 {
            display: inline-block;
          }
          .contact-us-text27 {
            display: inline-block;
          }
          .contact-us-text28 {
            display: inline-block;
          }
          .contact-us-text29 {
            display: inline-block;
          }
          .contact-us-text30 {
            display: inline-block;
          }
          .contact-us-text31 {
            display: inline-block;
          }
          .contact-us-text32 {
            display: inline-block;
          }
          .contact-us-text33 {
            display: inline-block;
          }
          .contact-us-text34 {
            display: inline-block;
          }
          .contact-us-text35 {
            display: inline-block;
          }
          .contact-us-text36 {
            display: inline-block;
          }
          .contact-us-text37 {
            display: inline-block;
          }
          .contact-us-text38 {
            display: inline-block;
          }
          .contact-us-text39 {
            display: inline-block;
          }
          .contact-us-text40 {
            display: inline-block;
          }
          .contact-us-text41 {
            display: inline-block;
          }
          .contact-us-text42 {
            display: inline-block;
          }
          .contact-us-text43 {
            display: inline-block;
          }
          .contact-us-text44 {
            display: inline-block;
          }
          .contact-us-text45 {
            display: inline-block;
          }
          .contact-us-text46 {
            display: inline-block;
          }
          .contact-us-text47 {
            display: inline-block;
          }
          .contact-us-text48 {
            display: inline-block;
          }
          .contact-us-text49 {
            display: inline-block;
          }
          .contact-us-text50 {
            display: inline-block;
          }
          .contact-us-text51 {
            display: inline-block;
          }
          .contact-us-text52 {
            display: inline-block;
          }
          .contact-us-text53 {
            display: inline-block;
          }
          .contact-us-text54 {
            display: inline-block;
          }
          .contact-us-text55 {
            display: inline-block;
          }
          .contact-us-text56 {
            display: inline-block;
          }
          .contact-us-text57 {
            display: inline-block;
          }
          .contact-us-text58 {
            display: inline-block;
          }
          .contact-us-text59 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default ContactUs
