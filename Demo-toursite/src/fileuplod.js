import React, { Component } from 'react';
class Fileupload extends Component
{
    state={
        selectdFile:null
    }
    fileuploadhandler(event)
    {
        // console.log(event.target.files[0])
         this.setState({
             selectdFile:event.target.files[0]
         })
    }
    fileup()
    {
        const fd=new FormData();
        fd.append('image',this.state.selectdFile,this.state.selectdFile.name);
        axios.post('',fd,{
            onUploadProgress:progressEvent =>{
                console.log('Upload Process:'+ Math.round(progressEvent.loaded/ progressEvent.total)*100 +'%')
            }
        });
        then(response =>{
            console.log(response);
        })
    }
    render()
    {
        return(<div>
            <input type="file" onChange={this.fileuploadhandler}/>
            <button onClick={this.fileup}>Upload</button>
            
        </div>)
    }
}
export default Fileupload;