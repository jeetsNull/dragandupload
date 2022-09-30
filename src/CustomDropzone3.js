import React, { useEffect, useState} from 'react';
import Preview from './Preview';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css'


const Layout = ({ input, previews, submitButton, dropzoneProps, files, remove, extra: { maxFiles } }) => {
    return (
      <div>
        {previews.map((item, index)=>{
            return(<>
                    <div key={index} className='flex flex-wrap w-full justify-between items-start p-1'>
                        <label className='flex w-full'>{item?.props?.meta?.status}, {item?.props?.meta?.name} {item?.props?.meta?.size} </label>
                        <div className='flex w-full justify-between items-start '>
                            <div className="w-full bg-gray-200 h-6 rounded-full dark:bg-gray-700">
                            <div className="bg-blue-600 text-sm h-6 font-medium text-blue-100 text-center p-0.5 rounded-full" style={{"width": `${Math.round(item?.props?.meta?.percent)}%`}}>{Math.round(item?.props?.meta?.percent)}%</div>
                            </div>
                            <button type="button" onClick={(e)=> {item?.props?.fileWithMeta?.remove(e) }}className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                            </button>
                        </div>
                        </div>
            </> )
        })
        }

        {console.log("--------",previews)}
  
        <div {...dropzoneProps}>
          {files.length < maxFiles && input}
        </div>
        {}
        {/* {files.length > 0 && submitButton} */}
      </div>
    )
  }


const CustomDropzone = () => {

  const [updateStatus, setUpdateStatus] = useState("");
  
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
  
  const handleChangeStatus = (previews, status) => {
    console.log(previews, status)
    if (status === 'headers_received') {
        // setUpdateStatus(`${meta.name} uploaded!`);
        // remove();
        
      } else if (status === 'aborted') {
        // setUpdateStatus(`${meta.name} upload failed...`); 
      }
     
  }





  return (
    <div className=" container mx-auto">

<Dropzone
      getUploadParams={getUploadParams}
    //   LayoutComponent={Layout}
    //   onSubmit={handleSubmit}
      maxFiles={1}
      onChangeStatus={handleChangeStatus}
    //   PreviewComponent={Preview}
    //   classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent="Upload a file or drag and drop"
      
    />

      {updateStatus}
    </div>
  );
}

export default CustomDropzone;
