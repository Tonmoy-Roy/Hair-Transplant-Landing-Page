import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import FifthSection from "./Components/Sections/FifthSection";
import FirstSection from "./Components/Sections/FirstSection";
import FourthSection from "./Components/Sections/FourthSection";
import GetTouch from "./Components/Sections/GetTouch";
import SecondSection from "./Components/Sections/SecondSection";
import SeventhSection from "./Components/Sections/SeventhSection";
import SixthSection from "./Components/Sections/SixthSection";
import ThirdSection from "./Components/Sections/ThirdSection";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
      <SeventhSection></SeventhSection>
      <GetTouch></GetTouch>
      <Footer></Footer>
    </>
  );
}
