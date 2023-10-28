import { Suspense } from "react";
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";





const SingleRepoPage = ({ params: {name}}) => {
  return (
    <div className='card'>
        <Link href='/code/repos' className="btn btn-back">Back To Repositories</Link>
        {/* component that loads the details or the regular data and  directories */}
        <Suspense fallback={<div>Loading repo...</div>}>
          <Repo name={name}/> 
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
          <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default SingleRepoPage
// the {params} is whatever i call inside the [], i.e in our case is [name]