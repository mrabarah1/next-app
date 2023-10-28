'use client';
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";





const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  },[])

  if(loading) {
    return <LoadingPage />
  }

  const getSearchResults = (results) => {
    setCourses(results)
  }
  
  return (
    <div>
      <h1>welcome to codewayz</h1>
      <CourseSearch  getSearchResults={getSearchResults}/>
      <Courses courses={courses}/>
    </div>
  )
}

export default HomePage
