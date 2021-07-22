import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

class SpotPriceSettingsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      silverSpotPrice: this.props.silverSpotPrice
        ? this.props.silverSpotPrice
        : 0.0,
      goldSpotPrice: this.props.goldSpotPrice ? this.props.goldSpotPrice : 0.0,
      platinumSpotPrice: this.props.platinumSpotPrice
        ? this.props.platinumSpotPrice
        : 0.0,
      palladiumSpotPrice: this.props.palladiumSpotPrice
        ? this.props.palladiumSpotPrice
        : 0.0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.moneyValidation = this.moneyValidation.bind(this);
    this.updateSpots = this.updateSpots.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  updateSpots() {
    this.props.updateSpotPrices(
      this.moneyValidation(this.state.silverSpotPrice),
      this.moneyValidation(this.state.goldSpotPrice),
      this.moneyValidation(this.state.platinumSpotPrice),
      this.moneyValidation(this.state.palladiumSpotPrice)
    );
  }
  //TODO: Do input validation here and return 0 if bad
  moneyValidation(value) {
    return parseFloat(value);
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
              onBlur={this.updateSpots}
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
              onBlur={this.updateSpots}
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
              onBlur={this.updateSpots}
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
              onBlur={this.updateSpots}
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
  silverSpotPrice: PropTypes.number,
  goldSpotPrice: PropTypes.number,
  platinumSpotPrice: PropTypes.number,
  palladiumSpotPrice: PropTypes.number,
};
