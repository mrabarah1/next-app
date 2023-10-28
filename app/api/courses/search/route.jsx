import { NextResponse } from "next/server";
import courses from "../data.json";


export async function GET(request) {
    // to get the value in query
    const { searchParams } = new URL(request.url);
    // filter our courses to that query
    const query = searchParams.get('query');
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLocaleLowerCase());
    })
    return NextResponse.json(filteredCourses)
}

// before we make our response, we filter the courses