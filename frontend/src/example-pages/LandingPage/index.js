import React, { Fragment } from 'react';

import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-9.jpg';
import { Button } from 'reactstrap';

const LandingPage = () => {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-skim-blue opacity-2" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        BEST.WEB.FIRMS
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        More than 1,700 web design companies, web development
                        companies, seo marketing agencies and web service
                        providers personally researched, tested, reviewed and
                        ranked by experts with decades of experience in each
                        individual industry.
                      </p>
                      <p className="text-white font-size-lg">
                        Check out the live preview to see all the available
                        components in action!
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          tag={Link}
                          to="/DashboardDefault"
                          size="lg"
                          color="success"
                          className="d-block d-sm-inline-block"
                          title="View Bamburgh React Admin Dashboard with Reactstrap Free Live Preview">
                          <span className="btn-wrapper--label">Live Demo</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                      </div>
                      <small className="d-block pt-4">
                        For a comprehensive list of components &amp; commercial
                        licenses, we recommend the PRO version.
                      </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
