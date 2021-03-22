import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import { MdFavorite } from 'react-icons/md'
import { Button } from './styles'

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : HiOutlineHeart
  return (
    <Button onClick={onClick}>
      <Icon size={'32px'} />
      {likes} !likes
    </Button>
  )
}

export default FavButton
