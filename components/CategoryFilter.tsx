import { NewsCategories } from '../dto/NewsCategory';
import { useCategory } from '../hooks/useCategory';

const CategoryFilter = () => {
  const { category, setCategory } = useCategory();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as typeof category);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="category-select">Filtrar por categoría: </label>
      <select
        id="category-select"
        value={category}
        onChange={handleChange}
        style={{ padding: '0.5rem' }}
      >
        {NewsCategories.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;