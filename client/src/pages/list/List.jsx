import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../../components/Header'
import ListContainer from '../../components/ListContainer'
import NavBar from '../../components/NavBar'

function List() {
    const theme = {
        colors: {
          primary: '#3457D5',
          primaryshade: '#0039a6'
        }
    }
  return (
    <>
    <ThemeProvider theme={theme}>
        <NavBar />
        <Header type="list" />
        <ListContainer />
    </ThemeProvider>
    </>
  )
}

export default List