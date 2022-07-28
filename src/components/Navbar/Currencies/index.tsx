import classes from './Currencies.module.sass'

export default function Currencies() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.currency}>
        <img src="/icons/USD.svg" alt="USD" />
        <span className={classes.currency_label}>USD: </span>
        <span>113.8782</span>
      </div>

      <img className={classes.divider} src="/icons/line-divider.svg" alt="" />

      <div className={classes.currency}>
        <img src="/icons/RUB.svg" alt="RUB" />
        <span className={classes.currency_label}>RUB: </span>
        <span>1.034</span>
      </div>

      <img className={classes.divider} src="/icons/line-divider.svg" alt="" />

      <div className={classes.currency}>
        <img src="/icons/EUR.svg" alt="EUR" />
        <span className={classes.currency_label}>EUR: </span>
        <span>102.88</span>
      </div>
    </div>
  )
}
