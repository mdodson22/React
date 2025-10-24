import './App.css';
import Home from "./pages/Home"

// COMPONENT: any function in javascript that returns some kind of jsx code (needs to have some kind of parent element, just one), don't
// need to end inline 
// BASICS: defined something with a capital letter, return some JSX code, display a given number of times 
      /* {movieNumber === 1 ? ( // conditional rendoring, if movieNumber is equal to 1
        <MovieCard movie={{title: "Mel's Marvelous Film", release_date: "2003"}}/>
      ) : ( // otherwise ...
        <MovieCard movie={{title: "Eternal Sunshine of the Spotless Mind", release_date: "2004"}}/>
      ) } */
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
    {{}}first set of braces defines denoting a variable, second set of braces is the object 
    */
function App() { // always starts with a capital letter 
  // const movieNumber = 2;
  // javascript 
  return (
    <>
      <Home />
    </>
  );
}

/*
// dummy component 
function Text({display}) { // prop - property, curly braces inside component, 
// define keyword for different props, pass through components 
  return (
    <div>
      <p>{ display }</p>
    </div>
  );
}
*/

export default App; // default export (as opposed to named export)
