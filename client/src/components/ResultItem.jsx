import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
`

const ImageContainer = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 2;
`

const Title = styled.h1`
    color: #0892d0;
`

const Distance = styled.span`
    font-size: 0.8rem;
`

const TaxiOption = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    background-color: green;
    width: fit-content;
    border-radius: 5px;
    padding: 2px;
`

const Subtitle = styled.span`
    font-size: 0.8rem;
`

const Features = styled.span`
    font-weight: bold;
    font-size: 0.8rem;
`

const CancelOption = styled.span`
    font-weight: bold;
    color: green;
    font-size: 0.8rem;
`

const CancelSubtitle = styled.span`
    color: green;
    font-size: 0.8rem;
`

const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Rating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &> span {
        font-weight: bold;
    }
    
    &>button {
        background-color: #3457D5;
        color: white;
        padding: 5px;
        font-weight: bold;
        border: none;
    }
`

const DetailText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: right;

    &>span:first-child {
        font-weight: bold;
        font-size: 2rem;
    }

    &>span:last-child {
        font-size: 0.6rem;
    }

    & button {
        background-color: #0892d0;
        color: white;
        padding: 5px 10px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

function ResultItem({ hotel }) {
  return (
    <Container>
        <ImageContainer src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <Description>        
            <Title>{ hotel.name }</Title>
            <Distance>{ hotel.distance}m from center</Distance>
            <TaxiOption>Free airport taxi</TaxiOption>
            <Subtitle>Studio apartment with air-conditioning</Subtitle>
            <Features>Entire studio • 1 bathroom • 21m 1 full bed</Features>
            <CancelOption>Free cancelation</CancelOption>
            <CancelSubtitle>You can cancel later, so lock in this great price today</CancelSubtitle>
        </Description>
        <Details>
            <Rating>
                <span>Excellent</span>
                <button>8.9</button>
            </Rating>
            <DetailText>
                <span>${ hotel.cheapestPrice }</span>
                <span>Includes taxes and fees</span>
                <Link to={`/hotels/${hotel._id}`}>
                    <button>See availability</button>
                </Link>
            </DetailText>
        </Details>
    </Container>
  )
}

export default ResultItem