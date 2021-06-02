import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import SpotPriceSettingsCard from './dashboardCards/SpotPriceSettingsCard';
import CurrentSpotPriceCard from './dashboardCards/CurrentSpotPriceCard';
import PurchasedPriceCard from './dashboardCards/PurchasedPriceCard';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      silverSpotPrice: 0.0,
      goldSpotPrice: 0.0,
      platinumSpotPrice: 0.0,
      palladiumSpotPrice: 0.0,
    };
    this.updateSpotPrices = this.updateSpotPrices.bind(this);
  }
  updateSpotPrices(
    silverSpotPrice,
    goldSpotPrice,
    platinumSpotPrice,
    palladiumSpotPrice
  ) {
    this.setState({
      silverSpotPrice,
      goldSpotPrice,
      platinumSpotPrice,
      palladiumSpotPrice,
    });
  }
  //TODO add card for purchasedSpotPrice over purchased price
  render() {
    return (
      <div>
        <SpotPriceSettingsCard
          updateSpotPrices={this.updateSpotPrices}
          silverSpotPrice={this.state.silverSpotPrice}
          goldSpotPrice={this.state.goldSpotPrice}
          platinumSpotPrice={this.state.platinumSpotPrice}
          palladiumSpotPrice={this.state.palladiumSpotPrice}
        />

        <Row>
          <CurrentSpotPriceCard
            silverSpotPrice={this.state.silverSpotPrice}
            goldSpotPrice={this.state.goldSpotPrice}
            platinumSpotPrice={this.state.platinumSpotPrice}
            palladiumSpotPrice={this.state.palladiumSpotPrice}
            inventory={this.props.inventory}
          />
          <PurchasedPriceCard
            silverSpotPrice={this.state.silverSpotPrice}
            goldSpotPrice={this.state.goldSpotPrice}
            platinumSpotPrice={this.state.platinumSpotPrice}
            palladiumSpotPrice={this.state.palladiumSpotPrice}
            inventory={this.props.inventory}
          />
        </Row>
      </div>
    );
  }
}

export default Dashboard;

Dashboard.propTypes = {
  inventory: PropTypes.array,
};
