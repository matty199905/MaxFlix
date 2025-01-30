import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavLinkStyled = styled(NavLink)`

background-color: ${(props)=>(props.filter === true ? 'orange' : 'none')};

`