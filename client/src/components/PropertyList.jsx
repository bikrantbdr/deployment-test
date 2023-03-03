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
    border-radius: 8px;
    overflow: hidden;
`

const PropertyImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`

const PropertyTitle = styled.div`
    &>h1 {
        font-size: 1.5rem;
        text-transform: capitalize;
    }

    &>h2 {
        font-size: 1rem;
        font-weight: 300;
    }
`

function PropertyList() {
    const  { data, loading, error } = useFetch("/hotels/countByType")
    console.log(data)

    const images = [
        "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1545317524-e0ccf9d87753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    ]

  return (
    <Container>
        { loading ? "Loading please wait" : (
            <>
                {data && images.map((image, i) => (
                    <PropertyItem key={i}>
                        <PropertyImage src={ image }/>
                        <PropertyTitle>
                            <h1>{data[i].type}</h1>
                            <h2>{data[i].count} {data[i].type}</h2>
                        </PropertyTitle>
                    </PropertyItem>
                ))
            }
            </>
        )}
    </Container>
  )
}

export default PropertyList