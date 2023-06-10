import Link from "next/link"

const fetchRepoContents = async (name) => {
    // Suspense boundary test
    // Make the code wait for three seconds
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch(`https://api.github.com/repos/MohamedAmineBenAmmar/${name}/contents`, {
        next: {
            revalidate: 60 // Revalidate every 60 seconds
        }
    })
    const contents = await res.json()
    return contents
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir')
    const displayDirs = dirs.map((dir) => (
        <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
        </li>
    ))
    // console.log(contents)
    return (
        <>
            <h3>Directories</h3>
            <ul>
                {displayDirs}
            </ul>
        </>
    )
}

export default RepoDirs