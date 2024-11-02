import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/addTodb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList,setReadList] = useState([])
    
    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map((id)=>parseInt(id))
        const readBookList = allBooks.filter((book)=>storedReadListInt.includes(book.bookId))
        setReadList(readBookList)
    },[])

    console.log(readList)

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read book list</h2>
          {
            readList.map((book) => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>wish list book</h2>
        </TabPanel>
      </Tabs>
      
    </div>
  );
};

export default ListedBooks;
