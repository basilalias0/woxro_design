
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <header className="grid w-full  justify-items-stretch px-5">
      <FontAwesomeIcon icon={faX} size="2xl" style={{color: "#ffffff",}} className='justify-self-end cursor-pointer'/>
    </header>
  );
}

export default Header;
