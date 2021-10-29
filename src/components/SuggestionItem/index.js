import './index.css'

const SuggestionItem = props => {
  const {eachItem, getClickedOne} = props
  const {suggestion} = eachItem

  const onClickedArrow = () => getClickedOne(suggestion)
  return (
    <li className="eachListItem" onClick={onClickedArrow}>
      <p>{eachItem.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImg"
      />
    </li>
  )
}
export default SuggestionItem
