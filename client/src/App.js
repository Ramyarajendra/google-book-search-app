import {Provider} from 'react-redux'
import store from './store';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Books from './components/books/Books';

function App() {
  return (
    <Provider store ={store}>
      <div >
        <Navbar/>
        <Search/>
        <Books/>
      </div>
    </Provider>
  );
}

export default App;
