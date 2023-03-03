import React,{useEffect} from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import Featured from '../../components/Featured'
import PropertyList from '../../components/PropertyList'
import FeaturedPropertyList from './../../components/FeaturedPropertyList';
import MailList from '../../components/MailList'
import Footer from '../../components/Footer'

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Title = styled.h1`
  width: 100%;
  max-width: 1024px;
  font-size: 1.5rem;
  font-weight: bold;
`

function Home() {
    const theme = {
      colors: {
        primary: '#3457D5',
        primaryshade: '#0039a6'
      }
    }
    
  return (
    useEffect(() => {
      const { data, loading, error } = useFetch("https://booking-backend-4xe3.onrender.com/api/rooms/")
      console.log(data, "data test")
    },[]),
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Header />
        
        <Container>
          <Featured />
          <Title>Browse by property type</Title>
          <PropertyList />
          <Title>Homes guests love</Title>
          <FeaturedPropertyList />
        </Container>

        <MailList />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Home