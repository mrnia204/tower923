import { Outlet } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Header from "./components/feature/Header";
import Footer from './components/feature/Footer';

function App() {
 

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App;
