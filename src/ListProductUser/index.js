import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

function ListProductUser(props) {
  const products = props.products.map(product => {
    return (
      <Card key={product.id}>
        <Image src={product.picture} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Description>{product.description}</Card.Description>
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
