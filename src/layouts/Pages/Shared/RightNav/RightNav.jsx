/* eslint-disable no-unused-vars */
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
        <h3>Login with</h3>
      <Button className="my-2" variant="outline-primary"><FaGoogle /> Login with Google</Button>{" "}
      <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>

      <div>
      <ListGroup>
      <ListGroup.Item ><FaFacebook /> facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> instragram</ListGroup.Item>
      
    </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
