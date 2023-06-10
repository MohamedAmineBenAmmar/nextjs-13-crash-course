import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepo = async (name) => {
    const res = await fetch(`https://api.github.com/repos/MohamedAmineBenAmmar/${name}`, {
        next: {
            revalidate: 60 // Revalidate every 60 seconds
        }
    })
    const repo = await res.json()
    return repo
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);
    // console.log(repo)
    return (
        <>
        
            <h2>{repo.name}</h2>
            <p>{repo.description == null ? ("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis alias vel animi, amet modi, asperiores magnam beatae sequi quasi id voluptate officia neque ab eos dolorum nobis at fuga!") : (repo.description)}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar size={20} />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="card-stat">
                    <FaCodeBranch size={20} />
                    <span>{repo.forks_count}</span>
                </div>
                <div className="card-stat">
                    <FaEye size={20} />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}

export default Repo