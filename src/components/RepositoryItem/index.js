import './index.css'

const RepositoryItem = props => {
  const {repositoryDataDetails} = props
  const {
    name,
    avatarUrl,
    issueCount,
    forksCount,
    starsCount,
  } = repositoryDataDetails

  return (
    <li className="repository-details-list">
      <div className="repository-container">
        <img src={avatarUrl} alt="avatar" className="avatar-image" />
        <h1 className="name">{name}</h1>
        <div className="stars">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
            className="stars"
            alt="stars"
          />
          {starsCount} stars
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
