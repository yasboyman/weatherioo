import {NavLink} from 'react-router-dom'

const Index = ({link, exact, children}) => (

    <NavLink to={link} exact={exact}>
        {children}
    </NavLink>

)

export default Index