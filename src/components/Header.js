import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>Add Task</h1>
      
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      
    </header>
  )
}

export default Header
