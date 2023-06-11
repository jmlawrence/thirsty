'use client';

import { DETAILS_API } from '@/constants/api';
import { DrinkResponse } from '@/types/drinks';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import s from './Details.module.scss';
import { extractIngredients } from './utils/ingredients';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Link from 'next/link';
import { LeftChevron } from '@/components/icons/LeftChevron';

const Details = ({ drinkId }: { drinkId: string }) => {
  // www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

  // HOOKS
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['details', drinkId],
    queryFn: (): Promise<DrinkResponse> =>
      axios
        .get(`${DETAILS_API}?i=${drinkId}`)
        .then((res) => res.data),
  });
  const canvas = useRef<HTMLCanvasElement>(null);

  const drink = data?.drinks[0];
  const ingredients = extractIngredients(drink);

  useEffect(() => {
    const ctx = canvas.current;

    console.log({ ctx, canvas });

    // let chartStatus = Chart.getChart('myChart');
    // if (chartStatus != undefined) {
    //   chartStatus.destroy();
    // }

    if (ctx && drink) {
      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [
            {
              label: 'Dataset 1',
              data: ingredients.map(
                (ingredient) => ingredient.size
              ),
              backgroundColor: ingredients.map(
                (ingredient) => ingredient.color
              ),
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }
  }, [data, drink]);

  if (!drink) {
    return null;
  }

  console.log({ data, ingredients });

  return (
    <div className={s.pageWrapper}>
      <div className={s.detailHeading}>
        <Link href='/' className={s.backLink}>
          <LeftChevron
            size={16}
            className={s.leftChevron}
          />
          Back
        </Link>
      </div>
      <div className={s.detailImageWrapper}>
        <img
          src={drink.strDrinkThumb}
          className={s.detailImage}
        />
      </div>
      <div className={s.name}>{drink.strDrink}</div>
      <div className={s.ingredientLabel}>Ingredients:</div>
      <div className={s.ingredientsWrapper}>
        <div className={s.ingredientsListWrapper}>
          {ingredients.map((ingredient, idx) => (
            <div className={s.ingredientRow} key={idx}>
              <div
                className={s.ingredientSwatch}
                style={{ background: ingredient.color }}
              ></div>
              <div className={s.ingredientLegend}>
                {ingredient.label}{' '}
                {ingredient.measurement && (
                  <>({ingredient.measurement})</>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={s.ingredientsPieChartWrapper}>
          <canvas ref={canvas}></canvas>
        </div>
      </div>

      <div className={s.instructions}>
        {drink.strInstructions}
      </div>
    </div>
  );
};

export default Details;
