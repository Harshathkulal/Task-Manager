import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = () => {
  return (
    <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <h1>Todo-list my</h1>
      <div className='mt-4'>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-secondary" type="submit">Add</button>
      </form>
      </div>
      <div className='d-flex'>
      <p>hello wwihbewh</p>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      </div>
      
    </div>
  )
}

export default Container
