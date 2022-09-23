import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Posts></Posts>
      <Footer></Footer>
    </div>
  );
}

export default App;
