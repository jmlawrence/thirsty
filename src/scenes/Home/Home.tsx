'use client';

import useSearch from '@/hooks/useSearch';
import { useState } from 'react';
import s from './Home.module.scss';
import EmptyState from './components/EmptyState';
import Input from './components/Input';
import ListItem from './components/ListItem';
import Loading from './components/Loading';

const Home = () => {
  // STATE
  const [searchText, setSearchText] = useState('');

  // HOOKS
  const { searchResults, isLoading, resultsFound } =
    useSearch(searchText);

  return (
    <div className={s.pageWrapper}>
      <Input
        value={searchText}
        setValue={setSearchText}
        placeholder='Find a drink'
      />

      <div className={s.resultsWrapper}>
        <>
          {isLoading && <Loading />}
          {!resultsFound && (
            <EmptyState searchTerm={searchText} />
          )}
          {!isLoading &&
            searchResults.map((drink) => {
              return (
                <ListItem
                  drink={drink}
                  key={drink.idDrink}
                />
              );
            })}
        </>
      </div>
    </div>
  );
};

export default Home;
