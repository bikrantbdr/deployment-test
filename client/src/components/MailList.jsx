import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    background-color: ${ (props) => props.theme.colors.primary };
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 10px;
`

const Input = styled.input`
    width: 300px;
    height: 40px;
    padding: 8px;
    margin-right: 10px;
`

const Button = styled.button`
    background-color: #318CE7;
    color: white;
    height: 40px;
    padding: 8px;
    border: none;
    cursor: pointer;
`


function MailList() {
  return (
    <Container>
        <h1>Save time, save money!</h1>
        <span>Sign up and we'll send the best deals to you</span>
        <div>
            <Input type="text" placeholder="Your email"/>
            <Button>Subscribe</Button>
        </div>
    </Container>
  )
}

export default MailList