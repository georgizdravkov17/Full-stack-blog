import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen, PostsScreen, NotFoundScreen } from './screens/screens.js';
import { Header, Footer } from './components/components';
import { PostsProvider } from './contexts/postsContext.js';
import PostForm from './components/Post-components/Post-form/PostForm.jsx';
import './App.css';
import SinglePost from './components/Post-components/Single-post/SinglePost.jsx';

function App() {
  return (
    <Router>
      <PostsProvider>
    <div className="App">
      <Header />
        <Routes>
            <Route exact path="/" element={<HomeScreen />}/>
            <Route exact path="/posts" element={<PostsScreen />}/>
            <Route exact path="/posts/:id" element={<SinglePost />}/>
            <Route exact path="/posts/create-post" element={<PostForm />}/>
            <Route path="/*" element={<NotFoundScreen />}/>
        </Routes>
        <Footer />
    </div>
    </PostsProvider>
    </Router>
  );
}

export default App;
