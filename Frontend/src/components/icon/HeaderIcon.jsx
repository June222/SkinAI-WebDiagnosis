import React from 'react';
// import CloudIcon from '../../static/images/csrc_logo_white.jpg';
import { Typography } from '@mui/material';
import MainIcon from '../../static/MainIcon.png';

const HeaderIcon = (props) => {
    return (
        <div
            className="flex flex-row space-x-2 items-center cursor-pointer"
            onClick={props.onClickLogo}
        >
            <img src={MainIcon} className="icon" width='100'/>
            {/* <Typography
                variant="h6"
                color="#000000"
                style={{
                    paddingTop: props.theme.spacing(0.5),
                    fontWeight: 'bold',
                    fontSize: '1.3rem',
                }}
            >
                Dr.Skin
            </Typography> */}
        </div>
    );
};
export default HeaderIcon;
