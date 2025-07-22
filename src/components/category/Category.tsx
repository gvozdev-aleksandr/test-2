import { CategoryWrapper, HiddenRadio, StyledRadio, RadioContainer } from "./styled";

interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  disabled?: boolean;
}

const Category = ({ categories, selectedCategory, onCategoryChange }: CategoryProps) => {
  return (
    <CategoryWrapper>
      {categories.map((cat) => (
        <RadioContainer key={cat}>
          <HiddenRadio
            type="radio"
            name="category"
            value={cat}
            checked={selectedCategory === cat}
            onChange={() => onCategoryChange(cat)}
          />
          <StyledRadio $isSelected={selectedCategory === cat}>{cat}</StyledRadio>
        </RadioContainer>
      ))}
    </CategoryWrapper>
  );
};

export default Category;
