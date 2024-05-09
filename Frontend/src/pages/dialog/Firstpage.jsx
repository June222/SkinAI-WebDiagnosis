import React from "react";
import {Button, Box, Typography} from "@mui/material";
import Image from "../../static/MainImages/image.png"

const Firstpage = ({setStep}) => {
    return (
        <div className="flex items-center justify-center m-10" style={{display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ padding:10, width: '50%', padding:5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h6'>
                    피부 분석 시작 준비
                </Typography>
                <Typography sx={{mt:2, mb:1, fontWeight:'bold'}}>
                    사용 방법
                </Typography>
                <Box display="flex" alignItems="center" sx={{ borderColor: '#000000', border: 1, width:'100%', mb:1}}>
                    <img src={Image} alt="glasses" style={{ margin: 10, width: 30 }} />
                    <Typography sx={{ ml: 1 }}>
                        안경을 벗고 앞머리가 이마를 덮지 않는지 확인하세요.
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ borderColor: '#000000', border: 1, width:'100%', mb:1 }}>
                    <img src={Image} alt="glasses" style={{margin: 10, width: 30 }} />
                    <Typography sx={{ ml: 1 }}>
                        조명이 밝은 환경에 있는지 확인하세요.
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ borderColor: '#000000', border: 1, width:'100%', mb:1 }}>
                    <img src={Image} alt="glasses" style={{margin: 10,  width: 30 }} />
                    <Typography sx={{ ml: 1 }}>
                        화장을 하지 않은 상태에서 테스트하면 더 정확한 결과를 얻을 수 있습니다.
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ borderColor: '#000000', border: 1, width:'100%', mb:1 }}>
                    <img src={Image} alt="glasses" style={{margin: 10,  width: 30 }} />
                    <Typography sx={{ ml: 1 }}>
                        질병이 의심되는 부분만 확대해주세요.
                    </Typography>
                </Box>
                <Button
                    onClick={()=>{setStep(2);}} 
                    variant='contained'color='userBlack' sx={{width:'100%', color:'#FFFFFF'}}>
                    시작하기
                </Button>
            </Box>


            <Box sx={{ backgroundColor: '#E7F5FF', width: '50%', padding:5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box className='flex' style={{ display: 'flex', justifyContent: 'center' }}>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={Image} className="image" width='50' style={{ margin: 5 }} />
                    ))}
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={Image} className="image" width='50' style={{ margin: 5 }} />
                    ))}
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={Image} className="image" width='50' style={{ margin: 5 }} />
                    ))}
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={Image} className="image" width='50' style={{ margin: 5 }} />
                    ))}
                </Box>

            </Box>
        </div>
    )
};

export default Firstpage;