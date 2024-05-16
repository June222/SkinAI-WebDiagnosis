import React from 'react';
import { Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import MainIcon from '../../static/skin disease/logo.png';
import Firstpage from './Firstpage';
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'


const MainDialog = ({ open, onClose, step, setStep }) => {

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle
            sx={{ borderBottom: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px 0', textAlign: 'center' }}>
                <Box display="flex" justifyContent="center"> {/* 이미지를 가운데로 정렬하는 컨테이너 */}
                    <img src={MainIcon} alt="Title" style={{width:100}} />
                </Box>
            </DialogTitle>
            <DialogContent
                sx={{padding:0, backgroundColor:'#E7F5FF'}}
            >
                {step==1 ? <Firstpage setStep={setStep} />
                    : step==2 ? <Secondpage setStep={setStep}/>
                    : step==3 ? <Thirdpage setStep={setStep}/> : null}
            </DialogContent>
        </Dialog>
    )
};

export default MainDialog;