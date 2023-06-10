// Example of how to fetch data in a server component
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

// 1- Create the method to fetch data that returns a promise
async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/MohamedAmineBenAmmar/repos', {
        next: {
            revalidate: 60 // Revalidate every 60 seconds
        }
    })
    
    // Mkaing the call wait for 1sec
    // await new Promise((resolve) => setTimeout(resolve, 3000 ))

    const repos = await res.json()
    return repos
}

// 2- Making this functional component asynchronous and await from the response
const ReposPage = async () => {
    const repos = await fetchRepos()
    const displayRepos = repos.map((repo) => (
        <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className='repo-details'>
                    <span><FaStar /> {repo.stargazers_count}</span>
                    <span><FaCodeBranch /> {repo.forks_count}</span>
                    <span><FaEye /> {repo.watchers_count}</span>
                </div>
            </Link>
        </li>
    ))
    return (
        <div className='repos-container'>
            <h2>Repositories</h2>
            <ul className="repo-list">
                {displayRepos}
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quas iste consequuntur quis perferendis error asperiores dolores doloribus autem maxime quo, nostrum, tempore quia numquam unde soluta, praesentium ratione mollitia.</p>
        </div>
    )
}

export default ReposPage