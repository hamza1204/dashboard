import Image from 'next/image'
import Link from 'next/link'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLightbulb ,faPlus } from '@fortawesome/free-solid-svg-icons'


export default function HeaderFeaturedNav() {
  return (
    <div className='d-flex align-items-center' >
      <div className="text-white position-relative d-flex align-items-center" style={{ backgroundColor: "rgba(7, 15, 33, 0.06)", padding: '8px 5px' }}>



        <div className='d-flex avatar-2 align-items-center mx-1 '>
          <Image
            fill
            className="position-relative rounded-circle"
            src="/assets/img/avatars/2.jpg"
            alt="user@email.com"
          />
          <div className='px-1 rounded' style={{ backgroundColor: 'orange' }}>15</div>

        </div>
        <div className='d-flex avatar-2 align-items-center mx-1'>

          <Image
            fill
            className="position-relative rounded-circle "
            src="/assets/img/avatars/Ellipse45.png"
            alt="user@email.com"
          />
          <div className='px-1 rounded ms-1' style={{ backgroundColor: 'purple' }}>15</div>
        </div>

      </div>
      <div className='p-2 px-3 h-100 drop-down'>
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </div>

      <div className='p-2 px-3 h-100 border rounded-3 mx-1'>
        <FontAwesomeIcon icon={faLightbulb} size="lg" />
      </div>

      <div className='p-2 px-3 h-100 plus'>
        <FontAwesomeIcon icon={faPlus} color={'#fff'} size="lg" />
      </div>

    </div>

    // <Nav>
    //   <Nav.Item>
    //     <Link href="/" passHref legacyBehavior>
    //       <Nav.Link className="p-2">Dashboard</Nav.Link>
    //     </Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Link href="/" passHref legacyBehavior>
    //       <Nav.Link className="p-2">Users</Nav.Link>
    //     </Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Link href="/" passHref legacyBehavior>
    //       <Nav.Link className="p-2">Settings</Nav.Link>
    //     </Link>
    //   </Nav.Item>
    // </Nav>
  )
}
