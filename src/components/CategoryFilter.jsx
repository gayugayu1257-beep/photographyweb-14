export default function CategoryFilter({ category, setCategory }) {
  const categories = ["all", "wedding", "nature", "street"];

  return (
    <div className="filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={category === cat ? "active" : ""}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
