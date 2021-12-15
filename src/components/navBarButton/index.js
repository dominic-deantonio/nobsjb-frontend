import { useLocation } from "react-router-dom";
import { Nav } from 'react-bootstrap';

export function NavBarButton(props) {
    const location = useLocation();
    const url = props.url;
    const isSelected = location.pathname === url;
    return (
        <Nav.Item>
            <Nav.Link onClick={props.onClick} active={isSelected} href={url}>{props.label}</Nav.Link>
        </Nav.Item>
    );
}