import "./checkbox.scss";
export const Checkbox = ({ onClick, checked, label, onKeyUp, onDelete }) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <span className={checked ? "checkbox-checked" : ""}>{label}</span>
    </div>
    <button className="checkbox-delete" onClick={onDelete}>
      X
    </button>
  </div>
);
