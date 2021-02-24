import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo"
import styles from '../style/style'
import style from '../style/style';

let board = [];
const NBR_OF_ROWS = 5;
const NBR_OF_COLS = 5;
const START = 'plus';
const CROSS = 'cross';
const CIRCLE = 'circle';

export default class Gameboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isCross: true,
            winner: '',
            hits: 0,
            bombs:15,
            ships:3,
            status: "game has not started",
            button:"Start game",
            time:0
        }
        this.initializeBoard();
    }

    initializeBoard(){
        for (let i = 0; i < NBR_OF_ROWS * NBR_OF_COLS; i++) {
            board[i] = START;
        }
    }

    winGame = () => {
        if(board[0] != START && board[0] == board[1] && board[1] == board[2]){
          return board[0]
        }else if(board[3] != START && board[3] == board[4] && board[4] == board[5]){
          return board[3]
        }else if(board[6] != START && board[6] == board[7] && board[7] == board[8]){
          return board[6]
        }else if(board[0] != START && board[0] == board[3] && board[3] == board[6]){
          return board[0]
        }else if(board[1] != START&& board[1] == board[4] && board[4] == board[7]){
          return board[1]
        }else if(board[2] != START && board[2] == board[5] && board[5] == board[8]){
          return board[2]
        }else if(board[0] != START && board[0] == board[4] && board[4] == board[8]){
          return board[0]
        }else if(board[2] != START && board[2] == board[4] && board[4] == board[6]){
          return board[2]
        }else{
          return ""
        }
      }

      chooseItemColor = (number) => {
        if(board[number]=="cross")
          return "#FF3031"
        else if(board[number]=="circle")
          return "#45CE30"
          
        return "#74B9FF"  
      }


    drawItem(number){
        if (board[number] == START && this.winGame() === "") {
            if(this.state.bombs < 1 && this.state.ships>0){
                //game is over
                console.log("out of bombs")
            }else{  
                    this.setState({bombs: this.state.bombs -1})
                    }
          

            board[number] = this.state.isCross ? CROSS : CIRCLE
            this.setState({isCross: !this.state.isCross})
            if (this.winGame() != "") {
                this.setState({winner: this.winGame()})
            }
            else if (board.indexOf(START) === -1) {
                this.setState({winner: "No winner"})
            }
        }
    }

    resetGame(){
        this.setState({
            isCross: true,
            winner: ''})
        this.initializeBoard();
    }

    render() {
        const firstRow = [];
        const secondRow = [];
        const thirdRow = [];
        const fourthRow = [];
        const fifthrow = [];

        for (let i = 0; i < NBR_OF_ROWS; i++) {
            firstRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS; i < NBR_OF_ROWS * 2; i++) {
            secondRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS * 2; i < NBR_OF_ROWS * 3; i++) {
            thirdRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS * 3; i < NBR_OF_ROWS * 4; i++) {
            fourthRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = NBR_OF_ROWS * 4; i < NBR_OF_ROWS * 5; i++) {
            fifthrow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        return (
            <View style={styles.gameboard}>
                <View style={styles.flex}>{firstRow}</View>
                <View style={styles.flex}>{secondRow}</View>
                <View style={styles.flex}>{thirdRow}</View>
                <View style={styles.flex}>{fourthRow}</View>
                <View style={styles.flex}>{fifthrow}</View>
                <Pressable style={styles.button} onPress={()=>this.resetGame()}>
                    <Text style={styles.buttonText}>{this.state.button}</Text>
                </Pressable>
                <View>
                    <Text style={styles.gameinfo}> Hits:{ this.state.hits}  Bombs: {this.state.bombs}  Ships: {this.state.ships}</Text>
                    <Text style={styles.gameinfo}> Time:{this.state.time}</Text>
                    <Text style={styles.gameinfo}> Status:{this.state.status}</Text>
                </View>
            </View>
        )
    }

}