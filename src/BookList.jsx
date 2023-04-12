
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
            <div className="search-card">
            <h4>SEARCH</h4>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
           

            <section className='container-libros-card'>
                {filteredBooks.map((book) => (
                    <div  className='libros-card' key={book.id}>
                        <img className='imagen-libro' src={book.image} alt={book.title + book.id} />
                        <h3>Title: {book.title} </h3>
                        <p>Author: {book.author} </p>
                        <p>Genre: {book.genre}</p>
                        <p>Year: {book.year}</p>
                       

                    </div>
                ))}
            </section>
        </main>
    );
}

export default BookList;  


