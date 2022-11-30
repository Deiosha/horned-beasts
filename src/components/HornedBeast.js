import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1

    });

  }

  render() {
    return (
      <>
        <Card onClick={this.handleClick}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.imageUrl} />
          <Card.Body>Number of Clicks: {this.state.clickCount}</Card.Body>
        </Card>

      </>
    );
  }
}

export default HornedBeast;