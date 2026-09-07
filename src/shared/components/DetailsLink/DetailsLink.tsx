import { Categories } from '@/types/Categories';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  category: Categories;
  itemId: string;
}

export const DetailsLink = ({ children, category, itemId }: Props) => {
  return <Link to={`/${category}/${itemId}`}>{children}</Link>;
};
