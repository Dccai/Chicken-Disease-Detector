from flask import Flask,request
import pandas as pd
import numpy as np
import sys
import tensorflow as tf
from keras.models import load_model
from flask_cors import CORS
import cv2
import base64
app=Flask(__name__)
cors=CORS(app)
@app.route('/chickendisease',methods=['POST'])
def chickendisease():
    model=load_model("chickenDisease.keras")
    base64_image_data=request.json['data']
    image_data=base64_image_data.split(",")[1]
    image_bytes=base64.b64decode(image_data)
    image_array=np.frombuffer(image_bytes,np.uint8)
    image=cv2.imdecode(image_array,cv2.IMREAD_COLOR)
    image=cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
    resize=tf.image.resize(image,(256,256))
    prediction=model.predict(np.expand_dims(resize/255,0))
    prediction=np.argmax(prediction,axis=-1)
    prediction_list=prediction.tolist()
    return {
        'result':prediction_list
    }
if __name__=='__main__':
    app.run(debug=True)