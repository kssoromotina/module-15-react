import React from 'react';

class Comment extends React.Component {
  render() {
    this.addZero = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const dateTime = `${date.toLocaleDateString()}, ${this.addZero(hours)}:${this.addZero(minutes)}`;

    this.handleDelete = (e) => {
      const target = e.target;
      const itemToRemove = target.closest('li');

      if(target) {
        itemToRemove.remove();
      }
      
    }

    if (this.props.data) {  
      return (
        <li className='comments-item'> 
          <div className='comments-props'>
            <span className='comment-author'>{this.props.data[0]}</span>
            <span className='comment-time'>{dateTime}</span>
          </div>
          <div className='comment-text'>{this.props.data[1]}</div>
          <button className='delete-comment' onClick={this.handleDelete}>Delete</button>
        </li>
      )
    } else 
      return false;
  }
};

export default Comment;