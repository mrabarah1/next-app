import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"



const url = "https://api.github.com/users/mrabarah1/repos";

// fetching from an api
const fetchRepos = async () => {
  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  //wait one second loading time before it loads the data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}


const ReposPage = async () => {
    const repos = await fetchRepos();
    
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => {
          const { name, description, stargazers_count, forks_count, watchers_count} = repo
            return (
              <li key={repo.id}>
                <Link href={`/code/repos/${name}`}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <div className="repo-details">
                    <span>
                      <FaStar /> {stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch /> {forks_count}
                    </span>
                    <span>
                      <FaEye /> {watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            );
        })}
      </ul>
    </div>
  )
}

export default ReposPage
