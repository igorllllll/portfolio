import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">?????</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">IGOR</h1>
          <h3 className="position">DEV</h3>
          <h4 className="about">
            Não sei o que colocar aqui ainda mas ta aqui! 
          </h4>
          <a href="#contact" className="contact-member">
            <span>CONTATO</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">IGOR</h1>
          <h3 className="position">DEV</h3>
          <h4 className="about">
          Não sei o que colocar aqui ainda mas ta aqui! 
          </h4>
          <a href="#contact" className="contact-member">
            <span>CONTATO</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;