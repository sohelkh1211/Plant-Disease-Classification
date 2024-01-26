# Plant-Disease-Classification
This is my personal project that I have built using CNN and also built web app for the same. This is basically a web app with the help of which farmers or researchers can be able to detect which kind of disease the plant has by simply uploading image of leaf of that plant. This app can only detect diseases of Apple, Cherry, Corn, Grape, Potato, Tomato and Pepper plants. I have built python server ( where I've loaded my h5 model ) using FastAPI module of python. I've used uvicorn which is an ASGI web server implementation for Python to run python server.

`After Loading, the page should look like this.`

<img width="960" alt="image" src="https://github.com/sohelkh1211/Plant-Disease-Classification/assets/125993375/aa92397f-c6f8-4055-8e13-9d325adce8ad">

<h2>Setup for Python:</h2>

1. Install Python version 3.11.0
2. Install Python packages by using following command.

```
pip install -r requirements.txt
```

<h2>Setup for Reactjs</h2>

1. Install Nodejs
2. Move to directory where project files are stored.
E.g :- If your files are stored inside Project folder

```
C:\Users\Example\Desktop>cd Project
```
3. Run following commands one by one to create vite app for frontend.
```
npm create vite@latest ./ -- --template react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
4. Copy the content from my package.json file and paste in your package.json. After that run the following command.
```
npm install --legacy-peer-deps
```


<h2>To Train the Model</h2>

1. Download the PlantVillage dataset and Plant.ipynb from models folder. <br/>
   `It is advised to run ipynb file on kaggle notebook with accelarator set to TPU`
2. Upload Plant.ipynb notebook as well as dataset on kaggle.
3. Run all the cells one by one. If you want to make any changes to code like changing number of Epochs or anything then you are free to do so.
4. Once trained download the my_model.h5 model.

<h2>To Run this project</h2>

1. First run main.py file under server folder [This is your server to which API call will be made through React App.].
2. Run frontend app using following command.
```
npm run dev
```
