import React from "react";
import { Nav } from "react-bootstrap";

const AsideTab = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="" className="flex-column">
      <Nav.Item>
        {["Dashboard", "Calender", "MailBox", "School Panel", "Academics"].map(
          (el, index) => (
            <Nav.Link key={index} eventKey={el} disabled>
              {el}
            </Nav.Link>
          )
        )}
      </Nav.Item>
    </Nav>
  );
};

export default AsideTab;
