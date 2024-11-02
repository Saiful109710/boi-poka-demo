import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addStoredReadList, addStoredWishList } from '../Utility/addTodb';

const BookDetails = () => {
    const {booksId} = useParams();
    const id = parseInt(booksId)
    const books = useLoaderData();
    const book = books.find((book)=>book.bookId === id);
    const {bookId:currentBookId,image,bookName,author,review,category,tags,totalPages,publisher,yearOfPublishing,rating} = book

    const handleMarkAsRead=(id)=>{
            addStoredReadList(id)
    }

    const handleWishList = (id)=>{
            addStoredWishList(id)
    }
    

    
  return (
    <div className='my-12 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
       <div className='flex justify-center bg-gray-100 p-10'>
            
            <img src={image} className='w-[300px] ' alt="" />
            
       </div>
       <div className='space-y-3'>
             <h2 className='text-3xl font-bold '>{bookName}</h2>
             <p className='font-semibold text-gray-600'>By: {author}</p>
             
             <p className='border-y-2 border-dashed py-2 font-semibold'>{category}</p>

             <p><span className='font-bold'>Review: </span> {review}</p>

             <div className='space-x-3'>
                <span className='font-bold'>Tag :</span> {tags.map((tag,idx)=><span key={idx} className='text-green-500 mr-8 font-semibold'>#{tag}</span>)}
             </div>

             <div className='border-t-2 border-dashed mt-5'></div>

             <div className='space-y-3'>
                <p className='space-x-10'><span className='font-semibold text-gray-600'>Number of pages :</span> <span className='font-bold'>{totalPages}</span></p>
                <p className='space-x-10'><span className='font-semibold text-gray-600'>Publisher :</span> <span className='font-bold'>{publisher}</span></p>
                <p className='space-x-10'><span className='font-semibold text-gray-600'>Year of Published :</span> <span className='font-bold'>{yearOfPublishing}</span></p>
                <p className='space-x-10'><span className='font-semibold text-gray-600'>Rating :</span> <span className='font-bold'>{rating}</span></p>
             </div>
             
             <button className='btn btn-outline btn-accent mr-4' onClick={()=>handleMarkAsRead(booksId)}>Mark as Read</button>
            <button className='btn btn-accent' onClick={()=>handleWishList(booksId)}>Add to Wishlist</button>
       </div>

    </div>
  )
}

export default BookDetails
