import React from 'react';
import CommentDetail from './CommentDetail';

const App = ()=>{
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </div>
    );
};

export default App;