import React, { useState, useEffect } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import MainIcon from '../../static/MainIcon.png';
import Image from '../../static/MainImages/image.png'
import {Typography} from '@mui/material';
import Firstpage from './Firstpage';
import Secondpage from './Secondpage'


const MainDialog = ({ open, onClose, step, setStep }) => {

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle
            sx={{ borderBottom: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px 0', textAlign: 'center' }}>
                <Box display="flex" justifyContent="center"> {/* 이미지를 가운데로 정렬하는 컨테이너 */}
                    <img src={MainIcon} alt="Title" style={{width:100}} />
                </Box>
            </DialogTitle>
            <DialogContent
                sx={{m:2}}
            >
                {step==1 ? <Firstpage setStep={setStep} />
                    : step==2 ? <Secondpage/> : null}
            </DialogContent>
        </Dialog>
    )
};

export default MainDialog;