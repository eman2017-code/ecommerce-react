import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class CreateProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      picture: "",
      name: "",
      price: "",
      description: "",
      category: ""
    };
  }

  handleChange = e => {
    // es6 computed properties [e.currentTarget.name]
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <Segment>
        <h4>Create Product</h4>
        <Form onSubmit={e => this.props.addProduct(e, this.state)}>
          <Form.Input
            type="text"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <Form.Input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Product</Button>
        </Form>
      </Segment>
    );
  }
}

export default CreateProduct;
