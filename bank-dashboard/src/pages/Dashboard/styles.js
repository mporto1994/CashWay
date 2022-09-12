
import styled from "styled-components";
import Container from '@mui/material/Container';


const DashboardStyled = styled(Container)`
    background-color:var(--lightBlue1);
    .body{
        max-width:800px;
        height:100vh;
        width:100%;
        display:flex;
        flex-direction:column;
        /* padding-left:0px; */
        padding:40px 20px;
    
        background-color:var(--lightBlue1);
        .boxBalance{
            /* background-color:red; */
            width:100%;
            height:100px;
            display:flex;
            align-items:center;
            justify-content:space-between;

            
            .showing{
                font-size:20px;
                font-weight:700;
            }
            .hidden{
                font-size:30px;
            }
        }

    }
    @media (min-width: 600px){
    padding:0;
    }

`
export default DashboardStyled