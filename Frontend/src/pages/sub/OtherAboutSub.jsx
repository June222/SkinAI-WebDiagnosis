import React, {useState} from 'react';
import { Typography, Button, Box } from '@mui/material';
import AboutImage from '../../static/skin disease/about페이지.png';

const AboutFirst = ({text}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [step, setStep] = useState(1);

    return (
        <div className="flex items-center justify-center m-10" style={{ backgroundImage: `url(${AboutImage})` }}>
            <Box sx={{padding:20, justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h4' sx={{textAlign: 'center', color:'#FFFFFF', mb:3,  fontWeight:'bold'}}>
                    {text}
                </Typography>
                <Typography sx={{textAlign: 'center', color:'#FFFFFF', fontSize:18}}>
                    피부 데이터 기반의 헬스케어 플랫폼으로
                    <br  />
                    전 세계 사람들의 건강한 삶을 추구합니다.
                </Typography>
            </Box>
        </div>
    )
}

export default AboutFirst;
