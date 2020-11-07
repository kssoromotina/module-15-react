import React from 'react';
import Comment from './Comment';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  
  //нужно задавать ключи для элементов списка?
  render() {
    return (
      <ul className='comments-list'>
        <Comment data={this.props.data} />
      </ul>
    )
  }
};

export default CommentsList;