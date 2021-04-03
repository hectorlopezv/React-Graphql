import React, { useState, useEffect } from 'react'
import Category from '../Category'
import { List, Item } from './styles'

function useCategoriesDate () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-server-gold.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])
  return { categories, loading }
}

const ListCategory = () => {
  const [showFixed, setshowFixed] = useState(false)
  const { categories, loading } = useCategoriesDate()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setshowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading && (
        <Item key='loading'>
          <Category />
        </Item>
      )}
      {loading === false &&
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
    </List>
  )
  if (loading) {
    return '.......cargando'
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export default React.memo(ListCategory)
