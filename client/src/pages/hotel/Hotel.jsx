import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useContext } from 'react';
import styled from 'styled-components'
import { SearchContext } from './../../context/SearchContext';
import useFetch from './../../hooks/useFetch';
import { AuthContext } from './../../context/AuthContext';

import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'
import MailList from '../../components/MailList'
import Reserve from './../../components/Reserve';

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &>button {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 12px 16px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        background-color: #0071c2;
        color: #fff;
        cursor: pointer;
    }
`

const Title = styled.h1`
    font-size: 1.5rem;
`

const Address = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
`

const Distance = styled.span`
    color: #0071c2;
    font-weight: bold;
`

const PriceHighlight = styled.span`
    color: #008009;
    font-weight: bold;    
`

const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ImagesWrapper = styled.div`
    width: 33%;

    &>img {
        width: 100%;
        object-fit: cover;
    }
`

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const DetailText = styled.div`
    flex: 3;

    &>h1 {
        font-size: 1.5rem;
    }

    &>p {
        font-size: 0.8rem;
        margin-top: 20px;
    }
`

const DetailPrice = styled.div`
    flex: 1;
    background-color: #ebf3ff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 8px;

    &>h1 {
        font-size: 1rem;
        color: #555;
    }

    &>span {
        font-size: 0.8rem;
    }

    &>button {
        padding: 12px 16px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        background-color: #0071c2;
        color: #fff;
        cursor: pointer;   
    }
`

function Hotel() {
    const theme = {
        colors: {
          primary: '#3457D5',
          primaryshade: '#0039a6'
        }
    }

    const images = [
        {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src:"https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
        },
        {    
            src:"https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        },
        {
            src:"https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src:"https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
        }
    ]

    const [openModal, setOpenModal] = useState(false)

    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const { data, loading, error } = useFetch(`/hotels/find/${id}`)
    const { user } = useContext(AuthContext)

    const { dates, options } = useContext(SearchContext)
    const dayDifference = (date1, date2) => {
        const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffTime = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffTime;
    }
    const days = dayDifference(new Date(dates[0].endDate), new Date(dates[0].startDate))
    
    const navigation = useNavigate()
    const handleClick = () => {
        if (user) {
            setOpenModal(true)
        } else {
            navigation("/login")
        }
    }

  return (
    <>
        <ThemeProvider theme={ theme }>
            <NavBar />
            <Header type="list" />
            <Container>
                { loading ? "Loading please wait" : (
                    <Wrapper>
                        <button onClick={handleClick}>Reserve or Book Now!</button>
                        <Title>{ data.name }</Title>
                        <Address>
                            <FontAwesomeIcon icon={ faLocationDot } />
                            <span>{ data.address }</span>
                        </Address>
                        <Distance>
                            Excellent Location - {data.distance}m from center
                        </Distance>
                        <PriceHighlight>
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </PriceHighlight>
                        <Images>
                            { images.map(image => {
                                return (
                                    <ImagesWrapper>
                                        <img src={ image.src } />
                                    </ImagesWrapper>
                                )
                            })}
                        </Images>
                        <Details>
                            <DetailText>
                                <h1>Perfect for a {days}-night stay!</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem atque adipisci quas ipsum, aliquid distinctio, porro numquam consequuntur consectetur corrupti ipsa nam quo neque quaerat commodi reprehenderit similique earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laboriosam corporis, laudantium veniam non, quis magni necessitatibus voluptate cumque, molestias totam fugit optio ex similique porro neque harum officia cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deserunt in, praesentium itaque asperiores sunt fugit distinctio voluptates, quo magnam quia iusto architecto voluptate officia possimus! Non porro necessitatibus quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati et quasi magni quis maxime corporis repudiandae deserunt illo amet quaerat at ipsum perspiciatis, nemo dolore perferendis in delectus nam!</p>
                            </DetailText>
                            <DetailPrice>
                                <h1>Perfect for a {days}-night stay!</h1>
                                <span>Located in the heart of Krakow, this property has an excellent location score of 9.8!</span>
                                <h2>
                                    <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                                </h2>
                                <button>Reserve or book now!</button>
                            </DetailPrice>
                        </Details>
                    </Wrapper>
                )}
            </Container>
            <MailList />
            <Footer />
            { openModal && <Reserve setOpenModal={setOpenModal} hotelId={id} />  }
        </ThemeProvider>
    </>
  )
}

export default Hotel