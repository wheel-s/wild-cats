
      
import Header from "./components/Header";
import Slide from "./components/Slide";
import Modal from "./components/Modal";
import Footer from "./components/footer";
import img1 from './components/images/img2.jpg'
import img2 from './components/images/img3.jpg'
import img3 from './components/images/img4.jpg'
import img4 from './components/images/img5.jpg'
import img5 from './components/images/img6.jpg'



function App() {

  const Images= [img1, img2, img3, img4, img5]
  return (
    <div className="container">
      <Header />
      <Modal />
      <Slide img={Images} />
      <Footer  />
    </div>
  );
}

export default App;


