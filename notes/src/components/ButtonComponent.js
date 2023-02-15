export default function ButtonComponent({ children, onPress }) {
  return <button onClick={() => onPress()}>{children}</button>;
}
