import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-native/font-awesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


import {Link} from 'react-router-dom';


function Footer() {
    return (
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" href="#">Active</Link>
  </li>
  <li class="nav-item">
  <FontAwesomeIcon icon={brands('facebook')} />
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="#"></Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link disabled">Disabled</Link>
  </li>
</ul>


    );
}


export default Footer;