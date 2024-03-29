import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

function ListProductsAdmin(props) {
  const products = props.products.map(product => {
    return (
      <Card key={product.id}>
        <Image src={product.picture} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Description>{product.description}</Card.Description>
          <Card.Description>{product.price}</Card.Description>
          <Button onClick={() => props.deleteProduct(product.id)}>
            Delete
          </Button>
          <Button onClick={() => props.editProduct(product.id)}>Edit</Button>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group>{products}</Card.Group>;
}

export default ListProductsAdmin;
