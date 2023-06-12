'use client';

import { LeftChevron } from '@/components/icons/LeftChevron';
import useDrink from '@/hooks/useDrink';
import Chart from 'chart.js/auto';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import s from './Details.module.scss';

const Details = ({ drinkId }: { drinkId: string }) => {
  // HOOKS
  const { drink, isLoading, ingredients } =
    useDrink(drinkId);

  // REFS
  const canvas = useRef<HTMLCanvasElement>(null);
  const chartRendered = useRef(false);

  // EFFECTS
  useEffect(() => {
    const ctx = canvas.current;

    if (
      !isLoading &&
      ctx &&
      drink &&
      !chartRendered.current
    ) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ingredients.map(
            (ingredient) => ingredient.label
          ),
          datasets: [
            {
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
          plugins: {
            legend: {
              display: false,
              position: 'bottom',
            },
          },
          responsive: true,
        },
      });

      chartRendered.current = true;
    }
  }, [drink, ingredients, isLoading]);

  if (!drink) {
    return null;
  }

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
          alt={`Image of ${drink.strDrink}`}
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
