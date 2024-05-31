import React, {useState, useEffect} from "react";
import {Button, Box, Typography, CircularProgress} from "@mui/material";

import exampleImage from "../../static/skin disease/피부암 이미지 예시.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Thirdpage = ({setStep}) => {
    const [loading, setLoading] = useState(true);


    const Loading = () => {
        return (
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                sx={{minHeight:600}}
            >
                <CircularProgress sx={{mb:10}}/>
                <Typography variant="h5" sx={{fontWeight:'bold'}}>
                    인공지능이 분석중입니다...
                </Typography>

                <Button onClick={()=>{setLoading(false)}}>
                    됐다고 치자
                </Button>
            </Box>
        )
    }

    return (
        <Box sx={{minHeight:600}}>
            {loading ? Loading() : 
            <Box sx={{m:5}}>
                <Box 
                    sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    }}
                >
                    <img src={exampleImage} alt="example1" style={{ width: 250, marginRight:25, border:'' }} />
                    <ArrowForwardIcon style={{ fontSize: 100, color: "#6945FF" }} />
                    <img src={exampleImage} alt="example1" style={{ width: 250, marginLeft:25 }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: 5,
                    }}
                >
                    <Typography sx={{paddingX:25}}>
                        설명 들어가고~
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 5,
                                fontWeight: 'bold',
                                paddingX: 3,
                                fontSize: 15,
                            }}
                            onClick={()=>{setStep(2)}}
                        >
                            재촬영하기
                        </Button>
                    </Box>
                </Box>
            
            </Box>
            }
            
        </Box>
    )
};

export default Thirdpage;