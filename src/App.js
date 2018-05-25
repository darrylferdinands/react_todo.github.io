import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         items: ['Add your Items Below...']
      }
      this.handleAdd = this.handleAdd.bind(this);
   };
   handleAdd() {
      var newItems = this.state.items.concat([prompt('Add New Item')]);
      this.setState({items: newItems});
   }
   handleRemove(i) {
      var newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
   }
   render() {
      var items = this.state.items.map(function(item, i) {
         return (
            <div style={{'margin-left': 25, 'background-color' : '#f2f2f2', 
            'width' : 400, 'border-radius': 10, 'margin-top': 5, 'overflow': 'hidden' }} 
            key = {item} onClick = {this.handleRemove.bind(this, i)}>
               {'•' + '   ' + item}
            </div>
         );
      }.bind(this));
      
      return (
         <div>      
            <button onClick = {this.handleAdd}>ADD ITEM</button>
            
            <ReactCSSTransitionGroup transitionName = "example" 
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               {items}
            </ReactCSSTransitionGroup>
         </div>
      );
   }
}
export default App;