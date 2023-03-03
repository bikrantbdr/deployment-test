import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'

const Nav = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${ (props) => props.theme.colors.primary };
    height: 54px;
`

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>a {
        text-decoration: none;
    }
`

const Logo = styled.h1`
    color: #fff;
`

const NavItems = styled.div`
    display: flex;
    gap: 8px;
`

const Button = styled.button`
    border: none;
    color: ${ (props) => props.theme.colors.primaryshade };
    font-family: inherit;
    font-weight: bold;
    padding: 4px 8px;
    cursor: pointer;
`

function NavBar() {
    const { user } = useContext(AuthContext)
  return (
    <Nav>
        <Container>
            <Link to={'/'}>
                <Logo>Booking.com</Logo>
            </Link>
            {user ? user.username :<NavItems>
                <Button>Register</Button>
                <Button>Login</Button>
            </NavItems>}
        </Container>
    </Nav>
  )
}

export default NavBar