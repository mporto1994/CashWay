
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import  useState  from 'react';
import * as React from 'react';
import { Header } from '../../components/Header';


const Dashboard = () =>{
    const [alignment, setAlignment] = React.useState('web');
    const [filterDate, setFilterDate] = useState([])

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

    return(
        <>
            <Header/>
            <p>osfjongfnmspnwsgpnmfgsp</p>
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
        </>
    )
}
export default Dashboard
