import Link from "next/link"

// This is gonna be a server component (refactored component from server to client)
// const fetchCourses = async () => {
//     const res = await fetch("http://localhost:3000/api/courses")
//     const courses = await res.json()
//     return courses
// }

const Courses = ({ courses }) => {
    // const courses = await fetchCourses()
    const displayCourses = courses.map((course) => (
        <div key={course.id} className="card">
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link} target="_blank" className="btn">View Course</Link>
        </div>
    ))
    return (
        <div className="courses">
            {displayCourses}
        </div>
    )
}

export default Courses