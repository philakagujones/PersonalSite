import Navbar from "./components/navbar/navbar";
import './App.css'
import Main from "./components/main/main";
import {themeContext} from './mode'
import { useContext } from "react";
import Footer from "./components/footer/footer";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}
    >
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
