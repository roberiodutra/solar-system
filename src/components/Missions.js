import React, { Component } from 'react';
import Title from './Title';
import MissionsList from './MissionsList';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionsList />
      </div>
    );
  }
}

export default Missions;
