import React from 'react';
import './widget.css';
import AddComment from './AddComment';
import CommentsList from './CommentsList';

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  //хранить здесь состояние AddComment И CommentsList 
      data: ''
    };  // обновлять state после добавления/удаления элемента списка
  }

  updateState = (inputData) => this.setState({data: inputData});

  render() {
    return (
      <div>
        <AddComment update={this.updateState} />
        <CommentsList data={this.state.data}/>
      </div>
    )
  }
};

export default Widget;