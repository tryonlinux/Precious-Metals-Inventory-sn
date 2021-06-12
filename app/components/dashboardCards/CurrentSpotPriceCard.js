import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Doughnut } from 'react-chartjs-2';
import {
  buildSpotPricesDoughnut,
  adddUpPortfolioSpotPrice,
} from '../../lib/DoughnutBuilder';
import PropTypes from 'prop-types';

class CurrentSpotPriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPortfolio: 0.0,
    };
    this.buildSpotPricesDoughnut = buildSpotPricesDoughnut.bind(this);
    this.adddUpPortfolioSpotPrice = adddUpPortfolioSpotPrice.bind(this);
    this.totalSpotPriceValue = this.totalSpotPriceValue.bind(this);
  }

  totalSpotPriceValue() {
    if (this.props.inventory !== undefined && this.props.inventory.length > 0) {
      this.setState({
        totalPortfolio: adddUpPortfolioSpotPrice(
          this.props.inventory,
          this.props.silverSpotPrice,
          this.props.goldSpotPrice,
          this.props.platinumSpotPrice,
          this.props.palladiumSpotPrice
        ),
      });
    } else {
      this.setState({
        totalPortfolio: 0.0,
      });
    }
  }
  componentDidMount() {
    this.totalSpotPriceValue();
  }

  render() {
    return (
      <Col>
        <Card>
          <Card.Header>
            Spot Price Portfolio:${this.state.totalPortfolio}
          </Card.Header>
          <Card.Body>
            <Doughnut
              data={buildSpotPricesDoughnut(
                this.props.inventory,
                this.props.silverSpotPrice,
                this.props.goldSpotPrice,
                this.props.platinumSpotPrice,
                this.props.palladiumSpotPrice
              )}
              options={{
                title: {
                  display: true,
                  text: 'Current Portfolio Value (spot)',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default CurrentSpotPriceCard;

CurrentSpotPriceCard.propTypes = {
  inventory: PropTypes.array,
  silverSpotPrice: PropTypes.number,
  goldSpotPrice: PropTypes.number,
  platinumSpotPrice: PropTypes.number,
  palladiumSpotPrice: PropTypes.number,
};
