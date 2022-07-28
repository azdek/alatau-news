import { useEffect, useState } from 'react';
import classes from './Clock.module.sass'

type ClockProps = {
  offset: number
  city: string
}
export default function Clock({ city, offset }: ClockProps) {
  const [hourDeg, setHourDeg] = useState(0)
  const [minuteDeg, setMinuteDeg] = useState(0)

  useEffect(() => {
    setTime()
    setInterval(setTime, /* 30 * */ 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setTime() {
    const d = new Date(getOffsetDate(offset));
    const hr = d.getHours();
    const min = d.getMinutes();
    const hr_rotation = 30 * hr + min / 2;
    const min_rotation = 6 * min;

    setHourDeg(hr_rotation)
    setMinuteDeg(min_rotation)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.clock} >
        <div className={classes.hour} style={{ transform: `rotate(${hourDeg}deg)` }}></div>
        <div className={classes.minute} style={{ transform: `rotate(${minuteDeg}deg)` }} ></div>
      </div>
      <h6 className={classes.label}>
        {city}
      </h6>
    </div>
  )
}

function getOffsetDate(offset: number): Date {
  return new Date(new Date().getTime() + offset * 3600 * 1000);
}