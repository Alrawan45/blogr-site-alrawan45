import './App.css';
import Nav from './Components/Nav/Nav'
import Content from './Components/Nav/Content/Content'
import ImageContent from './Components/Nav/ImageContent/ImageContent'
import LastContent from './Components/Nav/LastContent/LastContent'
import Footer from './Components/Nav/Footer/Footer'

function App() {
  return (
    <div className="App">
     <Nav/>
     <Content/>
     <ImageContent/>
     <LastContent/>
     <Footer/>
    </div>
  );
}

export default App;
