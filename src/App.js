import GlobalStyles from "./styles/GlobalStyles";
import { tsubasa } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import HowToPlay from "./components/sections/HowToPlay";
import Footer from "./components/Footer";
import Community from "./components/sections/Community";
import Faq from "./components/sections/Faq";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={tsubasa}>
        <Navigation />
        <Home />
        <About />
        <HowToPlay />
        <Community />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default App;
