import tensorflow as tf
import numpy as np
import os
import cv2
from keras import Sequential
import matplotlib.pyplot as plt
from keras.models import load_model
from keras.layers import Conv2D,MaxPooling2D,Dense,Flatten,Dropout
from keras.metrics import Precision,Recall,CategoricalAccuracy
gpus=tf.config.experimental.list_physical_devices('GPU')
for gpu in gpus:
    tf.config.experimental.set_memory_growth(gpu,True)
data_dir=r"C:\Users\USER\Downloads\archive (1)"
dataChicken=tf.keras.utils.image_dataset_from_directory(data_dir,shuffle=True)
#noScaledData=dataChicken.map(lambda x,y: (x,y))
data=dataChicken.map(lambda x,y:(x/255,y))
#noscaled_iterator=noScaledData.as_numpy_iterator()
#batch=noscaled_iterator.next()
#fig,ax=plt.subplots(ncols=4,figsize=(20,20))
#for index,img in enumerate(batch[0][:4]):
  #  ax[index].imshow(img.astype(int))
 #   ax[index].title.set_text(batch[1][index])
#plt.show()
train_size=int(len(data)*0.7)
test_size=int(len(data)*0.1)
val_size=int(len(data)*0.2)
train=data.take(train_size)
val=data.skip(train_size).take(val_size)
test=data.skip(train_size+val_size).take(test_size)
dotest=False
if(dotest):
    model=Sequential()
    model.add(Conv2D(16,(3,3),1,activation='relu',input_shape=(256,256,3)))
    model.add(MaxPooling2D())
    model.add(Conv2D(64,(3,3),1,activation='relu'))
    model.add(MaxPooling2D())
    model.add(Conv2D(16,(3,3),1,activation='relu'))
    model.add(MaxPooling2D())
    model.add(Flatten())
    model.add(Dense(256,activation='relu'))
    model.add(Dense(4,activation='softmax'))
    model.compile('adam',loss=tf.losses.SparseCategoricalCrossentropy(),metrics=['accuracy'])
    logdir=r'C:\Users\USER\Downloads\chickenLogs'
    tensor_callback=tf.keras.callbacks.TensorBoard(log_dir=logdir)
    hist=model.fit(train,epochs=21,validation_data=val,callbacks=[tensor_callback])
else:
    model=load_model('chickenDisease.keras')
pre=Precision()
re=Recall()
acc=CategoricalAccuracy()
for batch in test.as_numpy_iterator():
    x,y=batch
    prediction=model.predict(x)
    y_one_hot=tf.one_hot(y,depth=4)
    pre.update_state(y_one_hot,prediction)
    acc.update_state(y_one_hot,prediction)
    re.update_state(y_one_hot,prediction)
    print(f'Precision: {pre.result().numpy()}, Recall: {re.result().numpy()}, Accuracy: {acc.result().numpy()}')
model.save('chickenDisease.keras')
#2 seems to be new castle
#1 seems to be healthy
#0 seems to be cocci
#3 seems to be salmonella


