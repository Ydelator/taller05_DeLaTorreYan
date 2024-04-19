import error404 from "../../../assets/img/404browser_102160.png"

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="d-flex flex-column col-7 align-items-center">
        <img src={error404} alt="NotFound" />
        <h2 style={{color:"#ffffff"}}>Pagina no encontrada</h2>
      </div>
    </div>
  )
}

export default NotFound