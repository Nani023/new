import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails} = props
  const {language} = languageFilterDetails

  return (
    <li className="languages-repository">
      <button className="button" type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
