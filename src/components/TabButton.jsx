export default function TabButton({ children, isSelected, ...props }) {
  console.log('tab button rendering')
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  )
}
