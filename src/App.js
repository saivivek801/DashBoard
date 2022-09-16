import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import PageNavbar from "./components/Navbar"
import Article from "./pages/Article"
import ArticleList from "./pages/ArticleList"
import About from "./pages/About"

const App = () => {
    return(
        <>
        <PageNavbar/>
        <div className="container">
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/articles-list" element={<ArticleList/>} />
        <Route path="/article/:name" element={<Article/>} />
        </Routes>
        </div>
        </>
    )
}

export default App