import './App.css'
import MovieCard from "./components/MovieCard"

// COMPONENT: any function in javascript that returns some kind of jsx code (needs to have some kind of parent element, just one), don't
// need to end inline 
// BASICS: defined something with a capital letter, return some JSX code, display a given number of times 
function App() { // always starts with a capital letter 
  // javascript 
  return (
    // jsx code - combination of javascript and html
    // prop - property
    /*
    <> 
      <div>
        <p>Hello World!</p>
      </div>
      <div>
        <p>Hola Mundo!</p>
      </div>
      <Text display="Hallo Welt"/> 
      <Text display="FUCK YOU!!!"/>
    </> // fragment, empty html tag
    */
    <>
      
    </>
  );
}

// dummy component 
function Text({display}) { // prop - property, curly braces inside component, 
// define keyword for different props, pass through components 
  return (
    <div>
      <p>{ display }</p>
    </div>
  );
}

export default App // default export (as opposed to named export)
