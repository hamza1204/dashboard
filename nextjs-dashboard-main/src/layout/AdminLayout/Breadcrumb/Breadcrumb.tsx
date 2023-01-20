import { Breadcrumb as BSBreadcrumb } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faBullhorn, faCode, faPenFancy, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


export default function Breadcrumb() {
  return (
    <BSBreadcrumb listProps={{ className: 'my-0 ms-2 align-items-center fw-bold text-dark' }}>
      <BSBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        <h5 className='mb-0 mx-1'>Workflow</h5>
      </BSBreadcrumb.Item>

      <FontAwesomeIcon
        className='bg-primary p-2 rounded-circle text-white'
        icon={faChartBar}

      />

      <FontAwesomeIcon
        className='bg-light p-2 rounded-circle '
        icon={faBullhorn}

      />

      <FontAwesomeIcon
        className='bg-light p-2 rounded-circle '
        icon={faCode}

      />

      <FontAwesomeIcon
        className='bg-light p-2 rounded-circle '
        icon={faPenFancy}

      />

      {/* <BSBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        Library
      </BSBreadcrumb.Item> */}
      <div className='mx-3 line'></div>

      <div className="avatar-breadcrum avatar-md d-inline-flex position-relative">
        <Image
          fill
          className="rounded-circle"
          src="/assets/img/avatars/1.jpg"
          alt="user@email.com"
        />
        <span
          className="position-absolute d-block bottom-0 end-0 bg-primary text-white rounded-circle px-1" style={{ fontSize: '10px' }}
        >1</span>
      </div>

      <div className="mx-2 avatar-breadcrum avatar-md d-inline-flex position-relative">
        <Image
          fill
          className="rounded-circle"
          src="/assets/img/avatars/1.jpg"
          alt="user@email.com"
        />
        <span
          className="position-absolute d-block bottom-0 end-0 bg-primary text-white rounded-circle px-1" style={{ fontSize: '10px' }}
        >2</span>
      </div>

      <div className="mx-1 avatar-breadcrum avatar-md d-inline-flex position-relative">
        <Image
          fill
          className="rounded-circle"
          src="/assets/img/avatars/1.jpg"
          alt="user@email.com"
        />
        <span
          className="position-absolute d-block bottom-0 end-0 bg-primary text-white rounded-circle px-1" style={{ fontSize: '10px' }}
        >3</span>
      </div>

    </BSBreadcrumb>

  )
}
