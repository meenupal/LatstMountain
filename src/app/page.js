import From from "./components/From";
import HimaliyeMyTrip from "./components/HimaliyeMyTrip";
import Aboutsection from "./components/Aboutsection";
import Destinations from "./components/Destinations";
import Planyour from "./components/Planyour";
import HimTrek from "./components/HimTrek";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";

export default function Home() {
  const loading = true;

  return (
    <>
      <main>
        <From />
        <HimaliyeMyTrip />
        <Aboutsection />
        <Destinations />
        <Planyour />

        <Testimonials />
        <HimTrek />
        <Faq />
      </main>
    </>
  );
}
