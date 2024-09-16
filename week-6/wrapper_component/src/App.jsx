import { TextComponent } from "./components/TextComponent";
import { CardWrapper } from "./components/CardWrapper";
import "./App.css";

// The use of wrapper is that whenever we have components that have some style which is independant of inner logic, we
// should wrap the text inside of the wrapper instead of putting the styles in that component itself.

function App() {
  return (
    <>
      {/*
        This is an unsual way of wrapping components, usually we use
        something similar to what we do in native html (look the example below)
       <CardWrapper innerComponent={<TextComponent />} /> 
       */}
      <CardWrapper>
        {/* Look at CardWrapper.jsx for comments regarding how it accepts the inputs below 
        Instead of rewriting all this we could have very well just done:-
        <CardWrapper>
          <TextComponent></TextComponent/>
        </CardWrapper>
        but for simplicity we decided to rewrite it. 
        */}
        <div>
          <h2>Hi there</h2>
          <h5>There is something I want to say to you.</h5>
          <h2>Now there is one more thing I want to say</h2>
          <h5>That I am crazy.</h5>
        </div>
      </CardWrapper>
    </>
  );
}

export default App;
