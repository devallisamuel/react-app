import React  from 'react';
import { render } from 'react-dom';
import searchBooks from './searchBooks';

const App = () => {
  return(
      <div>
          <searchBooks />
      </div>
    );
}
export default App;
// render(<App/>, document.getElementById("root"));