import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  const [isFocused, setIsFocused] = React.useState(false); // 입력 상태를 추적하는 상태

  // 입력창을 클릭했을 때 입력 상태를 변경하는 핸들러
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  // 입력창을 벗어났을 때 입력 상태를 변경하는 핸들러
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: 20,
        border: '2px solid purple', // 입력 상태에 따라 border 색 변경
        backgroundColor: isFocused ? '#fff' : '#f0f0f0', // 입력 상태에 따라 배경색 변경
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, paddingX:1}}
        placeholder="검색어를 입력하세요"
        inputProps={{ 'aria-label': 'InputSearch' }}
        onFocus={handleInputFocus} // 입력창을 클릭했을 때
        onBlur={handleInputBlur} // 입력창을 벗어났을 때
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
