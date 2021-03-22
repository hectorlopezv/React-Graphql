import React from 'react'
import ClockLoader from 'react-spinners/ClockLoader'

const Spinner = (props) => {
  return (
    <div>
      <ClockLoader {...props} />
    </div>
  )
}

export default Spinner
