import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <ApprovalCard>
            <CommentDetail tanggal="Senin, 12 Ags 2019" 
                pesan="Belajar React JS" />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail tanggal="Selasa, 13 Ags 2019" 
                pesan="Belajar React Component" />
        </ApprovalCard>
      </div>
    );
};

export default App;