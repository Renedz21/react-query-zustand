import React from 'react'
import { Repository } from '../hooks/types'

import { useFavoriteReposStore } from '../store/favoriteRepos'

type CardProps = {
    repository: Repository,
    isFavorite: boolean
}

const Card = ({ repository, isFavorite }: CardProps) => {

    const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore()

    const handleLike = () => {
        if (isFavorite) {
            removeFavoriteRepo(repository.id)
        } else {
            addFavoriteRepo(repository.id)
        }
    }

    return (
        <div className='card'>
            <h1>{repository.name}</h1>
            <button
                onClick={handleLike}
            >
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}

export default Card