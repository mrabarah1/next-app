import Link from "next/link"


// const fetchCourses = async () => {
//     const response = await fetch("http://localhost:3000/api/courses");
//     const courses = await response.json();
//     return courses;
// }

const Courses = ({courses}) => {
    
  return (
    <div className="courses">
      {courses.map((course) => {
        const {id, title, description, link, level} = course;
        return (
            <div className="card" key={id}>
                <h2>{title}</h2>
                <small>level: {level}</small>
                <p>{description}</p>
                <Link href={link} target="_blank" className="btn">Go To Course</Link>
            </div>
        )
      })}
    </div>
  )
}

export default Courses
