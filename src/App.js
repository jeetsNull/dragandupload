import React, { useState} from 'react';
import './App.css';
import CustomDropzone from './CustomDropzone';
import CustomDropzone2 from './CustomDropzone2';
import CustomDropzone3 from './CustomDropzone3';
import 'react-dropzone-uploader/dist/styles.css'

function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>{
    setFileNames(acceptedFiles.map(file => file.name));
  }  



  return (
    <div className="App container mx-auto">
      
     {/* <CustomDropzone  /> */}

     <CustomDropzone3  />



    </div>
  );
}

export default App;
