let fenPositions = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
let chessBoardArray = 
  [
  'r','n','b','q','k','b','n','r',
  'p','p','p','p','p','p','p','p',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  'P','P','P','P','P','P','P','P',
  'R','N','B','Q','K','B','N','R'
]
let whiteMove = true
let encroissantSquare = '-'
let castlingRights = 'KQkq'
let halfMoves = 0
let moveNumber = 0
let lastMove = 'First move'

function printFEN() {
  return getFENpositions() + ' ' + (whiteMove ? 'w' : 'b') + ' ' + (castlingRights ? castlingRights : '-') + ' ' + encroissantSquare  + ' ' + halfMoves + ' ' + moveNumber
}

function getFENpositions() {
  let currentFEN = ''
  let rowEnds = [8, 16, 24, 32, 40, 48, 56, 64]
  let rowEnds.forEach(n => {
    blankSquares = 0
    chessBoardArray.slice(n-8, n).forEach(i => {
      if (i !== '1') {
        if (blankSquares > 0) {
          currentFEN += blankSquares
          blankSquares = 0
        }
        currentFEN += i
      }
      else {
        blankSquares += 1
      }
    })
    if (blankSquares > 0) {
      currentFEN += blankSquares
      blankSquares = 0
    }
    currentFEN += '/'
  })
  currentFEN = currentFEN.slice(0,-1)
  return currentFEN
}

function getMoves(pgn) {
  let linesCount = pgn.split(/\r\n|\r|\n/).length
  let moves = pgn.match(/(1\.).*/gm)[0]
  return moves
}

export default { printFEN, getMoves }

const pgn = `
1. e4 e5
2. Nf3 Nc6
3. Bb5 a6
4. Ba4 Nf6
5. O-O Be7
6. Re1 b5
7. Bb3 d6
8. c3 O-O
9. h3 Nb8
10. d4 Nbd7
11. Nbd2 Bb7
12. Bc2 Re8
13. Nf1 Bf8
14. Ng3 g6
15. a4 c5
16. d5 c4
17. Bg5 h6
18. Be3 Nc5
19. Qd2 h5
20. Bg5 Be7
21. Ra3 Nfd7
22. Be3 Qc7
23. Rea1 Reb8
24. Ng5 Qd8
25. f4 exf4
26. Bxf4 Ne5
27. Nf3 Nxf3+
28. gxf3 Bc8
29. Kh2 Qd7
30. Qg2 bxa4
31. R3a2 Nd3
32. Bxd3 cxd3
33. Nxh5 Rb3
34. Bg5 Rab8
35. Bxe7 Qxe7
36. Nf4 Qe5
37. Qg3 Rxb2+
38. Rxb2 Rxb2+
39. Kh1 Qxc3
40. Nxg6 fxg6
41. Qxg6+ Qg7
42. Qe8+ Kh7
43. Qh5+ Qh6
44. Qf7+ Kh8
45. Qe8+ Kg7
46. Qe7+ Kg8
47. Qe8+ Qf8
48. Rg1+ Kh7
49. Qxf8
`

console.log(getMoves(pgn))