import React, { useState, useEffect } from "react";
import { Button, Box, Typography, CircularProgress } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchImageUrl, fetchGetDisease } from "../../services/MainServices";

function decodeUnicodeString(str) {
    return decodeURIComponent(JSON.parse('"' + str + '"'));
}

const Thirdpage = ({ setStep, imgUrl }) => {
    const [loading, setLoading] = useState(true);
    const [resultImgUrl, setResultImgUrl] = useState('');
    const [resultLabel, setResultLabel] = useState('');
    const [resultDescription, setResultDescription] = useState('');
    const [resultTitle, setResultTitle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetchImageUrl(imgUrl);
                setResultImgUrl(response.image_url);
                setResultLabel(response.label);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchData();
    }, [imgUrl]);

    useEffect(() => {
        if (resultLabel) {
            getDisease();
        }
    }, [resultLabel]);

    const getDisease = async () => {
        try {
            const response = await fetchGetDisease(resultLabel);
            if (response && response.description) {
                const encodedDescription = JSON.parse(response.description);
                const decodedDescription = encodedDescription.map(decodeUnicodeString);
                setResultDescription(decodedDescription);
            } else {
                setResultDescription("Disease information not available.");
            }
            setResultTitle(response.title);
        } catch (error) {
            console.error('Error fetching disease:', error);
            setResultDescription("Error fetching disease information.");
        } finally {
            setLoading(false);
        }
    };

    const Loading = () => (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 600 }}
        >
            <CircularProgress sx={{ mb: 10 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                인공지능이 분석중입니다...
            </Typography>
        </Box>
    );

    return (
        <Box sx={{ minHeight: 600 }}>
            {loading ? <Loading /> :
                <Box sx={{ m: 5 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={imgUrl} alt="baseImg" style={{ width: 250, marginRight: 25 }} />
                        <ArrowForwardIcon style={{ fontSize: 100, color: "#6945FF" }} />
                        <img src={resultImgUrl} alt="resultImg" style={{ width: 250, marginLeft: 25 }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: 5,
                        }}
                    >
                        <Typography sx={{paddingX:'11%', mb:3, fontWeight:'bold'}}>
                            {resultTitle}으로 의심됩니다!
                        </Typography>
                        {resultDescription.map((text, idx) => (
                            <Typography key={idx} sx={{paddingX:'11%', fontWeight: 'bold', fontSize: 14, mb: 1 }}>
                                {text}
                            </Typography>
                        ))    
                        }

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 5,
                                    fontWeight: 'bold',
                                    paddingX: 3,
                                    fontSize: 15,
                                    mt:10
                                }}
                                onClick={() => { 
                                    // 다른 변수 모두 초기화
                                    setResultDescription('');
                                    setResultImgUrl('');
                                    setResultLabel('');
                                    setResultTitle('');
                                    setStep(2)
                                }}
                            >
                                재촬영하기
                            </Button>
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    );
};

export default Thirdpage;
