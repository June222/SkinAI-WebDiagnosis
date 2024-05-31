import React, { useEffect, useState } from 'react';
import OtherAboutSub from './sub/OtherAboutSub';
import { Typography } from '@mui/material';
import Skin_Architecture from '../static/skin disease/image.png';

const About = () => {

    return (
        <div>
            <OtherAboutSub text="ABOUT Dr.Skin" />
            <div style={{minHeight:600, background:"#E7F5FF", paddingRight:"15%", paddingLeft:"15%", paddingTop:"5%", paddingBottom:"5%"}}>
                <Typography variant='h3' sx={{fontWeight:'bold'}}>
                    Dr.Skin 소개
                </Typography>
                <br />
                <br />
                <br />
                <Typography sx={{fontSize:18}}>
                    Dr.Skin은 피부 질환을 진단할 수 있는 웹 기반 자가 진단 서비스입니다. 
                </Typography>
                <br />
                <Typography sx={{fontSize:18}}>
                피부 질환은 조기 진단이 매우 중요한 질병 중 하나입니다. 그러나 전문 피부과 의사의 접근이 어려운 지역에서는 조기 진단이 힘든 경우가 많습니다. 그렇기에, 일반인들이 자신의 피부 상태를 정기적으로 모니터링할 수 있는 간편한 도구가 필요합니다. 이 프로젝트는 이러한 문제를 해결하기 위해 누구나 쉽게 접근할 수 있는 웹 기반의 서비스를 개발했습니다.
                </Typography>
                <Typography sx={{fontSize:18}}>
                    Kaggle의 HAM10000 데이터셋을 활용하여 다양한 피부 질환을 분류하고 세그멘테이션하는 인공지능 모델을 개발하고, 이를 사용자 친화적인 웹 기반 진단 서비스로 제공합니다. 
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h4' sx={{fontWeight:'bold'}}>
                    시스템 구성도
                </Typography>
                <br />
                <br />
                <br />
                <img src={Skin_Architecture} alt="아키텍처" width="100%"/>
                <Typography sx={{fontWeight:'bold', fontSize:20, mt:5}}>
                    [피부 질환 진단 기능 동작방식]
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    1. 사용자가 React web에서 피부 질환 사진을 업로드.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    2. React -> flask -> model로 해당 img url이 전달.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    3. model은 해당 이미지를 prediction하고, 세그멘테이션 결과 이미지와 레이블을 flask에 반환.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    4. flask는 결과 이미지를 서버에 업로드하고, 결과 이미지에 대한 new img url을 생성.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    5. flask -> React 로 new img url과 label이 전달되고, 최종적으로 사용자에게 보여줌.
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <Typography sx={{fontWeight:'bold', fontSize:20}}>
                    [기타 커뮤니티, 나의 정보 조회 등의 기능 동작 방식]
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    1. 사용자가 React web에서 정보를 요청.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    2. React -> Fast API -> postgres DB로 해당 내용 전달.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    3. DB는 요청에 따른 결과값을 FastAPI에 반환.
                </Typography>
                <Typography sx={{marginY:0.4}}>
                    4. Fast API -> React Web로 결과 전달되고, 최종적으로 사용자에게 보여줌.
                </Typography>
            </div>
        </div>
    )
}

export default About;