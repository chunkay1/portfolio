// import logo from './logo.svg';
import {Routes, Route} from 'react-router'
import { useEffect, useRef } from 'react';
import './App.css';
import { Nav, Contact, Portfolio, Home, NotFound} from './Components/index'



function App() {
  const delay = 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth /2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseDownEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dot.current.style.backgroundColor =  "#E5C07B";

      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.25)';
      dotOutline.current.style.border = "1.5px solid #E5C07B";
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      // dot.current.style.backgroundColor =  "rgb(97, 175, 239)";
      dot.current.style.backgroundColor =  "rgb(224, 108, 117)";

      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
      // dotOutline.current.style.border = "1.5px solid rgba(97, 175, 239, 0.5)";
      dotOutline.current.style.border = "1.5px solid rgba(224, 108, 117, 0.5)";
    }
  };

  const mouseDownSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
      dot.current.style.backgroundColor =  "#98C379";

      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
      dotOutline.current.style.border = "2px solid #98C379";
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dot.current.style.backgroundColor =  "rgb(97, 175, 239)";

      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.border = "1.5px solid rgba(97, 175, 239, 0.5)";
    }
  };

  const mouseDownEvent = () => {
    cursorEnlarged.current = true;
    mouseDownSize();
  }

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };
  
  return (
    <div className="App">     
      <div className="container">
        <div className="bubbles">
          <span style ={{'--i': '11'}}></span>
          <span style ={{'--i': '40'}}></span>
          <span style ={{'--i': '37'}}></span>
          <span style ={{'--i': '10'}}></span>
          <span style ={{'--i': '14'}}></span>
          <span style ={{'--i': '23'}}></span>
          <span style ={{'--i': '41'}}></span>
          <span style ={{'--i': '16'}}></span>
          <span style ={{'--i': '19'}}></span>
          <span style ={{'--i': '20'}}></span>
          <span style ={{'--i': '22'}}></span>
          <span style ={{'--i': '25'}}></span>
          <span style ={{'--i': '18'}}></span>
          <span style ={{'--i': '21'}}></span>
          <span style ={{'--i': '15'}}></span>
          <span style ={{'--i': '27'}}></span>
          <span style ={{'--i': '26'}}></span>
          <span style ={{'--i': '17'}}></span>
          <span style ={{'--i': '13'}}></span>
          <span style ={{'--i': '28'}}></span>
          <span style ={{'--i': '11'}}></span>
          <span style ={{'--i': '12'}}></span>
          <span style ={{'--i': '24'}}></span>
          <span style ={{'--i': '10'}}></span>
          <span style ={{'--i': '14'}}></span>
          <span style ={{'--i': '23'}}></span>
          <span style ={{'--i': '18'}}></span>
          <span style ={{'--i': '16'}}></span>
          <span style ={{'--i': '19'}}></span>
          <span style ={{'--i': '20'}}></span>
          <span style ={{'--i': '22'}}></span>
          <span style ={{'--i': '25'}}></span>
          <span style ={{'--i': '18'}}></span>
          <span style ={{'--i': '21'}}></span>
          <span style ={{'--i': '15'}}></span>
          <span style ={{'--i': '13'}}></span>
          <span style ={{'--i': '30'}}></span>
          <span style ={{'--i': '40'}}></span>
          <span style ={{'--i': '31'}}></span>
          <span style ={{'--i': '35'}}></span>
          <span style ={{'--i': '37'}}></span>
          <span style ={{'--i': '23'}}></span>
          <span style ={{'--i': '24'}}></span>
          <span style ={{'--i': '10'}}></span>
          <span style ={{'--i': '13'}}></span>
          <span style ={{'--i': '17'}}></span>
          <span style ={{'--i': '18'}}></span>
          <span style ={{'--i': '16'}}></span>
          <span style ={{'--i': '19'}}></span>
          <span style ={{'--i': '39'}}></span>
          <span style ={{'--i': '22'}}></span>
          <span style ={{'--i': '25'}}></span>
          <span style ={{'--i': '18'}}></span>

        </div>
      </div> 
      
        <header className="App-header">
          {/* <div ref={dotOutline} className= "cursor-dot-outline"></div>
          <div ref={dot} className="cursor-dot"></div> */}
          <Nav 
            mouseOverEvent={mouseOverEvent}
            mouseOutEvent={mouseOutEvent}/>
            
        </header>

        <Routes>
          
          <Route exact path='/' element={
            <>
              <main className="App-main">
                
                <div ref={dotOutline} className= "cursor-dot-outline"></div>
                <div ref={dot} className="cursor-dot"></div>
                <Home 
                  mouseOverEvent={mouseOverEvent}
                  mouseOutEvent={mouseOutEvent}/>
              </main>
            </>
          }/>

          <Route exact path='/home' element={
            <>
              <main className="App-main">
                
                <div ref={dotOutline} className= "cursor-dot-outline"></div>
                <div ref={dot} className="cursor-dot"></div>
                <Home 
                  mouseOverEvent={mouseOverEvent}
                  mouseOutEvent={mouseOutEvent}/>
              </main>
            </>
          }/>

          
          <Route exact path='/portfolio' element={
            <>
              <main className="App-main">
              
                <div ref={dotOutline} className= "cursor-dot-outline"></div>
                <div ref={dot} className="cursor-dot"></div>
                <Portfolio 
                  mouseOverEvent={mouseOverEvent}
                  mouseOutEvent={mouseOutEvent}/>

                {/* <img src={logo} className="App-logo" alt="logo" />

                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>

                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Learn React
                </a> */}
              </main>
            </>
          }/>

          <Route exact path='/contact' element={
            <>
              <main className="App-main">
                <div ref={dotOutline} className= "cursor-dot-outline"></div>
                <div ref={dot} className="cursor-dot"></div>
                <Contact
                  mouseOverEvent={mouseOverEvent}
                  mouseOutEvent={mouseOutEvent}/>
              </main>
            </>
          }/>
          
          <Route path='/*' element={
            <>
              <div ref={dotOutline} className= "cursor-dot-outline"></div>
              <div ref={dot} className="cursor-dot"></div>
              <NotFound
                mouseOverEvent={mouseOverEvent}
                mouseOutEvent={mouseOutEvent} />
            </>
          } />
          
        </Routes>

      

    </div>
  );
}

export default App;
