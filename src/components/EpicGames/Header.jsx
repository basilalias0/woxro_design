
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <header className="grid w-full  justify-items-stretch px-5">
      <div className='justify-self-end cursor-pointer'>
      <FontAwesomeIcon icon={faXmark} size="2xl"  style={{color: "#ffffff",width:"47px",height:"47px"}}/></div>
      
    </header>
  );
}

export default Header;

