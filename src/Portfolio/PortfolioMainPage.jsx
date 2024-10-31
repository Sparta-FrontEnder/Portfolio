import React from 'react'
import Header from './Header'
import CarouselFade from './Carousel'
import ProjectList from './components/ProjectList';
import AnotherPage from './components/AnotherPage.jsx';
import AppleProject from './components/AppleProject.jsx';
import EMoviePage from './components/EMoviePage.jsx';
import SoonestPage from './components/SoonestPage.jsx';
import EMovie from '../EMoviePage/EMovie.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
const PortfolioMainPage = () => {
  return (
    <div>
        <Router>
 {/* 渲染 Header */}
        <Header />
        <Routes>
            <Route path="/" element={
              <div className="container">
                <CarouselFade/>
                <ProjectList/>
                {/* <Contact/> */}
            </div>} /> {/* 默认路由 */}
            <Route path="/SoonestPage" element={<SoonestPage />} />
            <Route path="/AppleProject" element={<AppleProject />} />
            <Route path="/EMoviePage" element={<EMoviePage />} />
            <Route path="/EMovie" element={<EMovie />} />
            <Route path="/anotherPage" element={<AnotherPage />} /> {/* 路由到 SecondPage */}
            {/* 你可以在这里添加其他路由 */}
            </Routes>
        </Router>
       
        
    </div>
  )
}

export default PortfolioMainPage
