import React from 'react'
import styled from 'styled-components'
import useFetch from '../hooks/useFetch'

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const FeaturedItem = styled.div`
    flex: 1;
    position: relative;
    color: white;
    border-radius: 8px;
    height: 250px;
    overflow: hidden;
    z-index: 1;
`

const FeaturedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FeaturedTitle = styled.div`
    position: absolute;
    bottom: 20px;
    left: 16px;
    z-index: 1;
`

function Featured() {
    const { data, loading, error } = useFetch("/api/hotels/countByCity?cities=berlin,madrid,london")

  return (
    <Container>
        {loading? "Loading please wait" : <><FeaturedItem>
            <FeaturedImage src="https://images.unsplash.com/photo-1575283757439-bc4324f59810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
            <FeaturedTitle>
                <h1>Berlin 🏳️‍🌈</h1>
                <h2>{data[0]} properties</h2>
            </FeaturedTitle>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedImage src="https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
            <FeaturedTitle>
                <h1>Madrid 🎌</h1>
                <h2>{data[1]} properties</h2>
            </FeaturedTitle>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedImage src="https://images.unsplash.com/photo-1547406683-88dd1d03c425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
            <FeaturedTitle>
                <h1>London 🏳️‍⚧️</h1>
                <h2>{data[2]} properties</h2>
            </FeaturedTitle>
        </FeaturedItem></>}
    </Container>
  )
}

export default Featured