import { Link } from "react-router-dom"
import { theme } from "antd"

export default function (props) {
   const {
      token: { colorPrimary },
    } = theme.useToken();
   return (
      <Link {...props} style ={{
         textDecoration: 'none',
         color: colorPrimary,
      }}>
         {props.children}
      </Link>
   )
}