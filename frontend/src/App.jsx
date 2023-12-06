import {Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './components/home/HomePage'
import NavigationBar from './components/navbar/NavigationBar'
import BlogList from './components/blog/BlogList'
import AddNewPost from './components/post/AddNewPost'
import ContactUs from './components/contact/ContactUs'

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList /> } />
        <Route path="/add-post" element={<AddNewPost />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
