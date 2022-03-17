import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Introduce from './components/Introduce/Introduce';
import SideLinks from './components/SideLinks/SideLinks';
import About from './components/About/About';
import Work from './components/Work/Work';
import OtherProjects from './components/OtherProjects/OtherProjects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright/Copyright';

const App = () => {
  
const scrollItems = () => {
  const faders = document.querySelectorAll('.fade-in');
  const sliders = document.querySelectorAll('.slide-in');
  const options = {
      rootMargin: "-200px 0px 0px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              return;
          } else{
              entry.target.classList.add('appear');
              appearOnScroll.unobserve(entry.target);
          }
      })
  }, options);

  faders.forEach(fader => {
      appearOnScroll.observe(fader)
  })

  sliders.forEach(slider => {
      appearOnScroll.observe(slider)
  })
}

  useEffect(() => {
    scrollItems();
    window.scrollTo(0, 0);
  }, [])

  return (
    <React.Fragment>
      <Header />
      <Introduce />
      <SideLinks />
      <main>
      <About />
      <Work />
      <OtherProjects />
      <Contact />
      </main>
        <Copyright />
    </React.Fragment>
  )
}

export default App;
