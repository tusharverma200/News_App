import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
state={
  progress:0
}
  setProgress=(progress)=>{
    this.setProgress({progress:progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress}   key='general' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress}   key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress}   key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress}   key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress}   key='science' pageSize={12} country='us' category='science' />}></Route>
           
            <Route path='/technology' element={<News setProgress={this.setProgress}   key='technology' pageSize={12} country='us' category='technology' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress}   key='sports' pageSize={12} country='us' category='sports' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
    }




  // render() {
  //   return (
  //     <div>
  //     <BrowserRouter>
  //          <Navbar/>
  //         <Routes>
  //         <Route path="/Home" element={ <News setprogress={this.setProgress}   pageSize={6} Country='in' category='general'/>} />   
  //         <Route path="/Business" element={<News setprogress={this.setProgress}   pageSize={6} Country='in' category='business'/>} />  
  //         <Route path="/Entertainment" element={<News setprogress={this.setProgress}   pageSize={6} Country='in' category='entertainment'/> }/> 
  //         <Route path="/Technology" element={<News setprogress={this.setProgress}   pageSize={6} Country='in' category='technology'/> }/> 
  //         <Route path="/Health" element={<News setprogress={this.setProgress}   pageSize={6} Country='in' category='health'/> }/> 
  //         <Route path="/Science" element={<News setprogress={this.setProgress}   pageSize={6} Country='in' category='science'/>}/> 
          
         
  //         </Routes>
  //         </BrowserRouter> 
  //     </div>
  //   )
  // }
}






