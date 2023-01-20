import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faList, faBullhorn } from '@fortawesome/free-solid-svg-icons'

import { Nav } from 'react-bootstrap'

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faBullhorn} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faCalendarDays} size="lg" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
