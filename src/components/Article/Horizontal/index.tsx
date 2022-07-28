import { CalendarOutlined } from '@ant-design/icons'

import CardActions from 'components/CardActions'
// import Image from 'next/image'

import classes from './Horizontal.module.sass'

export default function Horizontal() {
  return (
    <div className={classes.article}>
      <div
        className={classes.article_image}
        style={{
          backgroundImage: `url(/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png)`,
        }}
      >
        {/* <Image
          width={172}
          height={172}
          layout="responsive"
          src={}
        /> */}
      </div>

      <div className={classes.article_body}>
        <div className={classes.article_date}>
          <CalendarOutlined className="mr-5" />
          <span>ЧТ, 19 мая, 2022</span>
        </div>

        <div className={classes.article_type}>Политика</div>

        <h5 className={classes.article_title}>
          Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptatibus, dolorum!
        </h5>

        <CardActions />
      </div>
    </div>
  )
}
