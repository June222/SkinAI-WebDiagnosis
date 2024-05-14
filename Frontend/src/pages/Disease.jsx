import React from 'react';
import OtherAboutSub from './sub/OtherAboutSub';
import exampleImage from '../static/skin disease/피부암 이미지 예시.png'; // 이미지 import
import { Typography, Box } from '@mui/material';

const About = () => {

    return (
        <div>
            <OtherAboutSub text="피부 질환 종류" />
            <Box sx={{minHeight:600, paddingY:10, background:"#E7F5FF", justifyContent:"center", alignItems:"center"}}>
                <div style={{ display: "flex", justifyContent:"center", alignItems:"center", marginBottom:75 }}>
                    <div style={{width: 125, height: 125, borderRadius: "50%", overflow: "hidden", border: "2px solid purple"}}>
                        <img src={exampleImage} alt="피부 암 이미지 예시" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    </div>
                    <Box sx={{ml:8, maxWidth:"50%"}}>
                        <Typography variant='h6' sx={{fontWeight:'bold', mb:2}}>
                            앤티닉 케라토시스와 상피내암/보웬병 (AKIEC)
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            앤티닉 케라토시스: 자외선 노출로 인해 발생하는 거칠고 비늘 모양의 피부 병변으로, 피부암으로 발전할 수 있는 전암성 상태입니다.
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            보웬병: 표피에서 시작되는 상피내암으로, 완전히 치료하지 않으면 피부암으로 발전할 수 있습니다.
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            원인: 장기간의 자외선 노출이 주요 원인입니다.
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            예방법: 자외선 차단제를 꾸준히 사용하고, 외출 시 모자나 긴팔 옷을 착용해 피부를 보호하세요.
                        </Typography>
                    </Box>
                </div>

                <div style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
                    <div style={{width: 125, height: 125, borderRadius: "50%", overflow: "hidden", border: "2px solid purple"}}>
                        <img src={exampleImage} alt="피부 암 이미지 예시" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    </div>
                    <Box sx={{ml:8, maxWidth:"50%"}}>
                        <Typography variant='h6' sx={{fontWeight:'bold', mb:2}}>
                            앤티닉 케라토시스와 상피내암/보웬병 (AKIEC)
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            앤티닉 케라토시스: 자외선 노출로 인해 발생하는 거칠고 비늘 모양의 피부 병변으로, 피부암으로 발전할 수 있는 전암성 상태입니다.
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            보웬병: 표피에서 시작되는 상피내암으로, 완전히 치료하지 않으면 피부암으로 발전할 수 있습니다.
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            원인: 장기간의 자외선 노출이 주요 원인입니다.
                        </Typography>
                        <Typography sx={{fontFamily:"malgun" ,fontWeight:'bold', fontSize:14}}>
                            예방법: 자외선 차단제를 꾸준히 사용하고, 외출 시 모자나 긴팔 옷을 착용해 피부를 보호하세요.
                        </Typography>
                    </Box>
                    
                </div>


            </Box>
        </div>
    )
}

export default About;
