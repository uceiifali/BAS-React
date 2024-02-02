import {
    Box,
    Button,
    IconButton,
    TextField,
    MenuItem,
    Select,
  } from "@mui/material"
  import { Accordion } from "react-bootstrap";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";import { NavItem } from "./NavItem";
;
export const CustomNav = ({ title, path, items, data,setData }) => {
    return (
      <Accordion defaultActiveKey={null}>
        <Accordion.Item eventKey="0" className={`custom-accordion-item`}>
          <Link to={path}>
            <Accordion.Header>
              {title}
              <MdKeyboardArrowDown size={20} />
            </Accordion.Header>
          </Link>
  
          <Accordion.Body className="my-2">
            <div className="tabs  d-flex justify-content-center align-items-center flex-column">
              {items.map(({ title, search }, index) => (
                <NavItem 
                data={data}
                setData={setData}
                title={title} 
                search={search} 
                key={index} />
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };