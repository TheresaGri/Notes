export default function ButtonComponent({ children, onPress, className }) {
  return <button className={className} onClick={() => onPress()}>{children}</button>;
}
