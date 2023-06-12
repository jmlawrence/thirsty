import { SEARCH_API } from '@/constants/api';
import { DrinkResponse } from '@/types/drinks';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useSearch(searchText: string) {
  const { isLoading, data } = useQuery({
    queryKey: ['search', searchText],
    queryFn: (): Promise<DrinkResponse> =>
      axios
        .get(`${SEARCH_API}?s=${searchText}`)
        .then((res) => res.data),
  });

  const results = data?.drinks || [];
  const resultsFound = !isLoading && results.length > 0;

  return {
    searchResults: results,
    isLoading,
    resultsFound,
  };
}
