import React from 'react';
import { Typography, Box } from '@mui/material';
import AboutImage from '../../static/skin disease/about페이지.png';

const AboutFirst = ({ text }) => {

    return (
        <div className="flex items-center justify-center m-10" style={{ backgroundImage: `url(${AboutImage})`, backgroundSize: 'cover' }}>
            <Box sx={{ padding: 20, justifyContent: 'center', alignItems: 'center', borderRadius: '10px', color: '#FFFFFF' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
                    {text}
                </Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 18 }}>
                    피부 데이터 기반의 헬스케어 플랫폼으로
                    <br />
                    전 세계 사람들의 건강한 삶을 추구합니다.
                </Typography>
            </Box>
        </div>
    )
}

export default AboutFirst;
