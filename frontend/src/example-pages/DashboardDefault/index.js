// @packages
import React, { PureComponent } from 'react';
import { getDashboardContent } from '../../actions/dashboard';

// @scripts
import DashboardDefault from './dashboard';

class DashboardDefaultContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      isFetching: false
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    this.setState({ isFetching: true });
    getDashboardContent()
      .then(content => {
        this.setState({
          content,
          isFetching: false
        });
      })
      .catch(error => {
        this.setState({
          content: error.toString(),
          isFetching: false
        });
      });
  }

  render() {
    const { content, isFetching } = this.state;
    return (
      <DashboardDefault
        content={content}
        isFetching={isFetching}
        onGetData={this.getData}
      />
    );
  }
}

export default DashboardDefaultContainer;
