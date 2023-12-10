import react,{useState} from 'react';
import SearchBar from './components/SearchBar';
import Display from './components/Display';

const App = () => {

  const [searchResults,setsearchResults] = useState([])

  return (
    <div>
      <SearchBar setsearchResults={setsearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
    
  )
}

export default App;