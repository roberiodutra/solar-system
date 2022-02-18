import React, { Component } from 'react';
import PropType from 'prop-types';

class MissionCard extends Component {
  render() {
    const { destination, country, year, name } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  destination: PropType.string,
  country: PropType.string,
  year: PropType.string,
  name: PropType.string,
};

MissionCard.defaultProps = {
  destination: 'destination.isRequired',
  country: 'country.isRequired',
  year: 'year.isRequired',
  name: 'name.isRequired',
};

export default MissionCard;
