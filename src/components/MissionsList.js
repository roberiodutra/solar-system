import React, { Component } from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class MissionsList extends Component {
  render() {
    return (
      <div>
        {missions.map((el) => (
          <MissionCard
            key={ el.name }
            name={ el.name }
            year={ el.year }
            country={ el.country }
            destination={ el.destination }
          />
        ))}
      </div>
    );
  }
}

export default MissionsList;
