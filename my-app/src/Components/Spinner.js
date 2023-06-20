import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className="container text-center">
        <div className="spinner-border text-danger m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Spinner
