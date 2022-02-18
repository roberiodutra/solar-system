import React, { Component } from 'react';
import PropType from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropType.string,
};

Title.defaultProps = {
  headline: 'string',
};

export default Title;
