const EMPTY_STRING = "";
const BOARD_SIZE = 30;

class Board {
    constructor(size) {
        this.size = size;
        this.boardArr = [];
        for (let i = 0; i < this.size; i++) {
            let tempArr = [];
            for (let j = 0; j < this.size; j++) {
                tempArr.push(EMPTY_STRING);
            }
            this.boardArr.push(tempArr);
        }
    }

    checkWin() {
        for (let i = 0; i < this.size - 4; i++) {
            for (let j = 0; j < this.size - 4; j++) {
                //Check hang ngang
                if (this.boardArr[i][j] == this.boardArr[i][j + 1] &&
                    this.boardArr[i][j] == this.boardArr[i][j + 2] &&
                    this.boardArr[i][j] == this.boardArr[i][j + 3] &&
                    this.boardArr[i][j] == this.boardArr[i][j + 4] &&
                    this.boardArr[i][j] != EMPTY_STRING) {
                    return this.boardArr[i][j];
                } else if (
                    // Check hang doc
                    this.boardArr[i][j] == this.boardArr[i + 1][j] &&
                    this.boardArr[i][j] == this.boardArr[i + 2][j] &&
                    this.boardArr[i][j] == this.boardArr[i + 3][j] &&
                    this.boardArr[i][j] == this.boardArr[i + 4][j] &&
                    this.boardArr[i][j] != EMPTY_STRING) {
                    return this.boardArr[i][j];
                } else if (
                    // Check hang cheo tu trai qua
                    this.boardArr[i][j] == this.boardArr[i + 1][j + 1] &&
                    this.boardArr[i][j] == this.boardArr[i + 2][j + 2] &&
                    this.boardArr[i][j] == this.boardArr[i + 3][j + 3] &&
                    this.boardArr[i][j] == this.boardArr[i + 4][j + 4] &&
                    this.boardArr[i][j] != EMPTY_STRING) {
                    return this.boardArr[i][j];
                } else if (
                    i >= 4 &&
                    // Check hang cheo tu phai qua
                    this.boardArr[i][j] == this.boardArr[i - 1][j + 1] &&
                    this.boardArr[i][j] == this.boardArr[i - 2][j + 2] &&
                    this.boardArr[i][j] == this.boardArr[i - 3][j + 3] &&
                    this.boardArr[i][j] == this.boardArr[i - 4][j + 4] &&
                    this.boardArr[i][j] != EMPTY_STRING) {
                    return this.boardArr[i][j];
                }
            }
        }
        return EMPTY_STRING;
    }

    markBoard(x, y, symbol) {
        this.boardArr[x][y] = symbol;
    }

    getBoardArray() {
        return this.boardArr;
    }

    getBoardSize() {
        return this.size;
    }

    drawBoard() {
        let result = "<table>";
        for (let i = 0; i < this.size; i++) {
            result += "<tr>"
            for (let j = 0; j < this.size; j++) {
                if (this.boardArr[i][j] != EMPTY_STRING) {
                    result += "<td><button disabled id=\"board-" + i + "-" + j + "\" onclick=\"play(" + i + "," + j + ");\">" + this.boardArr[i][j] + "</button></td>";
                } else {
                    result += "<td><button id=\"board-" + i + "-" + j + "\" onclick=\"play(" + i + "," + j + ");\">" + this.boardArr[i][j] + "</button></td>";
                }
            }
            result += "</tr>";
        }
        result += "</table>";
        document.getElementById("caro-board").innerHTML = result;
    }
}

class Player {
    constructor(symbol) {
        this.symbol = symbol;
    }

    setBoard(board) {
        this.board = board
    }

    playGame(x, y) {
        this.board.markBoard(x, y, this.symbol);
    }

    getSymbol() {
        return this.symbol;
    }
}


let board;
let player1;
let player2;
let turn;

function startGame() {
    board = new Board(BOARD_SIZE);
    player1 = new Player("O");
    player2 = new Player("X");
    player1.setBoard(board);
    player2.setBoard(board);
    board.drawBoard();
    turn = 0;
    showGameInfo();
    document.getElementById("player1").style.color = "red"
}

function play(i, j) {
    turn = turn + 1;
    if (turn % 2 == 1) {
        player1.playGame(i, j, player1.getSymbol());
        document.getElementById("player1").style.color = "black";
        document.getElementById("player2").style.color = "red";
    } else {
        player2.playGame(i, j, player2.getSymbol());
        document.getElementById("player1").style.color = "red";
        document.getElementById("player2").style.color = "black";
    }
    board.drawBoard();

    if (board.checkWin() != EMPTY_STRING) {
        setTimeout(() => {
            board.checkWin() == player1.getSymbol() ? alert("Player1 WON!") : alert("Player2 WON!");
            gameOver();
        }, 0);
        return;
    }

    if (turn >= board.getBoardSize() * board.getBoardSize()) {
        setTimeout(() => {
            alert("DUEL!");
        }, 0);
    }
}

function gameOver() {
    for (let i = 0; i < board.getBoardSize(); i++) {
        for (let j = 0; j < board.getBoardSize(); j++) {
            document.getElementById("board-" + i + "-" + j).disabled = true;
        }
    }
}

function showGameInfo() {
    let gameInfo = "";
    gameInfo += "<h3 id=\"player1\">Player1: " + player1.getSymbol() + "</h3>";
    gameInfo += "<h3 id=\"player2\">Player2: " + player2.getSymbol() + "</h3>";
    document.getElementById("game-info").innerHTML = gameInfo;
}