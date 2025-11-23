import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme } from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Video from "./components/sections/Video";
import Benefits from "./components/sections/Benefits";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import Applications from "./components/sections/Applications";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Navigation />
        <Home />
        <About />
        <Applications />
        <Video />
        <Benefits />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
