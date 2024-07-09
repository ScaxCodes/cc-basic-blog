export function Post({ post }) {
  const { userId, id, title, body } = post;

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <a className="btn" href={`post${id}.html`}>
          View
        </a>
      </div>
    </div>
  );
}
