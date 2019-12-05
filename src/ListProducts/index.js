import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

function ListProducts(props) {
  const products = props.products.map(product => {
    return (
      <Card key={product.id}>
        <Image src={product.picture} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Description>{product.description}</Card.Description>
          <Card.Description>{product.price}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group>{products}</Card.Group>;
}

export default ListProducts;
