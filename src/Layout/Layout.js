import React, { Component } from 'react';
import styles from './Layout.module.css'
import Button from '../Buttons/Button'
class Layout extends Component{
    constructor(props){
        super(props)
        this.state= {
            input: ""
        }
    }
    buttonClicked= (btnText) =>{
        let val = this.state.input + btnText;
        this.setState({input: val})
    }
    clear =() => {
        this.setState({input: ""})
    }
    square=()=>{
        let str= this.state.input
        let i= str.length-1;
        let a=""
        while(str[i]>=0 && str[i]<=9){
            a += str[i]
            i--;
        }
        let fstr= str.substring(0, i+1);
        console.log(fstr)
        a= a.split('').reverse().join('');
        let n= Number(a);
        let squ= n*n;
        str= fstr + squ;
        this.setState({input: str});
    }
    solve= (equ) =>{
        let str= equ;
        const ans= eval(str)
        this.setState({input: ans})
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
            <p className={styles.P}>{this.state.input}</p>
            <table className={styles.Table}>
                <tbody>
                <tr>
                    <td>
                        <Button fillText="7" clicked={this.buttonClicked.bind(this, "7")} />
                    </td>
                    <td>
                        <Button fillText="8" clicked={this.buttonClicked.bind(this, "8")} />
                    </td>
                    <td>
                        <Button fillText="9" clicked={this.buttonClicked.bind(this, "9")} />
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
                    <Button fillText="4" clicked={this.buttonClicked.bind(this, "4")} />
                    </td>
                    <td>
                    <Button fillText="5" clicked={this.buttonClicked.bind(this, "5")} />
                    </td>
                    <td>
                    <Button fillText="6" clicked={this.buttonClicked.bind(this, "6")} />
                    </td>
                    <td>
                    <Button fillText="*" clicked={this.buttonClicked.bind(this, "*")} />
                    </td>
                    <td>
                    <Button fillText="/" clicked={this.buttonClicked.bind(this, "/")} />
                    </td>
                </tr>
                <tr>           
                    <td>
                    <Button fillText="1" clicked={this.buttonClicked.bind(this, "1")} />
                    </td>
                    <td>
                    <Button fillText="2" clicked={this.buttonClicked.bind(this, "2")} />
                    </td>
                    <td>
                    <Button fillText="3" clicked={this.buttonClicked.bind(this, "3")} />
                    </td>
                    <td>
                    <Button fillText="+" clicked={this.buttonClicked.bind(this, "+")} />
                    </td>
                    <td>
                    <Button fillText="-" clicked={this.buttonClicked.bind(this, "-")} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Button fillText="00" clicked={this.buttonClicked.bind(this, "00")} />
                    </td>
                    <td>
                    <Button fillText="0" clicked={this.buttonClicked.bind(this, "0")} />
                    </td>
                    <td>
                    <Button fillText="." clicked={this.buttonClicked.bind(this, ".")} />
                    </td>
                    <td>
                    <Button fillText="=" clicked={this.solve.bind(this, this.state.input)} />
                    </td>
                    <td>
                        <Button fillText="%" clicked={this.buttonClicked.bind(this, "%")} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button fillText="x^2" clicked={this.square} />
                    </td>
                    
                    <td>
                        <Button fillText="(" clicked={this.buttonClicked.bind(this, "(")} />
                    </td>
                    
                    <td>
                        <Button fillText=")" clicked={this.buttonClicked.bind(this, ")")} />
                    </td>
                </tr>

                </tbody>
            </table>

        </div>
        )
    }
}

export default Layout;