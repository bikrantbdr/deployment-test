import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import ResultItem from './ResultItem';
import useFetch from './../hooks/useFetch';

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 20px;
`

const SearchSection = styled.div`
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    background-color: #febb02;
    position: sticky;
    top: 10px;
    height: fit-content;
`

const SearchTitle = styled.h1`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #555;
`

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;

    &>label {
        font-size: 0.8rem;
        font-weight: 600;
    }

    &>input {
        height: 30px;
        border: none;
        padding: 10px;
    }

    &>span {
        height: 30px;
        background-color: #fff;
        padding: 5px;
    }
`

const ListOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    &>span {
        font-size: 0.8rem;
        font-weight: 600;
        color: #555;
    }

    &>input {
        width: 40px;
    }
`

const Button = styled.button`
    width: 100%;
    padding: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #3457D5;
`

const ResultSection = styled.div`
    flex: 3;
`

function ListContainer() {
    const location = useLocation();

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(200);

    const [openDate, setOpenDate] = useState(false);
    
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [options, setOptions] = useState(location.state.options);

    const { data, loading, error, reFetch } = useFetch(`/api/hotels?city=${destination}&min=${min || 0}&max=${max || 200}`)

  return (
    <Container>
        <Wrapper>
            <SearchSection>
                <SearchTitle>Search</SearchTitle>
                <ListItem>
                    <label>Destination</label>
                    <input type="text" value={ destination }/>
                </ListItem>

                <ListItem>
                    <label>Check-in Date</label>
                    <span onClick={ () => setOpenDate(!openDate) }>{` ${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')} `}</span>
                    { openDate && <DateRange onChange={item => setDates([item.selection])} ranges={dates} /> }
                </ListItem>

                <ListItem>
                    <label>Options</label>
                    <ListOptions>
                        <span>Min price <small>per night</small></span>
                        <input type="number" onChange={ (e) => setMin(e.target.value)}/>
                    </ListOptions>
                    <ListOptions>
                        <span>Max price <small>per night</small></span>
                        <input type="number" onChange={ (e) => setMax(e.target.value)}/>
                    </ListOptions>
                    <ListOptions>
                        <span>Adult</span>
                        <input type="number" />
                    </ListOptions>
                    <ListOptions>
                        <span>Children</span>
                        <input type="number" />
                    </ListOptions>
                    <ListOptions>
                        <span>Rooms </span>
                        <input type="number" />
                    </ListOptions>
                </ListItem>
                <Button>Search</Button>
            </SearchSection>

            <ResultSection>
                { loading ? "Loading please wait" : (
                    data.map((hotel, index) => (
                        <ResultItem hotel={ hotel } key={ hotel._id } />
                    ))
                )}
            </ResultSection>
        </Wrapper>
    </Container>
  )
}

export default ListContainer