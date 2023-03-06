const DenominationItem = props => {
  const {denominationDetails} = props
  const {value, onDeleteUser} = denominationDetails
  const onDelete = () => {
    onDeleteUser(value)
  }

  return (
    <li>
      <button type="button" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
