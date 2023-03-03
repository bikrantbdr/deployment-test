import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        font-family: 'QuickSand', sans-serif;
        font-size: 16px;
    }
`

export default GlobalStyle;