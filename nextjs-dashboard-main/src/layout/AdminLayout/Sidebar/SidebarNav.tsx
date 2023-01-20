import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBell,
  faFileLines,
  faStar,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  faCalculator,
  faChartPie,
  faChevronUp, faChartLine,
  faBook,
  faGauge,
  faGaugeHigh,
  faUserGroup,
  faCalendarDay,
  faChartSimple,
  faMagnifyingGlassDollar,
  faUserPlus,
  faArrowsToCircle,
  faFileInvoice,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import React, {
  PropsWithChildren, useContext, useEffect, useState,
} from 'react'
import {
  Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton,
} from 'react-bootstrap'
import classNames from 'classnames'
import Link from 'next/link'

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const {
    icon,
    children,
    href,
  } = props

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 d-flex align-items-center" style={{paddingTop: '12px',paddingBottom: '12px'}}>
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

type SidebarNavGroupToggleProps = {
  eventKey: string;
  icon: IconDefinition;
  setIsShow: (isShow: boolean) => void;
} & PropsWithChildren

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
  // https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
  const { activeEventKey } = useContext(AccordionContext)
  const {
    eventKey, icon, children, setIsShow,
  } = props

  const decoratedOnClick = useAccordionButton(eventKey)

  const isCurrentEventKey = activeEventKey === eventKey

  useEffect(() => {
    setIsShow(activeEventKey === eventKey)
  }, [activeEventKey, eventKey, setIsShow])

  return (
    <Button
      variant="link"
      type="button"
      className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
      {children}
      <div className="nav-chevron ms-auto text-end">
        <FontAwesomeIcon size="xs" icon={faChevronUp} />
      </div>
    </Button>
  )
}

type SidebarNavGroupProps = {
  toggleIcon: IconDefinition;
  toggleText: string;
} & PropsWithChildren

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
  const {
    toggleIcon,
    toggleText,
    children,
  } = props

  const [isShow, setIsShow] = useState(false)

  return (
    <Accordion as="li" bsPrefix="nav-group" className={classNames({ show: isShow })}>
      <SidebarNavGroupToggle icon={toggleIcon} eventKey="0" setIsShow={setIsShow}>{toggleText}</SidebarNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-unstyled">
          {children}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGaugeHigh} href="/">Dashboard</SidebarNavItem>
      <SidebarNavItem icon={faChartLine} href="/pokemons">Workflow</SidebarNavItem>
      <SidebarNavItem icon={faCalendarDay} href="colors.html">Calender</SidebarNavItem>
      <SidebarNavItem icon={faUserGroup} href="typography.html">SocialRM</SidebarNavItem>
      <SidebarNavItem icon={faChartSimple} href="typography.html">Metrics</SidebarNavItem>
      <SidebarNavItem icon={faMagnifyingGlassDollar} href="typography.html">Leads</SidebarNavItem>
      <SidebarNavItem icon={faUserPlus} href="typography.html">Users</SidebarNavItem>
      <SidebarNavItem icon={faBell} href="typography.html">Notifications</SidebarNavItem>
      <SidebarNavItem icon={faBook} href="typography.html">Documents</SidebarNavItem>
      <SidebarNavItem icon={faArrowsToCircle} href="typography.html">Segments</SidebarNavItem>
      <SidebarNavTitle></SidebarNavTitle>
      <SidebarNavItem icon={faFileInvoice} href="typography.html">Company</SidebarNavItem>



      {/* <SidebarNavItem icon={faRightToBracket} href="login">Login</SidebarNavItem>
        <SidebarNavItem icon={faAddressCard} href="register">Register</SidebarNavItem> */}











    </ul>
  )
}
