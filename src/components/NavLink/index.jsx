import { NavLink } from "react-router-dom";

export default function (props) {
    return (
        <NavLink {...props} style={{textDecoration: 'none'}}>
            {props.children}
        </NavLink>
    )
}
