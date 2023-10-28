import courses from './data.json'
import { NextResponse } from 'next/server'


// This is the route that returns the courses
export async function  GET(request) {
    return NextResponse.json(courses)
}








// NextResponse sends response