import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const OptionsContainer = styled.div`
    position: absolute;
    top: 40px;
    right: 175px;
    background-color: #fff;
    color: grey;
    border-radius: 4px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 2;
`

const OptionsItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 8px;

    &>div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &>div>span {
        color: black;
    }

    &>div>button {
        width: 30px;
        height: 30px;
        border: 1px solid ${ (props) => props.theme.colors.primaryshade };
        background-color: white;
        color: ${ (props) => props.theme.colors.primaryshade };
        cursor: pointer;
    }
`

function Options({ handleOptions, options }) {
  return (
    <OptionsContainer>
        <OptionsItem>
            <span>Adult</span>
            <div>
                <button disabled={ options.adult <= 1 } onClick={ () => handleOptions("adult", "d") }>-</button>
                <span>{ options.adult }</span>
                <button onClick={ () => handleOptions("adult", "i") }>+</button>
            </div>
        </OptionsItem>

        <OptionsItem>
            <span>Children</span>
            <div>
                <button disabled={ options.children <= 1 } onClick={ () => handleOptions("children", "d") }>-</button>
                <span>{ options.children }</span>
                <button onClick={ () => handleOptions("children", "i") }>+</button>
            </div>
        </OptionsItem>

        <OptionsItem>
            <span>Room</span>
            <div>
                <button disabled={ options.room <= 1 } onClick={ () => handleOptions("room", "d") }>-</button>
                <span>{ options.room }</span>
                <button onClick={ () => handleOptions("room", "i") }>+</button>
            </div>
        </OptionsItem>
    </OptionsContainer>
  )
}

export default Options