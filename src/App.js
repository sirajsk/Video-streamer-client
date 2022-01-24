// import logo from './logo.svg';
import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './Screens/homeScreen/HomeScreen';
import "./_app.scss"

function App() {

 const [sidebar, togleSidebar] = useState(false);

 const handleToggleSidebar = ()=> togleSidebar(value => !value)
  return (

    <div>


      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app__container'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container className='app_main'>
          <HomeScreen/>
        </Container>
      </div>
    </div>
  )



}

export default App;
