import logo from './logo.svg';
import {Routes, Route} from 'react-router'
import './App.css';
import { Nav, Contact, Portfolio, Home} from './Components/index'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <>
            <header className="App-header">
              <Nav />
            </header>
          
            <main className="App-main">
              <Home />
            </main>
          </>
        }/>
        
        <Route path='/portfolio' element={
          <>
            <header className="App-header">
              <Nav />
            </header>
            <main className="App-main">
              <Portfolio />

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

        <Route path='/contact' element={
          <>
            <header className="App-header">
              <Nav />
            </header>

            <main className="App-main">
              <Contact />
            </main>

          </>
        }/>
        
      </Routes>
    </div>
  );
}

export default App;
