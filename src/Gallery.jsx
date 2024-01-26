import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './Context'
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`
const Gallery = () => {
  const { search } = useGlobalContext()
  const result = useQuery({
    queryKey: ['images', search],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${search}`)
      return res.data
    },
  })
  if (result.isLoading) {
    return (
      <section className='gallery'>
        <h1>isLoading...</h1>
      </section>
    )
  }
  if (result.isError) {
    return (
      <section className='gallery'>
        <h1>There Was An Error...</h1>
      </section>
    )
  }
  const value = result.data.results
  if (value.length < 1) {
    return (
      <section className='gallery'>
        <h1>Result Not Found...</h1>
      </section>
    )
  }
  return (
    <section className='gallery'>
      {value.map((item) => {
        const { id, alt_description, urls } = item
        const { regular } = urls

        return <img src={regular} key={id} alt={alt_description}></img>
      })}
    </section>
  )
}

export default Gallery
