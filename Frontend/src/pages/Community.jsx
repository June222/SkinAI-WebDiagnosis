import React, { useEffect, useState } from 'react';
import OtherAboutSub from './sub/OtherAboutSub';
import {Box, Typography, Button} from '@mui/material';
import Search from './sub/SearchSub';
import CommunitySub from './sub/CommunitySub';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6945FF', // 기본 primary 색상
        },
        secondary: {
            main: '#6A5ACD', // 기본 secondary 색상
        },
        userBlack: {
            main: '#000000', // 검은색
        },
    },
});

const Community = () => {

    const handleWrite = () => {
        console.log("글쓰기 버튼 클릭");
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <OtherAboutSub text="Community" />
                <Box sx={{backgroundColor:"#E7F5FF", minHeight:600, paddingX:10, paddingY:5}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Search />
                        <Button variant='contained' onClick={handleWrite} sx={{fontWeight:'bold', fontSize:16, borderRadius:5, paddingX:8, mr:'10%' }}>
                            글쓰기
                        </Button>
                    </Box>
                    <Box sx={{marginY:5}}>
                        <CommunitySub />
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default Community;