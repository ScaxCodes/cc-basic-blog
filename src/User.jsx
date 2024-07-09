export function User({ user }) {
  const { id, name, website, company, email } = user;

  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div>{company.name}</div>
        <div>{website}</div>
        <div>{email}</div>
      </div>
      <div className="card-footer">
        <a className="btn" href={`user${id}.html`}>
          View
        </a>
      </div>
    </div>
  );
}
