window.onload = function() {
  
  document.getElementById("toregular").onclick = function() {                     // Functions to change color of board :) 
    document.querySelector(".chessboard").style.borderColor = '#808080';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#D6DBDF";
    }
  }
  document.getElementById("tored").onclick = function() {
    document.querySelector(".chessboard").style.borderColor = '#FE2E2E';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#FDA4A4";
    }
  }
  document.getElementById("toyellow").onclick = function() {
    document.querySelector(".chessboard").style.borderColor = '#FAD117';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#FBE47D";
    }
  }
  document.getElementById("togreen").onclick = function() {
    document.querySelector(".chessboard").style.borderColor = '#40A632';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#96D08E";
    }
  }
  document.getElementById("toblue").onclick = function() {
    document.querySelector(".chessboard").style.borderColor = '#4081FB';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#B2CCFC";
    }
  }
  document.getElementById("topurple").onclick = function() {
    document.querySelector(".chessboard").style.borderColor = '#9A4CF7';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#D7B6FE";
    }
  }
  
  document.getElementById("restart").onclick = function() {                     // Theoretically would reset board if I could make anything work 
    document.querySelector(".chessboard").style.borderColor = '#808080';
    var x = document.querySelectorAll(".darksquare");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#D6DBDF";
    }
  }
}

let main = {

  gamevariables: {                                                // Adapted method of storing game variables and pieces from [https://github.com/jagat546/Chess-Game]
                                                                  // Redesigned visual style/interface to my personal preference
    whoseturn: 'w',
    selectedpiece: '',
    highlighted: [],

    gamepieces: {
      lightking: {
        position: '5_1',
        img: 'light-king-asgore.png',
        captured: false,
        moved: false,
        type: 'lightking'
      },
      lightqueen: {
        position: '4_1',
        img: 'light-queen-toriel.png',
        captured: false,
        moved: false,
        type: 'lightqueen'
      },
      lightbishop1: {
        position: '3_1',
        img: 'light-bishop-frisk.png',
        captured: false,
        moved: false,
        type: 'lightbishop'
      },
      lightbishop2: {
        position: '6_1',
        img: 'light-bishop-frisk.png',
        captured: false,
        moved: false,
        type: 'lightbishop'
      },
      lightknight1: {
        position: '2_1',
        img: 'light-knight-papyrus.png',
        captured: false,
        moved: false,
        type: 'lightknight'
      },
      lightknight2: {
        position: '7_1',
        img: 'light-knight-papyrus.png',
        captured: false,
        moved: false,
        type: 'lightknight'
      },
      lightrook1: {
        position: '1_1',
        img: 'light-rook-sans.png',
        captured: false,
        moved: false,
        type: 'lightrook'
      },
      lightrook2: {
        position: '8_1',
        img: 'light-rook-sans.png',
        captured: false,
        moved: false,
        type: 'lightrook'
      },
      lightpawn1: {
        position: '1_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn2: {
        position: '2_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn3: {
        position: '3_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn4: {
        position: '4_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn5: {
        position: '5_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn6: {
        position: '6_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn7: {
        position: '7_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },
      lightpawn8: {
        position: '8_2',
        img: 'light-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'lightpawn'
      },

      darkking: {
        position: '5_8',
        img: 'dark-king-asgore.png',
        captured: false,
        moved: false,
        type: 'darkking'
      },
      darkqueen: {
        position: '4_8',
        img: 'dark-queen-toriel.png',
        captured: false,
        moved: false,
        type: 'darkqueen'
      },
      darkbishop1: {
        position: '3_8',
        img: 'dark-bishop-frisk.png',
        captured: false,
        moved: false,
        type: 'darkbishop'
      },
      darkbishop2: {
        position: '6_8',
        img: 'dark-bishop-frisk.png',
        captured: false,
        moved: false,
        type: 'darkbishop'
      },
      darkknight1: {
        position: '2_8',
        img: 'dark-knight-papyrus.png',
        captured: false,
        moved: false,
        type: 'darkknight'
      },
      darkknight2: {
        position: '7_8',
        img: 'dark-knight-papyrus.png',
        captured: false,
        moved: false,
        type: 'darkknight'
      },
      darkrook1: {
        position: '1_8',
        img: 'dark-rook-sans.png',
        captured: false,
        moved: false,
        type: 'darkrook'
      },
      darkrook2: {
        position: '8_8',
        img: 'dark-rook-sans.png',
        captured: false,
        moved: false,
        type: 'darkrook'
      },
      darkpawn1: {
        position: '1_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn2: {
        position: '2_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn3: {
        position: '3_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn4: {
        position: '4_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn5: {
        position: '5_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn6: {
        position: '6_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn7: {
        position: '7_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      },
      darkpawn8: {
        position: '8_7',
        img: 'dark-pawn-flowey.png',
        captured: false,
        moved: false,
        type: 'darkpawn'
      }
    }
  },

  methods: {
    setboard: function() {
      $('.box').attr('chess', 'null');

      for (let gamepiece in main.gamevariables.gamepieces) {
//         var image = new Image();
//         image.src = main.gamevariables.gamepieces[gamepiece].img;
        $('#' + main.gamevariables.gamepieces[gamepiece].position).html(`<img src='${(main.gamevariables.gamepieces[gamepiece].img)}'/>`);     // I REALLY do not know why this isn't loading the game pieces to my board 
        $('#' + main.gamevariables.gamepieces[gamepiece].position).attr('chess', gamepiece);                                                   // and it's making me want to explode
      }                                                                                                                                        // Tried using methods shown at [https://www.techiedelight.com/load-and-append-image-to-dom-javascript/]
    },                                                                                                                                         // But none worked and I DON'T KNOW WHY
    
    moveoptions: function(selectedpiece) {
      
      let pieceposition = {x: '', y: ''};
      pieceposition.x = main.gamevariables.gamepieces[selectedpiece].position.split('_')[0];                        // Split coordinate stored in gamepiece properties to get individual indexes
      pieceposition.y = main.gamevariables.gamepieces[selectedpiece].position.split('_')[1];
      
      var possiblemoves = [];
      var coordinates = [];
      var currentcoords = main.gamevariables.pieces[selectedpiece].position;
      
      // HERE IS WHERE I WOULD WRITE WORKING CODE BUT I'M JUST GOING TO WRITE PSUEDOCODE SINCE I AM HAVING TROUBLE MAKING THINGS WORK
      
      if(main.gamevariables.gamepieces[selectedpiece].type == 'lightking') {
        // possible moves = 1 square in any direction directly adjacent to current coordinates (no out of bounds)
        // return coordinates to highlight on board
      }
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'darkking') {
        // possible moves = 1 square in any direction directly adjacent to current coordinates (no out of bounds)
        // return coordinates to highlight on board
      }
      
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'lightqueen') {
        // possible moves = up to 8 squares in any direction, including diagonals (no out of bounds)
        // return coordinates to highlight on board
      }
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'darkqueen') {
        // possible moves = up to 8 squares in any direction, including diagonals (no out of bounds)
        // return coordinates to highlight on board
      }
      
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'lightbishop') {
        // possible moves = up to 8 squares in any diagonal direction (no out of bounds)
        // return coordinates to highlight on board
      }
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'darkbishop') {
        // possible moves = up to 8 squares in any diagonal direction (no out of bounds)
        // return coordinates to highlight on board
      }
      
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'lightknight') {
        // possible moves = 2 vertical and 1 horizontal, or 2 horizontal and 1 vertical (no out of bounds)
        // return coordinates to highlight on board
      }
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'darkknight') {
        // possible moves = 2 vertical and 1 horizontal, or 2 horizontal and 1 vertical (no out of bounds)
        // return coordinates to highlight on board
      }
      
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'lightrook') {
        // possible moves = up to 8 squares in any vertical or horizontal direction (no out of bounds)
        // return coordinates to highlight on board
      }
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'darkrook') {
        // possible moves = up to 8 squares in any vertical or horizontal direction (no out of bounds)
        // return coordinates to highlight on board
      }
      
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'lightpawn') {
        // possible moves = 2 spaces forward (ON FIRST MOVE - check if moved == false) or 1 space forward (no out of bounds)
        // return coordinates to highlight on board
      }
      else if(main.gamevariables.gamepieces[selectedpiece].type == 'darkpawn') {
        // possible moves = 2 spaces forward (ON FIRST MOVE - check if moved == false) or 1 space forward (no out of bounds)
        // return coordinates to highlight on board
      }
      
      // for any checking coordinates for out of bounds: 
      // if((position.x >= 1) && (position.x <= 8) && (position.y >= 1) && (position.y <= 8)) {
      //  validate/return coordinates;
      // }
    },
    
    
    captureenemy: function() {
    
    },
    
    movepiece: function(targetsquare) {
      
    },
    
    switchturns: function() {
      
      if (main.gamevariables.turn == 'w') {
        main.gamevariables.turn = 'b';
        
        $('#turn').html("Black's turn!");
      }
      else if (main.gamevariables.turn == 'b') {
        main.gamevariables.turn = 'w';
        
        $('#turn').html("White's turn!");
      }
    }
  }
};

$(document).ready(function() {
  main.methods.setboard();                                                        // Set up board
  
  $('.box').click(function(e) {
    
    var selectedpiece = {
      name: '',
      id: main.gamevariables.selectedpiece
    };
    
    // toggle 'possiblemove' class
    
    // move piece to selected square, call functions as necessary
    // capture pieces if necessary
    // check for win condition
    // switch turns
  })
  
});

  
//   var lightking = document.createElement("img");                               // Earlier/failed attempt at getting things to work
//   lightking.src = "light-king-asgore.png";
  
//   var lightqueen = document.createElement("img");
//   lightqueen.src = "light-queen-toriel.png";
  
//   var lightbishop1 = document.createElement("img");
//   lightbishop1.src = "light-bishop-frisk.png";
//   var lightbishop2 = document.createElement("img");
//   lightbishop2.src = "light-bishop-frisk.png";
  
//   var lightknight1 = document.createElement("img");
//   lightknight1.src = "light-knight-papyrus.png";
//   var lightknight2 = document.createElement("img");
//   lightknight2.src = "light-knight-papyrus.png";
  
//   var lightrook1 = document.createElement("img");
//   lightrook1.src = "light-rook-sans.png";
//   var lightrook2 = document.createElement("img");
//   lightrook2.src = "light-rook-sans.png";
  
//   var lightpawn1 = document.createElement("img");
//   lightpawn1.src = "light-pawn-flowey.png";
//   var lightpawn2 = document.createElement("img");
//   lightpawn2.src = "light-pawn-flowey.png";
//   var lightpawn3 = document.createElement("img");
//   lightpawn3.src = "light-pawn-flowey.png";
//   var lightpawn4 = document.createElement("img");
//   lightpawn4.src = "light-pawn-flowey.png";
//   var lightpawn5 = document.createElement("img");
//   lightpawn5.src = "light-pawn-flowey.png";
//   var lightpawn6 = document.createElement("img");
//   lightpawn6.src = "light-pawn-flowey.png";
//   var lightpawn7 = document.createElement("img");
//   lightpawn7.src = "light-pawn-flowey.png";
//   var lightpawn8 = document.createElement("img");
//   lightpawn8.src = "light-pawn-flowey.png";
  
//   var darkking = document.createElement("img");
//   darkking.src = "dark-king-asgore.png";
  
//   var darkqueen = document.createElement("img");
//   darkqueen.src = "dark-queen-toriel.png";
  
//   var darkbishop1 = document.createElement("img");
//   darkbishop1.src = "dark-bishop-frisk.png";
//   var darkbishop2 = document.createElement("img");
//   darkbishop2.src = "dark-bishop-frisk.png";
  
//   var darkknight1 = document.createElement("img");
//   darkknight1.src = "dark-knight-papyrus.png";
//   var darkknight2 = document.createElement("img");
//   darkknight2.src = "dark-knight-papyrus.png";
  
//   var darkrook1 = document.createElement("img");
//   darkrook1.src = "dark-rook-sans.png";
//   var darkrook2 = document.createElement("img");
//   darkrook2.src = "dark-rook-sans.png";
  
//   var darkpawn1 = document.createElement("img");
//   darkpawn1.src = "dark-pawn-flowey.png";
//   var darkpawn2 = document.createElement("img");
//   darkpawn2.src = "dark-pawn-flowey.png";
//   var darkpawn3 = document.createElement("img");
//   darkpawn3.src = "dark-pawn-flowey.png";
//   var darkpawn4 = document.createElement("img");
//   darkpawn4.src = "dark-pawn-flowey.png";
//   var darkpawn5 = document.createElement("img");
//   darkpawn5.src = "dark-pawn-flowey.png";
//   var darkpawn6 = document.createElement("img");
//   darkpawn6.src = "dark-pawn-flowey.png";
//   var darkpawn7 = document.createElement("img");
//   darkpawn7.src = "dark-pawn-flowey.png";
//   var darkpawn8 = document.createElement("img");
//   darkpawn8.src = "dark-pawn-flowey.png";
 

//   var setboard = function(box, k, j) {
//     if (k == 7) {
//       if (j == 0) {
//         box.appendChild(lightrook1);
//       } else if (j == 7) {
//         box.appendChild(lightrook2);
//       }
//       else if (j == 1) {
//         box.appendChild(lightknight1);
//       } else if (j == 6) {
//         box.appendChild(lightknight2);
//       }
//       else if (j == 2) {
//         box.appendChild(lightbishop1);
//       } else if (j == 5) {
//         box.appendChild(lightbishop2);
//       }
//       else if (j == 3) {
//         box.appendChild(lightqueen);
//       }
//       else if (j == 4) {
//         box.appendChild(lightking);
//       }
//     }
//     else if (k == 6) {
//       if (j == 0) {
//         box.appendChild(lightpawn1);
//       } else if (j == 1) {
//         box.appendChild(lightpawn2);
//       } else if (j == 2) {
//         box.appendChild(lightpawn3);
//       } else if (j == 3) {
//         box.appendChild(lightpawn4);
//       } else if (j == 4) {
//         box.appendChild(lightpawn5);
//       } else if (j == 5) {
//         box.appendChild(lightpawn6);
//       } else if (j == 6) {
//         box.appendChild(lightpawn7);
//       } else if (j == 7) {
//         box.appendChild(lightpawn8);
//       }
//     }
//     else if (k == 1) {
//       if (j == 0) {
//         box.appendChild(darkpawn1);
//       } else if (j == 1) {
//         box.appendChild(darkpawn2);
//       } else if (j == 2) {
//         box.appendChild(darkpawn3);
//       } else if (j == 3) {
//         box.appendChild(darkpawn4);
//       } else if (j == 4) {
//         box.appendChild(darkpawn5);
//       } else if (j == 5) {
//         box.appendChild(darkpawn6);
//       } else if (j == 6) {
//         box.appendChild(darkpawn7);
//       } else if (j == 7) {
//         box.appendChild(darkpawn8);
//       }
//     }
//     else if (k == 0) {
//       if (j == 0)  {
//         box.appendChild(darkrook1);
//       } else if (j == 7) {
//         box.appendChild(darkrook2);
//       }
//       else if (j == 1) {
//         box.appendChild(darkknight1);
//       } else if (j == 6) {
//         box.appendChild(darkknight2)
//       }
//       else if (j == 2) {
//         box.appendChild(darkbishop1);
//       } else if (j == 5) {
//         box.appendChild(darkbishop2);
//       }
//       else if (j == 3) {
//         box.appendChild(darkqueen);
//       }
//       else if (j == 4) {
//         box.appendChild(darkking);
//       }
//     }
//   }

// }