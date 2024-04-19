import './App.css';

import { BrowserRouter } from "react-router-dom";
import  Routing  from "./app/utilities/routes/Routing";
import  Navbar  from "./app/components/container/Navbar";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routing />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
