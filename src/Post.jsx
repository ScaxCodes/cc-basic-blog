import { Link } from "react-router-dom";

export function Post({ post }) {
  const { id, title, body } = post;

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`./${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
