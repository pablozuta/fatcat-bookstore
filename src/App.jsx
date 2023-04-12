import BookList from "./BookList";

function App() {
  return (
    <div>
      <header className="header-page">
      <h1 className="titulo">FATCAT BOOKSTORE</h1>
      <img className="svg-gato" src="https://www.svgrepo.com/show/316995/cat.svg" alt="cat reading cartoon" />
      </header>
      
      <BookList />
     
    </div>
  );
}

export default App;
