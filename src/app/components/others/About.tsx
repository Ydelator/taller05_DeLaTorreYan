import image1 from "../../../assets/img/perfil1.jpg";
import image2 from "../../../assets/img/pefil2.jpg";
import image3 from "../../../assets/img/perfil3.jpg";
import image4 from "../../../assets/img/perfil4.jpg";

const About = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="col-10 d-flex flex-wrap justify-content-evenly align-items-center gap-5">
        <div
          className="card text-center p-3 rounded-5 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "500px", height: "600px", overflow: "hidden", backgroundColor:"#811a33", color:"#ffffff", border:"solid #f37982"}}
        >
          <div
            className="card-img-top d-flex justify-content-center p-2"
            style={{ height: "70%", width:"95%", overflow: "hidden" }}
          >
            <img src={image1} alt="perfil_1" style={{ width: "100%" }} />
          </div>
          <div className="card-body">
            <h3 className="card-title">Director de proyecto</h3>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              nobis obcaecati adipisci cupiditate dolore labore doloribus cumque
              eaque, voluptatum accusantium, laudantium beatae libero itaque,
              enim.
            </p>
          </div>
        </div>
        <div
          className="card text-center p-3 rounded-5 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "500px", height: "600px", overflow: "hidden", backgroundColor:"#811a33", color:"#ffffff", border:"solid #f37982"}}
        >
          <div
            className="card-img-top d-flex justify-content-center p-2"
            style={{ height: "70%", width:"95%", overflow: "hidden" }}
          >
            <img src={image2} alt="perfil_2" style={{ height: "100%" }} />
          </div>
          <div className="card-body">
            <h3 className="card-title">Desarrollador Frontend</h3>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              accusamus perferendis, dicta possimus vitae impedit ea fugit
              dolorum quos dolor veritatis dolore voluptatibus autem cumque ab
              fuga minus blanditiis numquam?
            </p>
          </div>
        </div>
        <div
          className="card text-center p-3 rounded-5 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "500px", height: "600px", overflow: "hidden", backgroundColor:"#811a33", color:"#ffffff", border:"solid #f37982"}}
        >
          <div
            className="card-img-top d-flex justify-content-center p-2"
            style={{ height: "70%", width:"95%", overflow: "hidden" }}
          >
            <img src={image3} alt="perfil_3" style={{ height: "100%" }} />
          </div>
          <div className="card-body">
            <h3 className="card-title">Desarrollador Backend</h3>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              accusamus perferendis, dicta possimus vitae impedit ea fugit
              dolorum quos dolor veritatis dolore voluptatibus autem cumque ab
              fuga minus blanditiis numquam?
            </p>
          </div>
        </div>
        <div
          className="card text-center p-3 rounded-5 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "500px", height: "600px", overflow: "hidden", backgroundColor:"#811a33", color:"#ffffff", border:"solid #f37982"}}
        >
          <div
            className="card-img-top d-flex justify-content-center p-2"
            style={{ height: "70%", width:"95%", overflow: "hidden" }}
          >
            <img src={image4} alt="perfil_4" style={{ height: "100%" }} />
          </div>
          <div className="card-body">
            <h3 className="card-title">Analista de riesgos</h3>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              accusamus perferendis, dicta possimus vitae impedit ea fugit
              dolorum quos dolor veritatis dolore voluptatibus autem cumque ab
              fuga minus blanditiis numquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
