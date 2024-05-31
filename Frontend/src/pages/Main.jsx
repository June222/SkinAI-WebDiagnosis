import React, { useEffect, useState } from 'react';
import MainFirst from './sub/MainFirst';
import MainSecond from './sub/MainSecond';
import { Button } from '@mui/material';
import { fetchTest } from '../services/MainServices';

const Main = () => {

    return (
        <div >
            <MainFirst/>
            <MainSecond />
            <Button 
                onClick={fetchTest}
            >
                test
            </Button>
        </div>
    )
}

export default Main;