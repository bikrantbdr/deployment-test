import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';

import { Button } from './Header';
import { format } from 'date-fns'
import Options from './Options'
import { SearchContext } from '../context/SearchContext'

const HeaderSearchContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    background-color: #fff;
    border: 3px solid #febb02;
    border-radius: 5px;
    padding: 20px 0px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`

const HeaderSearchItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    &>input {
        border: none;
        outline: none;
    }

    &>span {
        color: lightgray;
        cursor: pointer;
    }
`

const DateSelector = styled.div`
    position: absolute;
    top: 40px;
    z-index: 2;
`

function HeaderSearch() {
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);
    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        room: 0
    })

    const handleOptions = (type, value) => {
        setOptions( prev => {
            return {
                ...prev, [type]: value === "i" ? prev[type] + 1 : prev[type] - 1
            }
        })
    }

    const navigate = useNavigate()
    const { dispatch } = useContext(SearchContext)
    const handleSubmit = () => {
        dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options }})
        navigate('/hotels', {state: {destination, dates, options}})
    }

  return (
    <HeaderSearchContainer>
                <HeaderSearchItem>
                    <FontAwesomeIcon style={{color: 'lightgray'}} icon={faBed} />
                    <input type="text" placeholder="Where are you going?" onChange={(e) => setDestination(e.target.value)}/>
                </HeaderSearchItem>
                
                <HeaderSearchItem>
                    <FontAwesomeIcon style={{color: 'lightgray'}} icon={faCalendar} />
                    <span onClick={ () => setOpenDate(!openDate)}>{` ${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')} `}</span>
                </HeaderSearchItem>

                {openDate && <DateSelector>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                    />
                </DateSelector>}
                
                <HeaderSearchItem>
                    <FontAwesomeIcon style={{color: 'lightgray'}} icon={faPerson} />
                    <span onClick={ () => setOpenOptions(!openOptions)}>{` ${options.adult} adults • ${options.children} children • ${options.room} room `}</span>
                </HeaderSearchItem>

                {openOptions && <Options handleOptions={ handleOptions } options={ options } />}

                <HeaderSearchItem>
                    <Button onClick={handleSubmit}>Search</Button>
                </HeaderSearchItem>
    </HeaderSearchContainer>
  )
}

export default HeaderSearch