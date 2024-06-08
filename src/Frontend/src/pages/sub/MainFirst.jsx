import React, {useState} from 'react';
import { Typography, Button, Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import Phone from '../../static/Phone.png';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import MainDialog from '../dialog/MainDialog';

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

const Main = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [step, setStep] = useState(1);

    return (
        <ThemeProvider theme={theme}>
            <div className="flex items-center justify-center m-10" style={{ backgroundColor: '#E7F5FF', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '50%', padding:5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography sx={{textAlign: 'center', color:'#6945FF', mb:3,  fontWeight:'bold'}}>
                        AI 피부 질환 분석 솔루션 SDK
                    </Typography>
                    <Typography variant='h4' sx={{textAlign: 'center', fontWeight:'bold', mb:3}}>
                        당신의 미래를 위한
                        <br />
                        AI 피부 질환 분석 솔루션
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                        바쁠 때, 단 한번의 사진 촬영을 통해 자가 진단해보세요!
                        <br />
                        온라인에서 피부 질환 분석 서비스를 받아볼 수 있습니다.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <Button variant='contained' sx={{mr:2, borderRadius:3, fontSize:18}} onClick={()=>{setIsDialogOpen(true)}}>
                            사진 모드 테스트
                        </Button>
                        <Button variant='outlined' sx={{borderRadius:3, fontSize:18}}>
                            라이브 모드 테스트
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', padding:5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Phone} alt="phone" style={{width:250}} />
                </Box>
            </div>
        <MainDialog 
            step={step}
            setStep={setStep}
            open={isDialogOpen}
            onClose={()=>setIsDialogOpen(false)}
        />
        </ThemeProvider>
    )
}

export default Main;
