import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeElementId: languageFiltersData[0].id,
    repositoryData: [],
  }

  componentDidMount = () => {
    this.getRepository()
  }

  getRepository = async () => {
    const {activeElementId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeElementId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos.map(eachRepository => ({
        name: eachRepository.name,
        id: eachRepository.id,
        issueCount: eachRepository.issues_count,
        forksCount: eachRepository.forks_count,
        starsCount: eachRepository.stars_count,
        avatarUrl: eachRepository.avatar_url,
      }))
      this.setState({
        repositoryData: updatedData,
      })
    }
  }

  renderRepositoryItem = () => {
    const {repositoryData} = this.state
    return (
      <ul className="repository-details">
        {repositoryData.map(eachItem => (
          <RepositoryItem repositoryDataDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLanguageFilterItem = () => {
    const {activeElementId} = this.state
    return (
      <ul className="language-repository-list">
        {languageFiltersData.map(eachRepository => (
          <LanguageFilterItem
            key={eachRepository.id}
            languageFilterDetails={eachRepository}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Popular </h1>
        {this.renderLanguageFilterItem()}
        {this.renderRepositoryItem()}
      </div>
    )
  }
}

export default GithubPopularRepos
