import { COLORS } from '@/constants/colors';
import { Drink } from '@/types/drinks';

export const extractIngredients = (drink?: Drink) => {
  let ingredients: {
    label: string | null;
    measurement: string | null;
    color: string;
    size: number;
  }[] = [];

  if (!drink) {
    return [];
  }

  for (let i = 0; i < 15; i++) {
    let ingredientKey = `strIngredient${i}` as keyof Drink;
    let measurementKey = `strMeasure${i}` as keyof Drink;

    if (drink[ingredientKey]) {
      ingredients.push({
        label: drink[ingredientKey],
        measurement: drink[measurementKey],
        color: COLORS[i],
        size:
          parseInt(
            (drink[measurementKey] || '').replace(
              /\s\D+/gi,
              ''
            )
          ) || 1,
      });
    }
  }

  return ingredients;
};
