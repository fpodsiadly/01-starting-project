export default function TabButton({ children, onSelect, isSelected }) {
  console.log('tab button rendering')
  isSelected = isSelected ? 'active' : ''

  return (
    <li>
      <button className={isSelected} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}
