import React, { useState} from 'react';
import './App.css';
import CustomDropzone from './CustomDropzone';
import CustomDropzone2 from './CustomDropzone2';
import 'react-dropzone-uploader/dist/styles.css'

function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>{
    setFileNames(acceptedFiles.map(file => file.name));
  }  



  return (
    <div className="App container mx-auto">
      
     {/* <CustomDropzone  /> */}

     <CustomDropzone2  />



    </div>
  );
}

export default App;
