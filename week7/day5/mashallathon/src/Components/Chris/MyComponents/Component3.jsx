function Component3() {
  const handleClick = (e) => {
    alert('You cliked me!')
  }

  return (
    <div>
      <h2>Thaltha!</h2>
      <button onClick={ handleClick }>Don't touch me!</button>
    </div>
  )
}

export default Component3
