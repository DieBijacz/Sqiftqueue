import React from 'react'
import Column from './Column'
import Row from './Row'

const Container = ({ children }) => {
  return (
    <Row>
      <div className="container">
        {children}
      </div>
    </Row>
  )
}

export default Container