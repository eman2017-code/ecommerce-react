// import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Route from "react-router-dom/Route";
// import { Button, Icon, Card, Image, Container } from "semantic-ui-react";
// import SearchProducts from "../SearchProducts";
// import RegisterLogin from "../RegisterLogin";

// class AdminMyAccountPage extends React.Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h3>ecommerce site</h3>
//         <div className="top">
//           <Button secondary>Wish List</Button>
//           <Link to="/register-login">
//             <Button secondary>My Account</Button>
//           </Link>
//         </div>
//         <p>logo</p>
//         <div className="nav">
//           <Button>
//             <Icon name="shopping cart" />
//           </Button>
//           <SearchProducts />

//           <Link to="/home">
//             <Button secondary>Home</Button>
//           </Link>
//           <Link to="/products">
//             <Button secondary>Products</Button>
//           </Link>
//           <Route
//             path="/register-login"
//             exact
//             strict
//             component={RegisterLogin}
//           />
//         </div>
//         <Card>
//           <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
//           <Card.Content>
//             <Card.Header> -- insert admin/business name here --</Card.Header>
//           </Card.Content>
//         </Card>
//         <Button secondary>Log Out</Button>
//         <Container>
//           <ul>
//             <li>product 1</li>
//             <li>product 2</li>
//             <li>product 3</li>
//             <li>product 4</li>
//           </ul>
//         </Container>
//       </div>
//     );
//   }
// }

// export default AdminMyAccountPage;
