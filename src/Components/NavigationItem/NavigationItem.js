import {NavLink} from 'react-router-dom'

const NavigationItem = (props) => (

    <NavLink to={props.link} exact={props.exact}>
        {props.children}
    </NavLink>

)

export default NavigationItem