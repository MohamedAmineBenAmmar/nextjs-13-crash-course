import { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

// Example of how to extract the repo name from the URL
const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className='btn btn-back'> &larr; Back to Repos</Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Repo Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage