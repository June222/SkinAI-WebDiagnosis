import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderIcon from '../icon/HeaderIcon';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';



const Header = () => {
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();
    const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);

    const onClickLogo = () => {
        setIsLogoClicked(true);
    };

    const goAbout = () => {
        navigate('/about');
    }

    const goCommunity = () => {
        navigate('/community');
    }

    const goDisease = () => {
        navigate('/disease');
    }

    const onClickUserButton = (event) => {
        setUserMenuAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        if (isLogoClicked) {
            navigate('/index');
            setIsLogoClicked(false);
        }
    }, [isLogoClicked]);
    
    return(
        <div>
            <AppBar
                position="static"
                elevation={1}
                style={{ background: '#ffffff' }}
            >
                <Toolbar>
                    <div style={{ width: 60 }} />
                    <Button >
                        <HeaderIcon theme={theme} onClickLogo={onClickLogo} />
                    </Button>
                    <div style={{ flexGrow: 1 }}></div>
                    
                    <Button sx={{ml:5, mr:5}} onClick={goAbout}>
                        <Typography variant="h6" color="textPrimary">
                            ABOUT
                        </Typography>
                    </Button>
                    <Button sx={{mr:5}} onClick={goDisease}>
                        <Typography variant="h6" color="textPrimary">
                            피부 질환 종류
                        </Typography>
                    </Button>
                    <Button sx={{mr:5}} onClick={goCommunity}>
                        <Typography variant="h6" color="textPrimary">
                            커뮤니티
                        </Typography>
                    </Button>
                    <Button sx={{mr:5}}>
                        <Typography variant="h6" color="textPrimary">
                            나의 진단 기록
                        </Typography>
                    </Button>
                    
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={onClickUserButton}
                    >
                        <AccountCircle />
                    </IconButton>
                    <div style={{ width: 60 }} />
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;
