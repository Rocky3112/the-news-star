/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    // console.log(news);
    const {_id, title, details,image_url} = news;
    return (
        <Card className="">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant='top' src={image_url}></Card.Img>
        <Card.Text>
          {details.length<250 ?<>{details}</>: <>{details.slice(0,250)}.... <Link to ={`/news/${_id}`}>Read more</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default NewsCard;