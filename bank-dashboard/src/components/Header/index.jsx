import LogoutIcon from '@mui/icons-material/Logout';
import HeaderStyled from "./styles.js"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const Header = () => {

    return(
        <HeaderStyled>
            <AccountBalanceIcon/>
            <LogoutIcon color=''/>
        </HeaderStyled>
    )
}