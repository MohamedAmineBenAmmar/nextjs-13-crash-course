'use client';
import { useState, useEffect } from 'react'

const CourseSearch = ({ getSearchResults }) => {
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()        
        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()
        getSearchResults(courses)
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input type="text" className="search-input" placeholder='Search Courses ...' value={query} onChange={handleChange} />
            <button className="search-button" type='submit'>Search</button>
        </form>
    )
}

export default CourseSearch