import React    from 'react';
import Favicon  from 'react-favicon';
import './App.css';
import icon     from './assets/icon.png';
import NavBar   from './pages/NavBar';
import ShowCase from './pages/ShowCase';

// import 'react-image-gallery/styles/css/image-gallery.css'

function App() {

    return (
        <div className="box">
            <Favicon url={icon}/>
            <NavBar/>
            <ShowCase/>
        </div>
    );
}

export default App;
