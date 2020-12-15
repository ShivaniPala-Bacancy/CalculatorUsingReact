import React, { Component } from 'react';
import styles from './Layout.module.css'
import Button from '../Buttons/Button'
class Layout extends Component{
    constructor(props){
        super(props)
        this.inputRef= React.createRef();
        this.state= {
            input: ""

        }
        this.num1="";
        this.num2="";
        this.operator="";
    }
    clicked= (abc) =>{
        let val = this.state.input + abc;
        this.setState({input: val})
    }
    setOperator= (op) =>{
        this.operator= op;
        let val = this.state.input + op;
        this.setState({input: val})
    }
    clear =() => {
        this.setState({input: ""})
    }
    solveEquation=(n1, n2, ope) =>{
        let ans;
            switch(ope) {
                case "+":
                    ans= parseFloat(n1) + parseFloat(n2);
                    break;
                case '-':
                    ans= parseFloat(n1) - parseFloat(n2);
                    break;

                case '*':
                    ans= parseFloat(n1) * parseFloat(n2);
                    break;

                case '/':
                    ans= parseFloat(n1) / parseFloat(n2);
                    break;
                case '%':
                    ans= parseFloat(n1) % parseFloat(n2);
                    break;
                default:
                    ans= "something went wrong";
                    break;

            }
        
        this.setState({input: ans});
        this.num2="";
        this.num1="";
        this.operator="";
    }


    solve=(equ)=>{
        let str= this.state.input;
        const ope= ['+' , '-' ,'*' ,'/' ,'%']
        for(let i=0;i< str.length; i++){
            if(ope.includes(str[i])){
                this.num1= str.substring(0,i);
                this.num2= str.substring(i+1);
                this.operator= str[i];
            }
        }
        console.log("num1: " + this.num1);
        const val=Number(this.num1)?true:false
        console.log("num1 is number: " + val)
        console.log("num2: " + this.num2);
        
        const val2=Number(this.num2)?true:false
        console.log("num1 is number: " + val2)
        this.solveEquation(this.num1, this.num2, this.operator);
    }
    delete=()=>{
        let str= String(this.state.input);
        console.log( typeof(str))
        const editedText = str.slice(0, -1) 

        this.setState({input: editedText})
    }

    render(){
        return(
        <div className={styles.Div}>
            <p className={styles.P} ref={this.inputRef}>{this.state.input}</p>
            <table className={styles.Table}>
                <tbody>
                <tr>
                    <td>
                        <Button fillText="7" clicked={this.clicked.bind(this, "7")} />
                    </td>
                    <td>
                        <Button fillText="8" clicked={this.clicked.bind(this, "8")} />
                    </td>
                    <td>
                        <Button fillText="9" clicked={this.clicked.bind(this, "9")} />
                    </td>
                    <td>
                        <Button fillText="Del" clicked={this.delete} />
                    </td>
                    <td>
                        <Button fillText="C" clicked={this.clear} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Button fillText="4" clicked={this.clicked.bind(this, "4")} />
                    </td>
                    <td>
                    <Button fillText="5" clicked={this.clicked.bind(this, "5")} />
                    </td>
                    <td>
                    <Button fillText="6" clicked={this.clicked.bind(this, "6")} />
                    </td>
                    <td>
                    <Button fillText="*" clicked={this.setOperator.bind(this, "*")} />
                    </td>
                    <td>
                    <Button fillText="/" clicked={this.setOperator.bind(this, "/")} />
                    </td>
                </tr>
                <tr>           
                    <td>
                    <Button fillText="1" clicked={this.clicked.bind(this, "1")} />
                    </td>
                    <td>
                    <Button fillText="2" clicked={this.clicked.bind(this, "2")} />
                    </td>
                    <td>
                    <Button fillText="3" clicked={this.clicked.bind(this, "3")} />
                    </td>
                    <td>
                    <Button fillText="+" clicked={this.setOperator.bind(this, "+")} />
                    </td>
                    <td>
                    <Button fillText="-" clicked={this.setOperator.bind(this, "-")} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Button fillText="00" clicked={this.clicked.bind(this, "00")} />
                    </td>
                    <td>
                    <Button fillText="0" clicked={this.clicked.bind(this, "0")} />
                    </td>
                    <td>
                    <Button fillText="." clicked={this.clicked.bind(this, ".")} />
                    </td>
                    <td>
                    <Button fillText="=" clicked={this.solve.bind(this, this.state.input)} />
                    </td>
                    <td>
                        <Button fillText="%" clicked={this.setOperator.bind(this, "%")} />
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
        )
    }
}

export default Layout;