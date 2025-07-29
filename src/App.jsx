import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import NameCard from "./components/content/NameCard";
import Message from "./components/content/Message";
import Image from "./components/content/Image";
import Gift from "./components/content/Gift";
import Quote from "./components/content/Quote";

import JourneyGallery from "./components/content/JourneyGallery";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-pastelPink">
      <Header />
      <NameCard />
      <Image />
      <Message />
      <JourneyGallery />
      <Gift />
      <Quote />
      <Footer />

    </div>
  );
}

export default App;
