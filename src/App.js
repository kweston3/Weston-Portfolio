import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Outlet, useLocation, useParams } from "react-router-dom";
import heroSections from "./heroSections";

const App = () => {
  const location = useLocation();
  const { id } = useParams(); // Extract ID from the URL
  let heroProject;

  // Determine the hero project based on the current route
  switch (true) {
    case location.pathname === "/":
      heroProject = heroSections[0]; // Home
      break;
    case location.pathname.startsWith("/project/"):
      heroProject =
        heroSections.find((project) => project._id === id) || heroSections[0]; // Find project by ID
      break;
    case location.pathname === "/contact":
      heroProject = heroSections[2]; // Contact
      break;
    case location.pathname === "/about":
      heroProject = heroSections[3]; // About
      break;
    default:
      heroProject = heroSections[0]; // Default to Home if no match
  }

  return (
    <>
      <Header />
      <HeroSection heroProject={heroProject} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
