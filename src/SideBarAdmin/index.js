import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
// import ProductFunctionalityAdmin from "../ProductFunctionalityAdmin";

class SideBarAdmin extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      addProduct: false
    };
  }

  componentDidMount() {
    console.log("this.state.products");
    console.log(this.state.products);
    this.getProducts();
  }

  // create function to see all the products that are in th database
  getProducts = async () => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL + "/api/v1/products/",
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

  // method to create a product
  addProduct = async (e, productFromForm) => {
    //prevents the browser from reloading when an event is called...
    e.preventDefault();
    try {
      //Call the array of all of the courses in the DB.
      const createdProductResponse = await fetch(
        process.env.REACT_APP_API_URL + "/api/v1/products/",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(productFromForm),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const parsedResponse = await createdProductResponse.json();
      this.setState({
        products: [...this.state.products, parsedResponse.data]
      });

      // this.setState({
      //   addProduct: false
      // });
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <ListItem button onClick={this.addProduct}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Add Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="See Your Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </div>
    );
  }
}

export default SideBarAdmin;
