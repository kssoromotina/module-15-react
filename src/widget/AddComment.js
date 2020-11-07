import React from 'react';

class AddComment extends React.Component {
  update = (e) => {
    e.preventDefault();

    function getInputData() {  
      let nameInputEl = document.querySelector('#new-comment-author');
      let textInputEl = document.querySelector('#new-comment-text');
  
      const commentAuthor = nameInputEl.value;
      const commentText = textInputEl.value;
  
      nameInputEl.value = '';
      textInputEl.value = '';
  
      const inputData = [commentAuthor, commentText];

      if(commentAuthor !== '' && commentText !== '') 
        return inputData;
    }

    return this.props.update(getInputData());
  }

  render() {
    return (
      <form className='form' onSubmit={this.update}>
        <input type='text' id='new-comment-author' className='input' name='new-comment-author' placeholder='Enter your name...' />
        <input type='text' id='new-comment-text' className='input' name='new-comment-text' placeholder='Enter your comment...' />
        <button type='submit' className='submit-btn'>Comment</button>
      </form>
    )
  }
};

export default AddComment;