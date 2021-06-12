import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { buildPurchasePriceDoughnut } from '../../lib/DoughnutBuilder';

class PurchasedPriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPortfolio: 0.0,
    };
    this.buildPurchasePriceDoughnut = buildPurchasePriceDoughnut.bind(this);
    this.totalPurchased = this.totalPurchased.bind(this);
  }
  componentDidMount() {
    this.totalPurchased();
  }

  totalPurchased() {
    let total = 0;
    if (this.props.inventory !== undefined && this.props.inventory.length > 0) {
      this.props.inventory.forEach((item) => {
        total += parseFloat(item.purchasedAmount);
      });
      this.setState({
        totalPortfolio: (Math.round(total * 100) / 100).toLocaleString(),
      });
    } else {
      this.setState({
        totalPortfolio: total,
      });
    }
  }

  render() {
    return (
      <Col>
        <Card>
          <Card.Header>
            Original Purchased Price Portfolio:${this.state.totalPortfolio}
          </Card.Header>
          <Card.Body>
            <Doughnut
              data={buildPurchasePriceDoughnut(this.props.inventory)}
              options={{
                title: {
                  display: true,
                  text: 'Portfolio Purchased Price',
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

export default PurchasedPriceCard;

PurchasedPriceCard.propTypes = {
  inventory: PropTypes.array,
};
