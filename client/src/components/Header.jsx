import React, { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons'

import HeaderSearch from './HeaderSearch'
import { AuthContext } from './../context/AuthContext';

const Head = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    background-color: ${ (props) => props.theme.colors.primary };
    position: relative;
`

const HeadingList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
`

const HeadingListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const HeadingDescription = styled.p`
    margin: 10px 0px;
`

export const Button = styled.button`
    border: none;
    background-color: ${ (props) => props.theme.colors.primaryshade };
    color: #fff;
    font-family: inherit;
    font-weight: bold;
    padding: 8px 12px;
    cursor: pointer;
`

function Header({ type }) {
    const { user } = useContext(AuthContext)
    const Container = styled.div`
        width: 100%;
        max-width: 1024px;
        margin: 20px 0px ${ type === "list" ? "20px" : "100px"} 0px;
    `
    const headingList = [
        {
            id: 1,
            icon: faBed,
            title: 'Stays'
        },
        {
            id: 2,
            icon: faPlane,
            title: 'Flights'
        },
        {
            id: 3,
            icon: faCar,
            title: 'Car rentals'
        },
        {
            id: 4,
            icon: faBed,
            title: 'Attractions'
        },
        {
            id: 5,
            icon: faTaxi,
            title: 'Airport taxis'
        }
    ]

  return (
    <Head>
        <Container>
            <HeadingList>
                { headingList.map((item) => {
                    return (
                        <HeadingListItem key={item.id}>
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.title}</span>
                        </HeadingListItem>
                    )
                }) }
            </HeadingList>
            { type !== "list" && <>
                <h1>A lifetime of discounts? It can't be just true!</h1>
                <HeadingDescription>Get rewarded for your travels - unlock instant saving of 10% on every booking account registered.</HeadingDescription>
                { !user && <Button>Sign In / Register</Button>}
                
                <HeaderSearch />
            </> }
        </Container>
    </Head>
  )
}

export default Header