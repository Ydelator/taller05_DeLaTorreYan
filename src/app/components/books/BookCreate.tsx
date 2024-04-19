const bookCreate = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div
        className="col-9 rounded-5 p-5"
        style={{ backgroundColor: "#fbd0d2" }}
      >
        <form className="row g-3 needs-validation" style={{ color: "#480916" }}>
          <div className="col-md-4 position-relative">
            <label htmlFor="nombre" className="form-label">
              Nombre de libro
            </label>
            <input
              type="text"
              className="form-control border border-danger"
              id="nombre"
              name="nombre"
              required
            />
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="autor" className="form-label">
              Autor
            </label>
            <input
              type="text"
              className="form-control border border-danger"
              id="autor"
              name="autor"
              required
            />
          </div>

          <div className="col-md-4 position-relative">
            <label htmlFor="edit" className="form-label">
              Editorial
            </label>
            <input
              type="text"
              className="form-control border border-danger"
              id="edit"
              name="edit"
              required
            />
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="gene" className="form-label">
              Genero
            </label>
            <select className="form-select border border-danger" id="gene" name="gene" required>
              <option selected disabled value="">
                Seleccione el genero
              </option>
              <option>Misterio</option>
              <option>Terror</option>
              <option>Romance</option>
              <option>Historico</option>
              <option>Accion</option>
            </select>
          </div>

          <div className="col-md-3 position-relative">
            <label htmlFor="prec" className="form-label">
              Precio
            </label>
            <input
              type="text"
              className="form-control border border-danger"
              id="prec"
              name="prec"
              required
            />
          </div>

          <div className="col-12">
            <button className="btn btn-outline-danger mt-3" type="submit">
              Registrar Libro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default bookCreate;
