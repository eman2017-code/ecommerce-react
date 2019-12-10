import React from "react";
import { Form, Button, Label, Header, Modal } from "semantic-ui-react";

class EditProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      name: "",
      description: "",
      category: ""
    };
  }

  componentDidMount() {
    // this does add a few extra properties to state
    // component did mount mounts data to form
    this.setState({
      picture: this.props.courseToEdit.picture,
      name: this.props.courseToEdit.name,
      description: this.props.courseToEdit.description,
      category: this.props.courseToEdit.category
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault(); // no page reload
    this.props.updateProduct(this.state);
  };

  render() {
    return (
      <Modal
        open={this.props.editModalOpen}
        closeIcon
        onClose={this.props.closeModal}
      >
        <Header>Edit Product</Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Label> picture: </Label>
            <Form.Input
              type="text"
              name="picture"
              value={this.state.picture}
              onChange={this.handleChange}
            />

            <Label> name: </Label>
            <Form.Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <Label> description: </Label>
            <Form.Input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <Label> category: </Label>
            <Form.Input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            />

            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
export default EditProductModal;
