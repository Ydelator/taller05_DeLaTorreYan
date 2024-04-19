import book from "../../../assets/img/Book.png"

const Home = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-8 d-flex flex-row align-items-center justify-content-center rounded-5 p-2 flex-wrap" style={{backgroundColor:"#d52943"}}>
        <img src={book} alt="book-image" style={{width:"450px"}}/>
        <div className="p-4 col-6">
          <h4 className="text-light text-justify">Sean bienvenidos a su biblioteca de confianza, donde contamos con todos los libros que necesiten.</h4>
          <button className="btn btn-outline-light mt-3">Mas informacion</button>
        </div>
      </div>
    </div>
  )
}

export default Home