import React from 'react'
import { useGlobalContext } from './Context'

const FormSearch = () => {
  const { SetSearch } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.search.value

    if (!value) {
      return
    }
    SetSearch(value)
  }
  return (
    <section className='search-container'>
      <h1>Unsplash Images</h1>
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='search-input'
        />
        <button className='search-btn'>Submit</button>
      </form>
    </section>
  )
}

export default FormSearch
