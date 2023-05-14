import { Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetails from './BookDetails';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
      </Routes>
    
  );
}

export default App;

