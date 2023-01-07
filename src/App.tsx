import React from 'react'
import { useFetchRepositories } from './hooks/useRepos'
import Card from './components/Card'

import { useFavoriteReposStore } from './store/favoriteRepos'

const App = () => {

  const { data, error, isLoading, isError } = useFetchRepositories()

  const { addFavoriteRepo, removeFavoriteRepo, favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: </div>

  return (
    <div>
      {data?.map((repo) => (
        <div key={repo.id}>
          <Card
            key={repo.id}
            repository={repo}
            isFavorite={favoriteReposIds.includes(repo.id)}
          />
        </div>
      ))}
    </div>
  )
}

export default App