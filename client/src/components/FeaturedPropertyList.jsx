import React from 'react'
import styled from 'styled-components'
import useFetch from './../hooks/useFetch';

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const PropertyItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const PropertyImage = styled.img`
    width: 100%;
    object-fit: cover;
`

const PropertyName = styled.span`
    font-weight: bold;
`

const PropertyLocation = styled.span`
    font-size: 0.8rem;
`

const PropertyPrice = styled.span`
    font-size: 0.9rem;
    font-weight: 700;
`

const Button = styled.button`
    border: none;
    background-color: ${ (props) => props.theme.colors.primary };
    color: white;
    padding: 4px;
    margin-right: 8px;
`

function FeaturedPropertyList() {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")
    console.log(data, "data is here")

    const images = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    ]

  return (
    <Container>
        { loading ? "Loading please wait" : (
            data.map((hotel, index) => (
                <PropertyItem key={hotel._id} >
                    <PropertyImage src={ images[index] } />
                    <PropertyName>{ hotel.name }</PropertyName>
                    <PropertyLocation>{ hotel.address }</PropertyLocation>
                    <PropertyPrice>{ hotel.cheapestPrice }</PropertyPrice>
                    <div>
                        <Button>8.5</Button>
                        <span>Excellent</span>
                    </div>
                </PropertyItem>
            ))
        )}
    </Container>
  )
}

export default FeaturedPropertyList