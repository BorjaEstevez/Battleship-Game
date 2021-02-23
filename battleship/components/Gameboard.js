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
            winner: ''
        }
        this.initializeBoard();
    }

    initializeBoard(){
        for (let i = 0; i < NBR_OF_ROWS * NBR_OF_COLS; i++) {
            board[i] = START;
        }
    }

    winGame(){

    }
    
    drawItem(number){
        if (board[number] == START && this.winGame() === "") {
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

        for (let i = o; i < NBR_OF_ROWS; i++) {
            firstRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = o; i < NBR_OF_ROWS * 2; i++) {
            secondRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = o; i < NBR_OF_ROWS * 3; i++) {
            thirdRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = o; i < NBR_OF_ROWS * 4; i++) {
            fourthRow.push(
                <Pressable key = {i} style = {styles.row} onPress= {() => this.drawItem(i)}>
                    <Entypo key = {i} name = {board[i]} size = {32} color = {this.chooseItemColor(i)} />
                </Pressable>
            )
        }
        for (let i = o; i < NBR_OF_ROWS * 5; i++) {
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
                <Text style={styles.gameinfo}>Winner: {this.state.winner}</Text>
                <Pressable style={styles.button} onPress={()=>this.resetGame()}>
                    <Text style={styles.buttonText}>Restart Game</Text>
                </Pressable>
            </View>
        )
    }

}