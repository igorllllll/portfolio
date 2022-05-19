
  
import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">Minhas Qualificações</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>Typescript</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>python</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content c-plus-plus"></div>
          <h1>nodejs</h1>
        </div>
        <div className="qualification">
          <div className="content c-sharp"></div>
          <h1>docker</h1>
        </div>
        <div className="qualification">
          <div className="content kotlin"></div>
          <h1>django</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;