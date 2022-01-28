import React,{useState} from 'react';
import AdminHeader from '../../AdminComponent/AdminHeader/AdminHeader';
import AdminSidebar from '../../AdminComponent/AdminSidebar/AdminSidebar';
import UserManage from '../../AdminComponent/User/UserManage';
import {  Container } from 'react-bootstrap';


function Dashboard() {
  const [sidebar, togleSidebar] = useState(false);

  const handleToggleSidebar = () => togleSidebar(value => !value)
  return (
  <div>
      {/* <AdminHeader handleToggleSidebar={handleToggleSidebar} />  */}
    
            <div className='app__container'>
              <AdminSidebar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
            

      
            <Container style={{paddingTop:100,backgroundColor:"#D9EDF7" ,paddingBottom:569}} > 
               <UserManage/>
            </Container>
           </div>
  </div>
  )
}

export default Dashboard;
