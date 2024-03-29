import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

function ListItemsInUserCart(props) {
  const products = props.products.map(product => {
    return (
      <Card key={product.product_id.id}>
        <Image src={product.product_id.picture} />
        <Card.Content>
          <Card.Header>{product.product_id.name}</Card.Header>
          <Card.Description>{product.product_id.description}</Card.Description>
          <Card.Description>{product.product_id.price}</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    );
  });

  return <Card.Group>{products}</Card.Group>;
}

export default ListItemsInUserCart;
