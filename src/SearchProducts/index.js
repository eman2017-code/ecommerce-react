import React from "react";
import { Button, Modal, Icon, Search } from "semantic-ui-react";

class SearchProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }
  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;
    return (
      <div>
        <Button onClick={this.show("small")}>
          <Icon name="search" />
        </Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Search Products</Modal.Header>
          <Modal.Content>
            <Search></Search>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>Cancel</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Search"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default SearchProducts;
