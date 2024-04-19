import { Route, Routes } from "react-router-dom";

import  Inicio  from "../../components/container/Home";
import  BookCreate  from "../../components/books/BookCreate";
import  BookList  from "../../components/books/BookList";
import  BookAdmin  from "../../components/books/BookAdmin";
import  BookUpd  from "../../components/books/BookUpd";

import  About  from "../../components/others/About";
import  NotFound  from "../../components/container/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/bookcre" element={<BookCreate />} />
      <Route path="/booklist" element={<BookList />} />
      <Route path="/bookadm" element={<BookAdmin />} />

      <Route path="/bookupdate/:codigo" element={<BookUpd />} />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing