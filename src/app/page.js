
import From from "./components/From";
import HimaliyeMyTrip from "./components/HimaliyeMyTrip"
import Aboutsection from "./components/Aboutsection";
import Destinations  from "./components/Destinations";
import Planyour from "./components/Planyour"
import HimTrek from "./components/HimTrek";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
// import File from "./components/File";
// import TripCards from "./components/TripCards";


export default function Home() {
  return (
    <>
    <main>
    <From/>
    <HimaliyeMyTrip/>
    <Aboutsection/>
    <Destinations/>
    <Planyour/>
  
    <Testimonials/>
    <HimTrek/>
    <Faq/>
    {/* <File/> */}
    {/* <TripCards/> */}
    
    
    </main>
    </>
    
  );
}
