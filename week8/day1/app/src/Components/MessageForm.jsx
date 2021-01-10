const MessageForm = ({ setMessage, message }) => {
  const handleSubmit = (e) => {
    e.preventDefault() // what should we do with the message?
    console.log("Form submitted!", message)
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit}>
       <h1>Set Message</h1>  
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your message here"
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        value={message}
      ></textarea>
                  
      <input type="submit" value="Send Message" />
              
    </form>
  )
}

export default MessageForm
