import classes from './Button.module.sass'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return <button className={classes.button} {...props} />
}
