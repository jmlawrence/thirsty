'use client';

import { useState } from 'react';
import s from './Home.module.scss';
import Input from './components/Input';
import {
  QueryFunction,
  QueryKey,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { SEARCH_API } from '@/constants/api';
import axios from 'axios';
import { Drink, DrinkResponse } from '@/types/drinks';
import ListItem from './components/ListItem';

const Home = () => {
  // STATE
  const [searchText, setSearchText] = useState('');

  // HOOKS

  // QUERIES
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['search', searchText],
    queryFn: (): Promise<DrinkResponse> =>
      axios
        .get(`${SEARCH_API}?s=${searchText}`)
        .then((res) => res.data),
  });

  if (isFetching) {
    console.log('FETCHING!');
  }
  //   console.log({ isFetching, isLoading, data });

  const results = data?.drinks || [];
  const noResultsFound = !isLoading && results.length === 0;

  return (
    <div className={s.pageWrapper}>
      <Input
        value={searchText}
        setValue={setSearchText}
        placeholder='Find a drink'
      />
      {isLoading && <div>LOADING!</div>}
      {noResultsFound && <div>No Results :(</div>}

      <div className={s.resultsWrapper}>
        {!isLoading &&
          results.map((drink) => {
            return (
              <ListItem drink={drink} key={drink.idDrink} />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
