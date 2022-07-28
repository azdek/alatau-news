import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Row, Col } from 'react-bootstrap'
import cls from 'classnames'

import { MenuOutlined, SearchOutlined, BellOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import Button from 'components/UI/Button'

import ROUTES, { IRoute } from 'constants/routes'
import classes from './Navigation.module.sass'

type NavlinkProps = {
  route: IRoute
  pathname: string
}
const Navlink = ({ route, pathname }: NavlinkProps) => (
  <Link href={route.href}>
    <a className={cls(classes.nav_link, { [classes.nav_link__active]: pathname === route.href })}>{route.label}</a>
  </Link>
)

export default function Navigation() {
  const router = useRouter()

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row>
          <Col>
            <nav className={classes.nav}>
              <MenuOutlined className={classes.icon} />
              <Navlink route={ROUTES.main} pathname={router.pathname} />
              <Navlink route={ROUTES.feed} pathname={router.pathname} />
              <Navlink route={ROUTES.media} pathname={router.pathname} />
              <Navlink route={ROUTES.contacts} pathname={router.pathname} />
              <Navlink route={ROUTES.vacancies} pathname={router.pathname} />
              <Navlink route={ROUTES.about} pathname={router.pathname} />

              <div className="divider" />

              <SearchOutlined className={classes.icon} />
              <BellOutlined className={classes.icon} />
              <CustomerServiceOutlined className={classes.icon} />
              <Button>Войти</Button>
            </nav>
          </Col>
        </Row>
        {/* <div className={classes.menu}>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, nemo.</li>
          </ul>
        </div> */}
      </Container>
    </div>
  )
}
