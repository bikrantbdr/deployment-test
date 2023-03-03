import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    width: 1024px;
    margin: 50px;
    color: ${ (props) => props.theme.colors.primary };
`

const FooterLists = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`

const FooterList = styled.ul`
    list-style: none;

    &>li {
        cursor: pointer;
    }
`

function Footer() {
  return (
    <Container>
        <FooterLists>
            <FooterList>
                <li>Countries</li>
                <li>Regions</li>
                <li>Cities</li>
                <li>Districts</li>
                <li>Airports</li>
                <li>Hotels</li>
                <li>Places of interest</li>
            </FooterList>
            <FooterList>
                <li>Countries</li>
                <li>Regions</li>
                <li>Cities</li>
                <li>Districts</li>
                <li>Airports</li>
                <li>Hotels</li>
                <li>Places of interest</li>
            </FooterList>
            <FooterList>
                <li>Countries</li>
                <li>Regions</li>
                <li>Cities</li>
                <li>Districts</li>
                <li>Airports</li>
                <li>Hotels</li>
                <li>Places of interest</li>
            </FooterList>
            <FooterList>
                <li>Countries</li>
                <li>Regions</li>
                <li>Cities</li>
                <li>Districts</li>
                <li>Airports</li>
                <li>Hotels</li>
                <li>Places of interest</li>
            </FooterList>
        </FooterLists>
        <div>Copyright © 2023 booking.com</div>
    </Container>
  )
}

export default Footer