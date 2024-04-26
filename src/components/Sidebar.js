import React from "react";

// import bootstrap react
import { Nav } from "react-bootstrap";

// import css
import "../css/Sidebar.css";

// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUser,
  faGripVertical,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  return (
    <div className="sideNav">
      <Nav defaultActiveKey={props.route} variant="pills" className="flex-column">
        <Nav.Item className="Logo">
          <Nav.Link href="/home">KARYAIN</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav">
          <Nav.Link eventKey="link-4" className="nav">
            <span className="icon">
              <FontAwesomeIcon icon={faHouseChimney} />
            </span>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav">
          <Nav.Link eventKey="link-1">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav">
          <Nav.Link href="/dashboard">
            <span className="icon">
              <FontAwesomeIcon icon={faGripVertical} />
            </span>
            MyDashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav">
          <Nav.Link eventKey="link-3">
            <span className="icon">
              <FontAwesomeIcon icon={faDoorOpen} />
            </span>
            LogOut
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
