/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({news}) => {
    console.log(news);
    const {_id, title, details,image_url} = news;
    return (
        <Card className="">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant='top' src={image_url}></Card.Img>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default NewsCard;