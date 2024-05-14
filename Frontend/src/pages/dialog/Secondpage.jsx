import { Typography, Button } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const videoRef = useRef(null);

  const [CanvasState, setCanvasState] = useState('none');
  const [CameraState, setCameraState] = useState('');
  const [cameraError, setCameraError] = useState(false);

  const getWebcam = (callback) => {
    try {
      const constraints = {
        'video': true,
        'audio': false
      }
      navigator.mediaDevices.getUserMedia(constraints)
        .then(callback)
        .catch(error => {
          console.log("카메라를 가져오는 데 문제가 발생했습니다.");
          setCameraError(true); // 카메라 인식 실패 메시지 표시
        });
    } catch (err) {
      console.log("카메라를 가져오는 데 문제가 발생했습니다.");
      setCameraError(true); // 카메라 인식 실패 메시지 표시
    }
  }

  useEffect(() => {
    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  function GoToCamera(target) {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoRef.current, 0, 0, 1024, 768);
    setCanvasState('none');
    setCameraState('');
    getWebcam((stream => {
      videoRef.current.srcObject = stream;
    }));
  }

  function sreenShot(target) {
    setCanvasState('');
    setCameraState('none');
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    context.scale(-1, 1);
    context.translate(-1024, 0);
    context.drawImage(videoRef.current, 0, 0, 1024, 768);
    canvas.toBlob((blob) => {
      let file = new File([blob], "fileName.jpg", { type: "image/jpeg" })
      const uploadFile = [file];
    }, 'image/jpeg');

    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();

    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }

  return (
    <div className="flex items-center justify-center m-10" style={{ display: 'flex', flexDirection: 'row', height:"768px" }}>
      {cameraError ? 
      <div>
        <Typography>카메라 인식 불가</Typography>
        <Button>
          사진을 불러오실래용?
        </Button>
      </div>
       : 
      <div style={{ position: "absolute", zIndex: "100", width: "1024px", height: "768px", backgroundColor: "white" }} >
        <video id="videoCam" ref={videoRef} autoPlay style={{ display: CameraState, width: "100%", height: "100%", objectFit: "cover" }} />

        <canvas id="canvas" width="1024px" height="768px" style={{ display: CanvasState }}></canvas>
        {CanvasState === 'none' ?
          <div onClick={sreenShot} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70px", height: "70px", margin: "10px", borderRadius: "100px", position: "absolute", zIndex: "101", bottom: '5%', left: "46%", cursor: "pointer", backgroundColor: "white" }}>
            <div style={{ textAlign: "center", width: "60px", height: "60px", border: "2px solid", borderRadius: "100px" }}>
            </div>
          </div> :
          <div onClick={GoToCamera} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70px", height: "70px", margin: "10px", borderRadius: "10px", position: "absolute", zIndex: "101", bottom: '5%', left: "46%", cursor: "pointer", backgroundColor: "white" }}>
            <p>다시 촬영</p>
          </div>
        }
      </div>
      }
    </div>
  );
}
