import { Typography, Button, CircularProgress, Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';


// https://api.cloudinary.com/v1_1/derecqwux/image/upload
// preset : zlgtmmib


export default function App({setStep, setUploadImgUrl}) {
  const videoRef = useRef(null);

  const [canvasState, setCanvasState] = useState('none');
  const [cameraState, setCameraState] = useState('');
  const [cameraError, setCameraError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onchangeImageUpload = (e)=> {
      const {files} = e.target;
      const uploadFile = files[0];
      setSelectedFile(uploadFile);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(uploadFile);
  }

  const uploadImage = async (e) => {
    setUploadLoading(true);

    e.preventDefault();
    if (!selectedFile) {
      alert('Please select an image file first!');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'zlgtmmib');
    formData.append('api_key','641351494367948');
    
    const response = await fetch('https://api.cloudinary.com/v1_1/derecqwux/image/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log(data);
    const imageUrl = data.secure_url;

    setUploadImgUrl(imageUrl);
    setStep(3);
  };

  const getWebcam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then(callback)
        .catch(error => {
          console.log("카메라를 가져오는 데 문제가 발생했습니다.");
          setCameraError(true); // 카메라 인식 실패 메시지 표시
          setLoading(false);
        });
    } catch (err) {
      console.log("카메라를 가져오는 데 문제가 발생했습니다.");
      setCameraError(true); // 카메라 인식 실패 메시지 표시
      setLoading(false);
    }
  };

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
      setLoading(false);
    });
  }, []);


  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'zlgtmmib');
    formData.append('api_key','641351494367948');

    const response = await fetch('https://api.cloudinary.com/v1_1/derecqwux/image/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    const imageUrl = data.secure_url;

    setUploadImgUrl(imageUrl);
    setStep(3);
  }

  function sreenShot() {
    setCanvasState('');
    setCameraState('none');
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoRef.current, 0, 0, 1024, 768);

    canvas.toBlob((blob) => {
      let file = new File([blob], "fileName.jpg", { type: "image/jpeg" });
      uploadFile(file); // Upload the file to the server
    }, 'image/jpeg');

    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }

  return (
    <div className="flex items-center justify-center m-10" style={{ backgroundColor:'#E7F5FF', display: 'flex', flexDirection: 'row', height: "768px" }}>
      {cameraError ? 
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Ensure Box takes the full height of its container
            width: '100%', // Ensure Box takes the full width of its container
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 'bold', mb:5 }}>카메라 인식 불가</Typography>
          <input type = "file" accept = "image/*" onChange = {onchangeImageUpload}/>
          {previewUrl && (
            <Box mt={2}>
              <img src={previewUrl} alt="preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            </Box>
          )}
          <Button 
            variant='contained'
            sx={{fontSize:20, paddingX:5, mt:5, fontWeight:'bold'}}
            onClick={uploadImage}
          >
            {uploadLoading ? <CircularProgress/> : '업로드 하기'}
          </Button>
        </Box>
        : 
        <div style={{ position: "relative", width: "1024px", height: "768px"}}>
          {loading && (
            <Box 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              position="absolute" 
              top={0} 
              left={0} 
              width="100%" 
              height="100%" 
              bgcolor="rgba(255, 255, 255, 0.8)" 
              zIndex={2}
            >
              <CircularProgress />
              <Typography style={{ marginLeft: 16 }}>카메라 준비 중...</Typography>
            </Box>
          )}
          <video id="videoCam" ref={videoRef} autoPlay style={{ display: cameraState, width: "100%", height: "100%", objectFit: "cover" }} />

          <canvas id="canvas" width="1024px" height="768px" style={{ display: canvasState }}></canvas>
          {canvasState === 'none' ?
            <div onClick={sreenShot} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70px", height: "70px", margin: "10px", borderRadius: "100px", position: "absolute", zIndex: "1", bottom: '5%', left: "46%", cursor: "pointer", backgroundColor: "white" }}>
              <div style={{ textAlign: "center", width: "60px", height: "60px", border: "2px solid", borderRadius: "100px" }}></div>
            </div> : null
          }
        </div>
      }
    </div>
  );
}
