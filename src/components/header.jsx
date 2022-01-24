import logo from "../images/logoSite.png"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo du site SportSee" />
      <div className="header-navbar">
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
