from flask_restful import reqparse, Resource
import requests

class Test(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("image_url")
        args = parser.parse_args()
        argument = args["image_url"]
        # 외부 URL에서 이미지 가져오기
        # image_data = requests.get(argument).content
        # 나중에 image_data 활용예정

        # sample값 출력
        predicted_image_name = "sample_seg.png"
        new_url = "https://yeojisu.pythonanywhere.com/image2/"+predicted_image_name
        label = "MEL" # 'MEL', 'NV', 'BCC', 'AKIEC', 'BKL', 'DF', 'VASC'
        return {"image_url": new_url, "label": label}, 200