// @scripts
import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import React, { Fragment, useEffect } from 'react';
import { PageTitle } from '../../layout-components';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

const DashboardDefault = ({ content, isFetching, onGetData }) => {
  useEffect(onGetData, [onGetData]);

  const renderTitle = () =>
    isFetching ? (
      <div>
        <span>Fetching data from API...</span>
        <Spinner color="#3c44b1" size="sm" />
      </div>
    ) : (
      <PageTitle titleHeading="Default" titleDescription={content} />
    );

  return (
    <Fragment>
      {renderTitle()}
      <DashboardDefaultSection1 />
      <DashboardDefaultSection2 />
      <DashboardDefaultSection3 />
      <DashboardDefaultSection4 />
    </Fragment>
  );
};

DashboardDefault.proTypes = {
  content: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onGetData: PropTypes.func.isRequired
};

export default DashboardDefault;
