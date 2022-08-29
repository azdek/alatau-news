import Aboutcard from 'components/Article/Aboutcard'
import AboutCard1 from 'components/Article/AboutCard1'
import VacancyCard from 'components/Article/VacancyCard'
import { Container } from 'react-bootstrap'
import classes from './AboutContainer.module.sass'

export default function AboutContainer() {
  return (
    <div>
      <div className={classes.about__alatou}>
        <img src="/images/Alatou.png" alt="alatau" />
        <p>О нас</p>
        <h1>Алатоу Жылдызы</h1>
        <span>Новостной портал Казахстана. Мы привыкли говорить о том, о чем другим свойственно молчать</span>
      </div>
      <div className={classes.about__alatou_1}>
        <img src="/icons/Alatou.svg" alt="alatau" />
      </div>

      <Container>
        <section className={classes.about_container}>
          <div className={classes.about_block_1}>
            <div className={classes.about_img}>
              <img src="/images/Aboutoffice.png" alt="" />
            </div>
            <div className={classes.about_text}>
              <h3>Миссия и введение</h3>
              <p>Elit at sed nisl, lacus consequat, vestibulum, in tortor euismod. Eget mollis aliquet porttitor eu.</p>
            </div>
            <div className={classes.about_text_1}>
              <div className={classes.about_text_inner}>
                Tincidunt viverra convallis tincidunt pellentesque cras pellentesque. Fames orci, ut sagittis, at
                lacinia malesuada varius ipsum. Nec imperdiet tellus venenatis vestibulum. Nunc quisque maecenas non
                nisl. Vitae feugiat sagittis, dictum elit tellus diam integer.
              </div>
              <div className={classes.about_text_inner}>
                Tincidunt viverra convallis tincidunt pellentesque cras pellentesque. Fames orci, ut sagittis, at
                lacinia malesuada varius ipsum. Nec imperdiet tellus venenatis vestibulum. Nunc quisque maecenas non
                nisl. Vitae feugiat sagittis, dictum elit tellus diam integer.
              </div>
              <div className={classes.about_text_inner}>
                Tincidunt viverra convallis tincidunt pellentesque cras pellentesque. Fames orci, ut sagittis, at
                lacinia malesuada varius ipsum. Nec imperdiet tellus venenatis vestibulum. Nunc quisque maecenas non
                nisl. Vitae feugiat sagittis, dictum elit tellus diam integer.
              </div>
              <img src="/icons/AboutSvg.svg" alt="" />
              <div className={classes.about_ugol}></div>
            </div>
          </div>
        </section>
        <section className={classes.about_container_2}>
          <div className={classes.about_block_2}>
            <h2>Наши ценности</h2>
          </div>
          <div className={classes.about_block_cards}>
            <div>
              <Aboutcard />
            </div>
            <div>
              <Aboutcard />
            </div>
            <div>
              <Aboutcard />
            </div>
          </div>
          <div className={classes.about_block_cards}>
            <div>
              <Aboutcard />
            </div>
            <div>
              <Aboutcard />
            </div>
            <div>
              <Aboutcard />
            </div>
          </div>
        </section>
        <section className={classes.about_container_3}>
          <div className={classes.about_block_3}>
            <h2>Команда</h2>
            <div className={classes.about_slider}>
              <div className={classes.about_slider_1}></div>
            </div>

            <img src="images/AboutPhoto.png" alt="" />
          </div>
          <div className={classes.about_last_card}>
            <AboutCard1 />
          </div>
        </section>
      </Container>
    </div>
  )
}
