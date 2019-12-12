import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

function ListProductUser(props) {
  console.log("\nthis is props.products");
  console.log(props.products);
  console.log(props);
  const products = props.products.map(product => {
    return (
      <Card key={product.id}>
        <Image src={product.picture} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Description>{product.description}</Card.Description>
          {/* <Card.Description>{product.price}</Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <h4>$ {product.price}</h4>
          <Button onClick={() => props.addToCart(product.id)}>
            Add to Cart
          </Button>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group>{products}</Card.Group>;
}

export default ListProductUser;

// import React from "react";

// function ListProductUser(props) {
//   const products = props.products.map(product => {
//     return (
//       <div key={product.id} className="productDiv">
//         <img src={product.picture} className="productImg" />
//         {/* <button>Add To Cart</button> */}
//         <div className="productInfoOptions">
//           <p className="productInfo">{product.name}</p>
//           <p className="productInfo">{product.description}</p>
//           {/* <strong> */}
//           <p className="productInfo">{product.price}</p>
//           {/* </strong> */}
//           <button>Add To Cart</button>
//         </div>
//       </div>
//     );
//   });

//   return <div>{products}</div>;
// }

// export default ListProductUser;
