
import './App.css'
import SimpleComment from './SimpleComment'
import { useState } from 'react'

function App() {
  const [comments, setComments] =useState([
    {
      id:1 ,
      author: 'Ahmad',
      text:'Eu aute et Lorem veniam nisi commodo eiusmod commodo eiusmod.',
      likes: 3
    },
    {
      id:2 ,
      author: 'Faisal',
      text:'Eu aute et Lorem veniam nisi commodo eiusmod commodo eiusmod.',
      likes: 1
    },
    {
      id:3 ,
      author: 'Maha',
      text:'Eu aute et Lorem veniam nisi commodo eiusmod commodo eiusmod.',
      likes: 6
    }
  ])
  const onUpdateLikes = (commentId, newLikes) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, likes: newLikes } : comment
      )
    );
  };
  return (
    <>
     <h1>Quiz 3 solution</h1>
     {comments.map((arr,_)=> (
       <div className='card' key={arr.id}>
     <SimpleComment data={arr} onUpdateLikes={onUpdateLikes}/>
     </div>
     ))
    }
    </>
  )
}

export default App
