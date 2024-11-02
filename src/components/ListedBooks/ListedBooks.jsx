import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/addTodb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort,setSort] = useState('')

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  const handleSort = (sortType)=>{
        setSort(sortType);

        if(sortType==='No of Pages'){
            const sortedReadList = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
            setReadList(sortedReadList);
        }

        if(sortType==="Ratings"){
            const sortedReadList = [...readList].sort((a,b)=>a.rating-b.rating)
            setReadList(sortedReadList)
        }
  }

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">{sort? `Sort By: ${sort}`:'Sort By'}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=>handleSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={()=>handleSort('No of Pages')}>
            <a>No of Pages</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read book list</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>wish list book</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
