import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image_1 from '../../static/community/1.png';
import image_2 from '../../static/community/2.png';
import image_3 from '../../static/community/3.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ImageContainer = styled('div')({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '30px', // 이미지 컨테이너의 모서리를 둥글게 만듭니다.
  overflow: 'hidden', // 이미지가 모서리를 넘어가지 않도록 합니다.
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    borderRadius: '8px', // 그레이 아웃 레이어의 모서리를 둥글게 만듭니다.
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0)',
    transition: 'background 0.3s',
    borderRadius: '8px', // 그레이 아웃 레이어의 모서리를 둥글게 만듭니다.
  },
  '&:hover::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    color: '#fff',
    zIndex: 2,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    color: 'transparent',
    transition: 'color 0.3s',
  },
});


function handleClick(imageNumber) {
  // 클릭한 이미지에 따라 실행할 작업을 수행합니다.
  console.log('Image clicked:', imageNumber);
  // 여기에 클릭한 이미지에 대한 처리를 추가하세요.
}

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3} sx={{ m: 5 }}>
        <ImageContainer onClick={() => handleClick(1)}>
          <img src={image_1} alt="예시 이미지1" width={"100%"} />
        </ImageContainer>
      </Grid>
      <Grid item xs={3} sx={{ m: 5 }}>
        <ImageContainer onClick={() => handleClick(2)}>
          <img src={image_2} alt="예시 이미지2" width={"100%"} />
        </ImageContainer>
      </Grid>
      <Grid item xs={3} sx={{ m: 5 }}>
        <ImageContainer onClick={() => handleClick(3)}>
          <img src={image_3} alt="예시 이미지3" width={"100%"} />
        </ImageContainer>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid container item spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
