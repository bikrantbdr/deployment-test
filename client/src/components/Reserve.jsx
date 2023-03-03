import React from 'react'
import styled from 'styled-components'
import useFetch from '../hooks/useFetch'



const Reserve = () => {
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`)
    
  return (
    <div>Reserve</div>
  )
}

export default Reserve