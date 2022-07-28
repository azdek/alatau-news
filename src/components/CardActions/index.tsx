import { CommentOutlined, EyeOutlined, MoreOutlined, ShareAltOutlined } from '@ant-design/icons'

import classes from './CardActions.module.sass'

export default function CardActions() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.counter}>
        <EyeOutlined />
        <span>{762}</span>
      </div>
      <div className={classes.counter}>
        <CommentOutlined />
        <span>{39}</span>
      </div>

      <div className="divider" />

      <ShareAltOutlined className={classes.icon} />
      <MoreOutlined className={classes.icon} />
    </div>
  )
}
