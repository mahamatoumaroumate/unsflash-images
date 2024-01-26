import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useGlobalContext } from './Context'
const ToggleTheme = () => {
  const { toggle, SetToggle } = useGlobalContext()
  return (
    <section className='themeContainer'>
      <button className='btn' onClick={SetToggle}>
        {toggle ? (
          <BsFillMoonFill style={{ color: 'white' }}></BsFillMoonFill>
        ) : (
          <BsFillSunFill></BsFillSunFill>
        )}
      </button>
    </section>
  )
}

export default ToggleTheme
