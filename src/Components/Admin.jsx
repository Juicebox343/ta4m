import React, {useState} from "react"
import TextEditor from "./TextEditor";

const Admin = () => {

  // temporary, delete when authentication is implemented
  const [visible, setVisible] = useState("");
  const [window, setWindow] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setVisible(previous => !previous);
  }

  const renderSwitch = (param) => {
    switch(param){
      case 'new':
        return <TextEditor/>;
      case 'draft':
        return <h2>drafts</h2>;
      case 'published':
        return <h2>published</h2>;
      default:
        return <h2>choose something</h2>
    }
  }

  return (
    <main className="admin">
      {!visible && 
      <form onSubmit={handleSubmit}>
        <h2>Admin Log In Form</h2>
        <button>Hey let me in</button>
      </form>
    }
      
      {visible && 
      <>
        <div>
          <h2>Logged in</h2>
          <button onClick={handleSubmit}>nvm I hate it here.</button>
        </div>
        <div className='admin-panel'>
          <nav className='admin-menu'>
            <ul>
              <li>
                <button name='new' onClick={e => setWindow(e.target.name)}>New Post</button>
              </li>
              <li>
                <button name='draft' onClick={e => setWindow(e.target.name)}>Drafts</button>
              </li>
              <li>
                <button name='published' onClick={e => setWindow(e.target.name)}>Published Posts</button>
              </li>
            </ul>
          </nav>
          <div className="admin-viewer">
            {renderSwitch(window)}
          </div>
        </div>
      </>
      }


    </main>
  )
}

export default Admin
