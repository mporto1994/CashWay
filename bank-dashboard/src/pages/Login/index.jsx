import Box from '@mui/material/Box';
import ContainerStyled from "./styles.js"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BiUser} from "react-icons/bi"


const Login = () =>{
    const handleSubmit = ()=> {
        console.log("something")
    }

    return(
        <ContainerStyled
            
            sx={{padding:"0",
            width:"100vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
            }} >
            <Box 
                // className="LoginBox"
                sx={{ bgcolor: '#cfe8fc', 
                height: '100vh',
                maxWidth:"450px", 
                padding:"20px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
                }} >

                <BiUser size="60px" color="#1166d2"/>
                <h1>Sign in</h1>
                <Box component="form" onSubmit={handleSubmit} maxWidth="400px" noValidate sx={{ mt: 1 }}>
                
                <TextField
                margin="normal"
                required
                fullWidth
                id="account"
                label="Account"
                name="account"
                autoComplete="account"
                autoFocus
                />

                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />

                <TextField
                margin="normal"
                required
                fullWidth
                name="holder"
                label="Holder"
                type="holder"
                id="holder"
                autoComplete="holder"
                />
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                /> */}
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
                >
                Sign In
                </Button>   
                </Box>
            </Box>
        </ContainerStyled>
    )
}
export default Login
