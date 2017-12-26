import React from 'react';
import Square from './Square'
class Board extends React.Component {
  constructor(props) {
     super(props);
     this.handler = this.handler.bind(this);
     let values = []
     if(props.values != undefined){
       values = props.values
     }
     this.state = {
        values: values,
        total: 0
    };
    this.math_operators = {
     "+": function (x, y) { return x + y },
     "-": function (x, y) { return x - y },
     "/": function (x, y) { return x / y},
     "*": function (x, y) { return x * y}
    }
   }

   handler(param1) {
    if(param1 == "clr"){
      this.setState({
        values: [],
        total: 0
      })
      return;
    }
    //check if balanced
    var balancer = 0
    var change_state = false
    var total = 0
    if(param1 === "="){
      for (var i = 0; i < this.state.values.length; i++) {
        if(isNaN(this.state.values[i])){
          balancer -= 1
        }else{
          balancer += 1
        }
      }
    }
    if(param1 === "="){
      balancer -= 1
    }
    if (balancer === 0 && param1 === "="){
      for (var i = 0; i < this.state.values.length - 1; i++) {
        if(isNaN(this.state.values[i])){
          var first_val =  (!change_state) ? parseInt(this.state.values[i - 1]) : total
          var second_val = parseInt(this.state.values[i + 1])
          total = this.math_operators[this.state.values[i]](first_val, second_val)
          change_state = true
        }
      }
      if(change_state){
        this.setState({
            values: [],
            total: total
        });
        return total;
      }

    }
    if(isNaN(param1)){
      this.state.values.push(param1)
    }else{
      if(isNaN(this.state.values[this.state.values.length - 1])){
        this.state.values.push(param1)
      }else{
        this.state.values[this.state.values.length - 1] += param1.toString()
      }
    }
    this.setState({
        values: this.state.values,
        total: total
    });
   }

   current_evaluation(){
     var evaluation = ""
     for (var i = 0; i < this.state.values.length; i++) {
       evaluation += this.state.values[i] + " "
     }
     return evaluation;
   }
   renderSquare(i) {
     return <Square value_and_handler={[i, this.handler]} />;
   }

   render() {
     const status = <h2> "Demo Calc Test" </h2>
     const total = <h3>Total: {this.state.total}</h3>;
     const textbox = <div>{this.current_evaluation()}</div>
     return (
       <div id="Board">
          {status}
          {textbox}
         <div className="board-row">
           {this.renderSquare(0)}
           {this.renderSquare(1)}
           {this.renderSquare(2)}
           {this.renderSquare("+")}
           {this.renderSquare("*")}
         </div>
         <div className="board-row">
           {this.renderSquare(3)}
           {this.renderSquare(4)}
           {this.renderSquare(5)}
           {this.renderSquare("-")}
           {this.renderSquare("clr")}
         </div>
         <div className="board-row">
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
           {this.renderSquare(9)}
           {this.renderSquare("=")}
         </div>
         {total}
       </div>
     );
   }
}

export default Board;
