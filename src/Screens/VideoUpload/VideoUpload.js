import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import Header from '../../components/header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import UploadVideo from '../../components/UploadVideo/UploadVideo';

function VideoUpload() {
    const [sidebar, togleSidebar] = useState(false);

    const handleToggleSidebar = () => togleSidebar(value => !value)
  return (
      <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app__container'>
            <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />


            <Container className='videos'> 
                
                <UploadVideo/>
            </Container>
           </div>
      </>
  )
}

export default VideoUpload;
