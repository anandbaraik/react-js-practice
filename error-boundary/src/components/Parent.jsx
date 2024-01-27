import React from 'react'
import Child from './Child'
import ErrorBoundary from './ErrorBoundary'

const Parent = () => {
  return (
    <div>
        <ErrorBoundary>
            <Child name={'Anand'}/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Child name={'Anandi'}/>
        </ErrorBoundary>
    </div>
  )
}

export default Parent