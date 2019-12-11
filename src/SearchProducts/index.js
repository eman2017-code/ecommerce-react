import React, { Component } from "react";
import {
  Segment,
  Container,
  Form,
  Card,
  Dimmer,
  Loader,
  Header
} from "semantic-ui-react";
import ListProductUser from "../ListProductUser";

// component imports
class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      // result of products
      results: [],
      // if the search results are still loading
      isLoading: false
    };
  }

  componentDidMount() {
    console.log("props -- searchContainer");
    console.log(this.props);
  }

  // handles the change for the search input
  handleChange = e => {
    // sets the state for the value property
    this.setState({
      value: e.target.value
    });
    // calls function to make api call to show search results
    this.getResults();
  };

  // makes an api call to get the search results
  getResults = async () => {
    try {
      // changing the loading icon to spinning
      this.setState({ isLoading: true });

      // makes api call to get the search results
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/products/find",
        {
          method: "POST",
          body: JSON.stringify({ value: this.state.value }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      // parses the response
      const parsedResponse = await response.json();
      // set the search results in that state and isLoading back to false
      // to display the results and hide the loading icon
      this.setState({
        results: [...parsedResponse.data],
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  addToCart = async productId => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/carts/" + productId,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(productId),
          header: {
            "Content-Type": "application/json"
          }
        }
      );
      const parsedResponse = await response.json();
      console.log("parsedResponse");
      console.log(parsedResponse);
    } catch (err) {}
  };

  render() {
    console.log("this.props -- searchProducts");
    console.log(this.props);
    return (
      <Container id="find-container">
        <Segment id="find-segment">
          <Header as="h3">Find Products</Header>
          <Form.Input
            type="text"
            id="search-input"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search For Products..."
            autoComplete="off"
          />
          {this.state.isLoading === true ? (
            <Loader active />
          ) : (
            <ListProductUser
              addToCart={this.addToCart}
              products={this.state.results}
            />
          )}
        </Segment>
      </Container>
    );
  }
}
export default SearchContainer;
