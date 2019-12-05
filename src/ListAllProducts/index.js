import React from "react";
import { Card, Button } from "semantic-ui-react";

function ListAllProducts(props) {
  const courses = props.product.map(product => {
    return (
      <Card key={product.id}>
        <Card.Content>
          <Card.Header>PRODUCT {product.id}</Card.Header>
          <Card.Header>{product.title}</Card.Header>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <Button onClick={() => props.deleteCourse(course.id)}>
            Delete Course
          </Button> */}
          {/* <Button onClick={() => props.editCourse(course.id)}>
            Edit Course
          </Button> */}
        </Card.Content>
      </Card>
    );
  });
  return <Card.Group>{products}</Card.Group>;
}
export default ListAllProducts;
