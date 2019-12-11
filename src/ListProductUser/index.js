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
          <Button>
            <strong>$</strong>
            {product.price}
          </Button>
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
