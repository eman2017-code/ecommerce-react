import React from "react";
import ListProductAdmin from "../ListProductAdmin";
import App from "../App";
import EditProductModal from "../EditProductModal";

class ProductFunctionalityAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loggedInUser: this.props.loggedInUser,
      addProduct: false,
      productToEdit: {
        picture: "",
        name: "",
        description: "",
        category: ""
      },
      editProductModal: false
    };
  }

  componentDidMount() {
    this.getProducts();
    console.log("this.state");
    console.log(this.state);
  }

  // create method that will loop through all of the products
  getProducts = async () => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL +
          "/api/v1/products/my_items/" +
          this.state.loggedInUser.id,
        {
          // cookie session
          credentials: "include"
        }
      );
      // convert them into json
      const parsedProducts = await products.json();

      this.setState({
        products: parsedProducts.data
      });
    } catch (err) {}
  };

  // method to delete a product
  deleteProduct = async id => {
    const deletedProductResponse = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/products/" + id,
      {
        credentials: "include",
        method: "DELETE"
      }
    );
    // convert into json
    const deletedProductParsed = await deletedProductResponse.json();
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    });
  };

  // method to edit product
  editProduct = idOfProductToEdit => {
    console.log("you are hitting the edit button");
    const productToEdit = this.state.products.find(
      product => product.id === idOfProductToEdit
    );
    this.setState({
      editCourseModal: true,
      idOfProductToEdit: productToEdit.id,
      productToEdit: {
        ...productToEdit
      }
    });
  };

  // method to handle the change
  handleEditChange = e => {
    this.setState({
      productToEdit: {
        ...this.state.productToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };

  // actually update the product
  updateProduct = async newProductInfo => {
    try {
      // hit our API to actually update it
      const url =
        process.env.REACT_APP_API_URL +
        "/api/v1/products/" +
        this.state.idOfProductToEdit;

      const updateResponse = await fetch(url, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(newProductInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const updateResponseParsed = await updateResponse.json();

      const newProductArrayWithUpdate = this.state.products.map(product => {
        if (product.id === updateResponseParsed.data.id) {
          // replace it if it's that one course
          product = updateResponseParsed.data;
        }
        return product;
      });

      this.setState({
        editProductModal: false,
        products: newProductArrayWithUpdate
      });
      // close the modal
      this.closeModal();
    } catch (err) {}
  };

  // closing edit modal
  closeModal = () => {
    this.setState({
      editProductModal: false
    });
  };

  render() {
    return (
      <div>
        <ListProductAdmin
          products={this.state.products}
          deleteProduct={this.deleteProduct}
          editProduct={this.editProduct}
        />
        {this.state.editProductModal ? (
          <EditProductModal
            editModalOpen={this.state.editProductModal}
            updateProduct={this.updateProduct}
            productToEdit={this.state.productToEdit}
          />
        ) : null}
      </div>
    );
  }
}

export default ProductFunctionalityAdmin;
