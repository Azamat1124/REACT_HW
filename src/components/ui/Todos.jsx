import React from 'react'
import { TodoProvider } from '../context/TodoProvider'

export const Todos = () => {
  return (
    <div>
        <TodoProvider>
            <h1>Todo-List📝</h1>
            <hr/>
        </TodoProvider>
    </div>
  )
}

const StyledDiv = Styled             