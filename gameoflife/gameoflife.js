class GameOfLife {
 
	init(turns,width,height) {
		this.board = new Array(height);
		for (var x = 0; x < height; x++) {
			this.board[x] = new Array(width);
			for (var y = 0; y < width; y++) {
				this.board[x][y] = Math.round(Math.random());
			}
		}
		this.turns = turns;
	}
 
	nextGen () {
		this.boardNext = new Array(this.board.length);
		for (var i = 0; i < this.board.length; i++) {
			this.boardNext[i] = new Array(this.board[i].length);
		}
		for (var x = 0; x < this.board.length; x++) {
			for (var y = 0; y < this.board[x].length; y++) {
				var n = 0;
				for (var dx = -1; dx <= 1; dx++) {
					for (var dy = -1; dy <= 1; dy++) {
						if ( dx == 0 && dy == 0){}
						else if (typeof this.board[x+dx] !== 'undefined'
								&& typeof this.board[x+dx][y+dy] !== 'undefined'
								&& this.board[x+dx][y+dy]) {
							n++;
						}
					}	
				}
				var c = this.board[x][y];
				switch (n) {
					case 0:
					case 1:
						c = 0;
						break;
					case 2:
						break; 
					case 3:
						c = 1;
						break;
					default:
						c = 0;
				}
				this.boardNext[x][y] = c;
			}
		}
		this.board = this.boardNext.slice();
	}
 
	draw() {
		for (var x = 0; x < this.board.length; x++) {
			for (var y = 0; y < this.board[x].length; y++) {
				
				noStroke();
				(this.board[x][y] == 1) ? fill(255, 0, 0): fill(240, 240, 240);
				rect(x*mod,y*mod,mod,mod);
			}
		}
	}
}