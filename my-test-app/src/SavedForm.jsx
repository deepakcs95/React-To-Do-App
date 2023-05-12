export default function SavedForm({ id, checked, todo, onChange, onDelete }) {
  return (
    <>
      <div className="item">
        <label key={id + 5}>
          <input
            onChange={(e) => onChange(id, e.target.checked)}
            type="checkbox"
            name="Todo"
            checked={checked}
          />{" "}
          {todo}
        </label>
        <span
          className="material-symbols-outlined search"
          style={{ color: "black" }}
          onClick={(e) => onDelete(id)}
        >
          delete
        </span>
      </div>
      <hr />
    </>
  );
}
