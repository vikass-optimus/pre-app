import './App.css'
import AutoCounter from './components/AutoCounter'
import Button from './components/Button'
import Cart from './components/Cart'
import Counter from './components/Counter'
import LoginClassForm from './components/LoginClassForm'
import LoginForm from './components/LoginForm'
import Todos from './components/Todos'
import VirtualDomTodoList from './components/VirtualDomTodoList'
import WelcomeLoginMessage from './components/WelcomeLoginMessage'
import PostsPage from './PostsPage'

function App() {

  return (
    <>
      <Button text="Click Me" />
      <Counter />
      <Cart />
      <LoginForm />
      <div className="mt-4 text-center text-gray-500">
        <LoginClassForm />
      </div>
      <Todos />
      <WelcomeLoginMessage isLoggedIn={true} user={{name: "Vikas Singhal", type: "admin"}} />
      <PostsPage />
      <AutoCounter />
      <VirtualDomTodoList />
    </>
  )
}

export default App
