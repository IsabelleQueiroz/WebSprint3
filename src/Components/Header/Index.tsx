// import Salesforce from "../../assets/Salesforce-Logo.png";
// import boneco from "../../assets/boneco.png";
// import search from "../../assets/search.png";
// import "./Style.css";


// const Header = () => {
//     return(
//         <header className="header">
//             <div className="rightSide">
//                 <nav>
//                     <ul>
//                         <li>Produtos</li>
//                         <li>Indústria</li>
//                         <li>Aprendizado</li>
//                         <li><img width={65} src={Salesforce} alt="Salesforce Logo"/></li>
//                         <li>Suporte</li>
//                         <li>Empresa</li>
//                         <li> <img width={20} src={boneco} alt="Usuario Icone" />Login</li>
//                         <li><img width={20} height={20} src={search} alt="Search Icone"/></li>
//                     </ul>
//                 </nav>
//             </div>
            
//         </header>
//     )
// }

// export default Header;


import Salesforce from "../../assets/Salesforce-Logo.png";
import boneco from "../../assets/boneco.png";
import search from "../../assets/search.png";
import "./Style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>Produtos</li>
            <li>Indústria</li>
            <li>Aprendizado</li>
            <li>
              <img width={130} src={Salesforce} alt="Salesforce Logo" />
            </li>
            <li>Suporte</li>
            <li>Empresa</li>
            <li>
              <img width={15} src={boneco} alt="Usuário Ícone" />
              Login
            </li>
            <li>
              <img width={20} height={20} src={search} alt="Search Ícone" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;