import { DETAILS_API } from '@/constants/api';
import { extractIngredients } from '@/scenes/Details/utils/ingredients';
import { DrinkResponse } from '@/types/drinks';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useDrink(drinkId: string) {
  const { isLoading, data } = useQuery({
    queryKey: ['details', drinkId],
    queryFn: (): Promise<DrinkResponse> =>
      axios
        .get(`${DETAILS_API}?i=${drinkId}`)
        .then((res) => res.data),
  });
  const drink = data?.drinks[0];
  const ingredients = extractIngredients(drink);

  return {
    drink,
    isLoading,
    ingredients,
  };
}
