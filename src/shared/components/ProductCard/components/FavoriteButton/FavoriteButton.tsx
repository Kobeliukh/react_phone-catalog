import { IconButton } from '@/shared/components/IconButton';
import { useFavoritesDispatch } from '@/shared/hooks/useFavoritesDispatch';
import { useFavoritesState } from '@/shared/hooks/useFavoritesState';

interface Props {
  id: number;
  className?: string;
}

export const FavoriteButton = ({ id, className }: Props) => {
  const favoritesDispatch = useFavoritesDispatch();
  const favoritesState = useFavoritesState();

  const handleToggleFavorite = (productId: number) => {
    favoritesDispatch(currentFavorites => {
      if (currentFavorites.includes(productId)) {
        return currentFavorites.filter(favorite => favorite !== productId);
      }

      return [...currentFavorites, productId];
    });
  };

  return (
    <IconButton
      variant="favorite"
      className={className}
      onClick={() => handleToggleFavorite(id)}
      selected={favoritesState.includes(id)}
    />
  );
};
