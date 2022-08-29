import classes from './Aboutcard.module.sass'
import { CalendarOutlined } from '@ant-design/icons'
import CardActions from 'components/CardActions'

export default function Aboutcard() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.about_culture}>Культура</div>

        <h4 className={classes.about_type}>Целеустремленность и иновации</h4>

        <div className={classes.about_last_text}>
          Mauris, pharetra neque molestie sed. Magna nullam et quis quis. Sit posuere sapien eget diam. Sociis eu
          consequat semper gravida vitae fermentum egestas est. Ut justo dolor quis vitae sed et pharetra facilisis
          mauris.
        </div>
      </div>
    </div>
  )
}
