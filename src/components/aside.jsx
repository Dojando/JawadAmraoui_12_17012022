import logo1 from "../images/asideLogo1.png"
import logo2 from "../images/asideLogo2.png"
import logo3 from "../images/asideLogo3.png"
import logo4 from "../images/asideLogo4.png"

function Aside() {
  return (
    <div className="aside">
      <ul>
        <li><img src={ logo1 } alt="logo de sport" /></li>
        <li><img src={ logo2 } alt="logo de sport" /></li>
        <li><img src={ logo3 } alt="logo de sport" /></li>
        <li><img src={ logo4 } alt="logo de sport" /></li>
      </ul>
      <p className="mention-legal">Copyright, SportSee 2022</p>
    </div>
  );
}

export default Aside;
