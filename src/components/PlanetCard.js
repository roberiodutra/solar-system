import React, { Component } from 'react';
import PropType from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string,
  planetImage: PropType.string,
};

PlanetCard.defaultProps = {
  planetName: 'name',
  planetImage: 'image',
};

export default PlanetCard;
