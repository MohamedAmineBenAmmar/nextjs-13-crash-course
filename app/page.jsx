'use client';

import { useEffect, useState } from 'react'
import LoadingPage from './loading';
import Link from "next/link"
import Courses from "./components/Courses"
import CourseSearch from './components/CourseSearch';

const Homepage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const courses = await res.json()
      setCourses(courses)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome to the soul socity</h1>
      <CourseSearch getSearchResults={(results) => {setCourses(results)}} />
      <Courses courses={courses} />
    </>
  )
}

export default Homepage