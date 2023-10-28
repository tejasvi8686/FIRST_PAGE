import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Videos from "./components/Videos";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Education />
      <Courses />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
