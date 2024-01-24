import { useState, useEffect } from 'react'
import Leaf5 from '../assets/Leaf5-transformed.webp'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { DropzoneAreaBase } from 'material-ui-dropzone';
import CircularProgress from '@mui/joy/CircularProgress';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';

// const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "350px",
    height: "200px",
    marginTop: "22px",
    marginLeft: "24px",
    minHeight: "10px",
    background: "transparent",
    borderColor: "black",
    boxShadow: "0 0 5px #000",

    [theme.breakpoints.down('xs')]:{
      width: "250px",
      paddingLeft: theme.spacing(1.72),
      paddingRight: theme.spacing(1.72),
    }
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: "22.4px",
    [theme.breakpoints.down('xs')]:{
      fontSize: "19.5px"
    }
  },
  style: {
    color: "pink"
  },
  loader: {
    color: "#FFF !important"
  }
}))

const Classifier = () => {
  const classes = useStyles();
  const [image, setImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(false);

  const onSelectFile = (files) => { // It accept array of input. Hence, named as files
    if (!files || files.length === 0) {
      setImage(false);
      setData(undefined);
      setSelectedFile(undefined);
    }
    else {
      setSelectedFile(files[0]);
      setData(undefined);
      setImage(true);
    }
  }

  const clearData = () => {
    setData(undefined);
    setImage(false);
    setIsloading(false);
    setPreview(undefined);
    setSelectedFile(undefined);
  }

  const sendfile = async () => {
    if (image) {
      // Create a new FormData object to handle file uploads. This object is used to build a set of key/value pairs which will be sent to server as an HTTP request.
      let formData = new FormData();
      // Append the 'selectedFile' to the FormData object with the key "file".
      formData.append("file", selectedFile);
      // Use Axios to make an asynchronous POST request to the server.
      let res = await axios({
        method: "post",
        url: "https://project-server-ejf8.onrender.com/predict", // Server endpoint for handling file prediction.
        data: formData, // Include the FormData object containing the file.
      });

      // Check if the response status is 200 (OK). If it is then set the Data to data received from the server.
      if (res.status === 200) { 
        setData(res.data);
      }
      // Set 'isloading' state to false, indicating the file processing is complete.
      setIsloading(false);
    }
  }

  // useEffect to update the image preview when 'selectedFile' changes. Preview is used to display uploaded image within container.
  useEffect(() => {
    // If 'selectedFile' is not present, reset the preview.
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    // Create an object URL from the selected file and set it as the preview. The reason for creating objectUrl is that, src prop of image accepts url of image.
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // console.log(preview);
  }, [selectedFile]);

  // useEffect to handle actions when 'preview' changes.
  useEffect(() => {
    // If 'preview' is not present, set loading state to false and return.
    if (!preview) {
      setIsloading(false);
      return;
    }
    // Set loading state to true and initiate the file send process.
    setIsloading(true);
    sendfile();
  }, [preview])

  return (
    <>
    <img src={Leaf5} className={`absolute -z-10 top-0 object-cover lg:h-auto ${image ? 'xs:h-[100%]' : 'xs:h-[250%]'} w-full blur-[1.5px]`} />
    {/* This JSX means that if 'image' is false [absence of image], it will display the container that will accept a file in the form of an image as an input. */}
      {!image && <div className='relative flex top-[120px] mx-auto lg:w-[400px] xs:w-[300px] h-60 rounded-xl shadow-xl bg-transparent border-[1.5px] border-black'>
        <DropzoneAreaBase
          acceptedFiles={[".jpg", ".jpeg", ".png", ".webp", ".avif", ".apng"]}
          dropzoneClass={classes.container}
          dropzoneParagraphClass={classes.text} // To apply styles to DropZoneAreaBase Material-UI container, we have to make use of "makeStyles" & "withStyles" components of material-ui.
          dropzoneText='Drag and drop image of a plant leaf here.'
          onDrop={onSelectFile}
          showAlerts={[]}
        />
      </div>}
      <div className='relative grid grid-cols-1 grid-rows-3'>
        {/* This JSX means, If image is true [when user has successfully loaded the image] it will display that uploaded image within the container*/}
        {image && <div className='relative flex top-[45px] mx-auto lg:w-[400px] xs:w-[300px] h-72 rounded-t-xl shadow-xl border-t-[1.5px] border-x-[1.5px] border-b-[3.8px] border-black'>
          <img src={preview} className='w-full h-full object-cover rounded-t-xl' alt='image' /> {/*w-full h-full here ensures that image should occupy the 100% dimensions of parent container. object-cover ensures that image covers the entire container while maintaining its aspect ratio */}
        </div>}
        {/* This JSX means that, if data is true [server responds with JSON data] it will display conatiner which will show the Predicted Disease of that plant leaf & confidence.*/}
        {data && <div className='relative flex flex-col pt-2 pl-2 top-[43px] mx-auto lg:w-[400px] xs:w-[300px] h-20 rounded-b-xl bg-white border-[1.5px] border-black'>
          <p className='font-bold lora'>Predicted Disease : {data.class}</p>
          <p className='font-bold lora pt-2'>Confidence : {data.confidence}%</p>
        </div>}
        {/* This JSX means that, It will display container when isloading is true. This will show CircularProgess indicating client is fetching data from server. When data is recieved from server "isloading" will be set to false. */}
        {isloading && <div className='relative flex flex-col top-[43px] mx-auto lg:w-[400px] xs:w-[300px] h-20 rounded-b-xl bg-white border-[1.5px] border-black'>
          <>
            <div className='flex flex-col mt-4 mx-auto'>
              <CircularProgress variants="plain" size="sm" />
            </div>
            <p className='font-bold lora mx-auto'>Processing</p>
          </>
        </div>}
        {/* This JSX means that, it will display the container containing ClearIcon symbol to clear the data when data & isloading are false. It will clear the data & display the Image Uploader container. */}
        {data || isloading && <div className='absolute flex w-[35px] h-[35px] top-[420px] lg:ml-[610px] xs:ml-[160px] rounded-full justify-center items-center bg-white border border-black cursor-pointer' onClick={clearData}> {/* clearData is callback function which gets called when user click on the button. This will set the value of all variables to false or undefined. */}
          <ClearIcon />
        </div>
        }
      </div>
    </>
  )
}

export default Classifier
