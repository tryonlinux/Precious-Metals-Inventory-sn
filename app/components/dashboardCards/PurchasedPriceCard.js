import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Doughnut } from 'react-chartjs-2';
//TODO calculate and update  purchased price card

class PurchasedPriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPortfolio: 0.0,

      labels: ['Silver', 'Gold', 'Platinum', 'Palladium'],
      datasets: [
        {
          label: 'Metal',
          backgroundColor: ['#B3B6B7', '#F7DC6F', '#F4F6F6', '#D6EAF8'],
          hoverBackgroundColor: ['#7B7D7D', '#B7950B', '#AAB7B8', '#5DADE2'],
          data: [65, 59, 80, 81],
        },
      ],
    };
    this.buildPurchasedSpotPriceDoughnut =
      this.buildPurchasedSpotPriceDoughnut.bind(this);
  }

  buildPurchasedSpotPriceDoughnut() {}
  render() {
    return (
      <Col>
        <Card>
          <Card.Header>
            Original Spot Price Portfolio:${this.state.totalPortfolio}
          </Card.Header>
          <Card.Body>
            <Doughnut
              data={this.state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
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
