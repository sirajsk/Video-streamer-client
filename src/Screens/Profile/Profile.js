import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserProfile from '../../components/UserProfile/UserProfile'


function Profile() {
    const [sidebar, togleSidebar] = useState(false);
    const handleToggleSidebar = () => togleSidebar(value => !value)
  return (
      <>
       <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app__container'>
            <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />


            <Container className='videos'> 
              <UserProfile/>
            </Container>
           </div>
      
      
      </>
  )
}

export default Profile;
