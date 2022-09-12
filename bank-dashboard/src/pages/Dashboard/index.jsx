
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';

import  {useState}  from 'react';
import * as React from 'react';
import { Header } from '../../components/Header';
import { Box } from '@mui/system';
import DashboardStyled from './styles';


const Dashboard = () =>{
    const [alignment, setAlignment] = React.useState('web');
    const [filterDate, setFilterDate] = useState([])
    const [showBalance, setShowBalance] = useState(false)

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

    return(
        <DashboardStyled
            sx={{
                padding:"0",
                width:"100vw"}}>
            <Header/>
            <div className='body'>

                <Box className="boxBalance">
                    <h2>Balance</h2>
                    <Button sx={{height:"40px"}}variant="contained"onClick={()=>setShowBalance(true)}>
                        <SavingsIcon sx={{marginRight:"15px"}}/>
                        {showBalance?<p className='showing'>R$35142,00</p>:<p className='hidden'>******</p>}
                    </Button>
                    
                </Box>
                <Box>
                    <h2>Transactions</h2>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        >
                        <ToggleButton value="web">Web</ToggleButton>
                        <ToggleButton value="android">Android</ToggleButton>
                        <ToggleButton value="ios">iOS</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </div>
            
        </DashboardStyled>
    )
}
export default Dashboard
