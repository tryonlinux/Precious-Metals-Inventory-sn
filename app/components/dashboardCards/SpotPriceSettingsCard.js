import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
//TODO Pass in saved prices and set as default for textboxes
//TODO save new prices to editor
class SpotPriceSettingsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      silverSpotPrice: 0.0,
      goldSpotPrice: 0.0,
      platinumSpotPrice: 0.0,
      palladiumSpotPrice: 0.0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
      {
        [name]: value,
      },
      () =>
        this.props.updateSpotPrices(
          this.state.silverSpotPrice,
          this.state.goldSpotPrice,
          this.state.platinumSpotPrice,
          this.state.palladiumSpotPrice
        )
    );
  }

  render() {
    return (
      <Row>
        <Col>
          <Form.Group controlId="silverSpotPrice">
            <Form.Label>Silver</Form.Label>
            <Form.Control
              type="text"
              placeholder="Silver"
              name="silverSpotPrice"
              value={this.state.silverSpotPrice}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="goldSpotPrice">
            <Form.Label>Gold</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gold"
              name="goldSpotPrice"
              value={this.state.goldSpotPrice}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="platinumSpotPrice">
            <Form.Label>Platinum</Form.Label>
            <Form.Control
              type="text"
              placeholder="Platinum"
              name="platinumSpotPrice"
              value={this.state.platinumSpotPrice}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="palladiumSpotPrice">
            <Form.Label>Palladium</Form.Label>
            <Form.Control
              type="text"
              placeholder="Palladium"
              name="palladiumSpotPrice"
              value={this.state.palladiumSpotPrice}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
    );
  }
}

export default SpotPriceSettingsCard;

SpotPriceSettingsCard.propTypes = {
  updateSpotPrices: PropTypes.func,
};
