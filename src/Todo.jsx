export function Todo({ todo }) {
  const { userId, id, title, completed } = todo;
  const className = completed ? "strike-through" : "";
  return <li className={className}>{title}</li>;
}
