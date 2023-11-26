import Header from "./Components/header";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/slideshow";
import Mark from "./Components/Marq";

export default function Home() {
  return (
    <div >
      <Header />
      <Navbar />
      <Slideshow />
      <div style={{ height:'25px' }}></div>
      <Mark />
    </div>
  );
}
