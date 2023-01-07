import { useQuery } from '@tanstack/react-query';

import api from '../api/index';
import { Repository } from './types';

const fetchRepos = async () => {
    const { data } = await api.get<Repository[]>(`/users/renedz21/repos`);
    return data;
}

export const useFetchRepositories = () => {
    return useQuery(['repositories'], fetchRepos);
}