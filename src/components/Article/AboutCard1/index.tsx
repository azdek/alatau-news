import classes from './AboutCard1.module.sass'

export default function AboutCard1() {
  return (
    <section className={classes.about_body}>
      <h3 className={classes.about_culture}>Устоновите мобильное приложение</h3>
      <div className={classes.about_text}>
        Quis cursus scelerisque cursus luctus commodo. Mi viverra porta pretium ac quam dui. Faucibus ac quis praesent
        diam.
      </div>
      <div className={classes.about_last_text}>Доступно для скачивания</div>
      <div className={classes.about_phone_2}>
        <img src="/icons/AboutPhone2.svg" alt="" />
      </div>
      <div className={classes.about_phone_1}>
        <img src="/icons/AboutPhone1.svg" alt="" />
      </div>

      <div className={classes.about_icons}>
        <img src="/icons/AppStore.svg" alt="" />
        <img src="/icons/playmarket.svg" alt="" />
      </div>
    </section>
  )
}
