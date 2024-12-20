import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Contact7 = (props) => {
  return (
    <>
      <div className="contact7-container1 thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content1 thq-flex-row">
            <div className="contact7-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact7-text21">Contact Us</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact7-text17">
                      For general inquiries and catering bookings, please
                      contact our main office.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact7-content3 thq-flex-row">
            <div className="contact7-container2">
              <img
                alt={props.location1ImgAlt}
                src={props.location1ImgSrc}
                className="contact7-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text12 thq-heading-3">
                {props.location1 ?? (
                  <Fragment>
                    <span className="contact7-text20">Main Office</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location1Description ?? (
                  <Fragment>
                    <span className="contact7-text19">
                      123 South Indian Cuisine Street, Chennai, India
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="contact7-container4">
              <img
                alt={props.location2ImgAlt}
                src={props.location2ImgSrc}
                className="contact7-image2 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text14 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact7-text16">Customer Support</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location2Description ?? (
                  <Fragment>
                    <span className="contact7-text18">
                      For any assistance or support regarding your catering
                      orders, reach out to our customer support team.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact7-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-flat thq-body-small"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact7-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content1 {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .contact7-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image1 {
            object-fit: cover;
          }
          .contact7-text12 {
            text-align: center;
          }
          .contact7-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image2 {
            object-fit: cover;
          }
          .contact7-text14 {
            text-align: center;
          }
          .contact7-container5 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-text16 {
            display: inline-block;
          }
          .contact7-text17 {
            display: inline-block;
          }
          .contact7-text18 {
            display: inline-block;
          }
          .contact7-text19 {
            display: inline-block;
          }
          .contact7-text20 {
            display: inline-block;
          }
          .contact7-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact7-content3 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact7-image1 {
              width: 100%;
            }
            .contact7-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  location2ImgAlt: 'Customer Support Image',
  location2: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1613109040825-b5f764066305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzg1ODM2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImgAlt: 'Main Office Image',
  content1: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1679022582623-95742509bce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzg1ODM2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  heading1: undefined,
}

Contact7.propTypes = {
  location2ImgAlt: PropTypes.string,
  location2: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  location1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact7
