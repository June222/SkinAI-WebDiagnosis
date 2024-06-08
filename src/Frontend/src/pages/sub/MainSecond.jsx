import React from 'react';
import { Box, Typography } from '@mui/material';
import MainIcon from '../../static/skin disease/logo.png';
// import Image from '../../static/MainImages/image.png';
import Images from '../../static/skin disease/메인페이지-2.png';

const Main = () => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding:70}}>
            <img src={MainIcon} className="icon" alt='aslkj' width='100' />
            <Typography variant='h6' sx={{textAlign:'center', m:6}}>
                피부 질환 데이터 기반의 헬스케어 플랫폼이며,
                <br />
                정확한 피부 질환 분석을 통한 맞춤 솔루션을 제공합니다.
            </Typography>
            <img src={Images} alt="예시 이미지" width={'60%'} />

            {/* <Box className='flex' style={{ display: 'flex', justifyContent: 'center' }}>
                {[...Array(5)].map((_, index) => (
                    <img key={index} src={Image} alt={`i${index}`} className="image" width='100' style={{ margin: 5 }} />
                ))}
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                {[...Array(5)].map((_, index) => (
                    <img key={index} src={Image} alt={`ii${index}`} className="image" width='100' style={{ margin: 5 }} />
                ))}
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                {[...Array(5)].map((_, index) => (
                    <img key={index} src={Image} alt={`iii${index}`} className="image" width='100' style={{ margin: 5 }} />
                ))}
            </Box> */}
        </div>
    )
}

export default Main;