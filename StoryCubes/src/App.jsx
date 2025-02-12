import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const emojis = ['❤️', '😁', '😃', '😊', '😎', '🙂', '😑', '😶', '🥱', '😒', '😲', '😖', '😠', '🥺', '☠️']

  let n = Math.floor(Math.random() * emojis.length)

  console.log(emojis[n])

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
