from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
async def read_root():
    return FileResponse('../../Frontend/src/index.html')

@app.get("/img/main")
async def read_root_img():
    return FileResponse('../../Frontend/img/phone.png')

@app.get("/photo")
async def read_photo():
    return FileResponse('../../Frontend/src/photo.html')

@app.get("/live")
async def read_live():
    return FileResponse('../../Frontend/src/live.html')

@app.get("/about")
async def read_about():
    return FileResponse('../../Frontend/src/about.html')

@app.get("/img/about")
async def read_about_img():
    return FileResponse('../../Frontend/img/about.png')

@app.get("/skin_diseases")
async def read_skin_diseases():
    return FileResponse('../../Frontend/src/diseases.html')

@app.get("/img/diseases")
async def read_about_img():
    return FileResponse('../../Frontend/img/about.png')

@app.get("/community")
async def read_community():
    return FileResponse('../../Frontend/src/community.html')

@app.get("/img/community")
async def read_about_img():
    return FileResponse('../../Frontend/img/about.png')

@app.get("/diagnosis_records")
async def read_diagnosis_records():
    return FileResponse('../../Frontend/src/diagnosis.html')

@app.get("/img/diagnosis")
async def read_about_img():
    return FileResponse('../../Frontend/img/about.png')

@app.get("/navbar")
async def read_navbar():
    return FileResponse('../../Frontend/src/navbar.html')

@app.get("/img/icon")
async def read_about_img():
    return FileResponse('../../Frontend/img/icon.png')