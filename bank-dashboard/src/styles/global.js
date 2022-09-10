import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }
    :root {
        --purple:#403CAA;
        --cream:#f3ffbd;
        --green: #70c1b3;
        --darkGreen:#247ba0;
        --lightGreen:#b2dbbf;
        --pink:#FF1654;
    }
    body{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        

    }
    body,input,button{

    }
    a {
        text-decoration: none;
    }


`





