import { useState, useEffect } from 'react';
import supabase from './config/supabaseClient';
import { NavLink, useParams } from 'react-router-dom';




function BookDetails(props) {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    
  


    useEffect(() => {

        async function fetchBooks() {
            const { data: books, error } = await supabase
            .from('books')
            .select('*')
            .eq('id', BigInt(bookId));
            if (error) console.log(error);
            else setBooks(books);
        }
        fetchBooks();     

    }, [bookId]);



    return (
        <main>


            {/* CONTAINER LIBROS */}
            <section className='container-libros-details'>
                {books.map((book) => (
                    <div className='libros-card' key={book.id}>
                        <img className='imagen-libro-details' src={book.image} alt={book.title + book.id} />
                        <h3>{book.title} </h3>
                        <p>{book.description} </p>

                        <NavLink  className='button' to={"/"}>Back Home</NavLink>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default BookDetails;