
import { useState, useEffect, useMemo } from 'react';
import supabase from './config/supabaseClient';

function BookList() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchBooks() {
            const { data: books, error } = await supabase.from('books').select('*');
            if (error) console.log(error);
            else setBooks(books);
        }
        fetchBooks();
        console.log(books);

    }, []);

    const filteredBooks = useMemo(
        () =>
            books.filter(
                (book) =>
                    book.title.toLowerCase().includes(search.toLowerCase()) ||
                    book.author.toLowerCase().includes(search.toLowerCase()) ||
                    book.genre.toLowerCase().includes(search.toLowerCase())
            ),
        [books, search]
    );

    return (
        <main>
            {/* TITULO Y BARRA DE BUSQUEDA */}
            <header className="header-card">
                <h1 className="titulo">FATCAT BOOKSTORE</h1>

                <input type="text" value={search} placeholder='Search for Title, Author or Genre' onChange={(e) => setSearch(e.target.value)} />

                <img className="svg-gato" src="https://www.svgrepo.com/show/317065/white-cat.svg" alt="cat cartoon" />
            </header>

            {/* CONTAINER LIBROS */}
            <section className='container-libros-card'>
                {filteredBooks.map((book) => (
                    <div className='libros-card' key={book.id}>
                        <img className='imagen-libro' src={book.image} alt={book.title + book.id} />
                        <h3>{book.title} </h3>
                        <p>{book.author} </p>
                        <p>{book.year}</p>
                        <p>{book.genre}</p>
                        
                        <br />
                        <button>Read More</button>


                    </div>
                ))}
            </section>
        </main>
    );
}

export default BookList;


