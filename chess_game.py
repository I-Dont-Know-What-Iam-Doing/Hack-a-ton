

# class ChessPiece:
#     def __init__(self, color):
#         self.color = color

#     def __repr__(self):
#         raise NotImplementedError("Subclasses must implement this method.")

# class King(ChessPiece):
#     def __repr__(self):
#         return f"{'K' if self.color == 'white' else 'k'}"

# class Queen(ChessPiece):
#     def __repr__(self):
#         return f"{'Q' if self.color == 'white' else 'q'}"

# class Rook(ChessPiece):
#     def __repr__(self):
#         return f"{'R' if self.color == 'white' else 'r'}"

# class Bishop(ChessPiece):
#     def __repr__(self):
#         return f"{'B' if self.color == 'white' else 'b'}"

# class Knight(ChessPiece):
#     def __repr__(self):
#         return f"{'N' if self.color == 'white' else 'n'}"

# class Pawn(ChessPiece):
#     def __repr__(self):
#         return f"{'P' if self.color == 'white' else 'p'}"

# class ChessBoard:
#     def __init__(self):
#         self.board = self.create_board()
#         self.current_turn = 'white'

#     def create_board(self):
#         # Create an 8x8 chessboard
#         board = [[None for _ in range(8)] for _ in range(8)]

#         # Place white pieces
#         board[0] = [Rook('white'), Knight('white'), Bishop('white'), Queen('white'), King('white'), Bishop('white'), Knight('white'), Rook('white')]
#         board[1] = [Pawn('white')] * 8

#         # Place black pieces
#         board[6] = [Pawn('black')] * 8
#         board[7] = [Rook('black'), Knight('black'), Bishop('black'), Queen('black'), King('black'), Bishop('black'), Knight('black'), Rook('black')]

#         return board

#     def print_board(self):
#         print('{:^46}'.format('WHITE'))
#         print("*"*44)
#         # Column headers with spacing
#         header = "    " + "    ".join([f"{chr(col + ord('a'))}" for col in range(8)])
#         print(header)
#         print("  " + "+----" * 8 + "+")  # Print a horizontal line

#         # Print each row with row numbers
#         for row in range(8):
#             row_pieces = " ".join([f"| {self.board[7 - row][col] if self.board[7 - row][col] else ' '} " for col in range(8)])
#             print(f"{8 - row} {row_pieces} |")
#             print("  " + "+----" * 8 + "+")  # Print a horizontal line
#         print("*"*44)
#         print('{:^46}'.format('BLACK'))

#         print()
#         print("-"*7+"game have started"+"-"*7)
#         print()

#     def move_piece(self, start, end):
#         start_row, start_col = start
#         end_row, end_col = end

#         piece = self.board[start_row][start_col]
#         if not piece:
#             print("No piece at start position.")
#             return False

#         if piece.color != self.current_turn:
#             print("It's not your turn!")
#             return False

#         # Move the piece
#         self.board[end_row][end_col] = piece
#         self.board[start_row][start_col] = None

#         # Change turn
#         self.current_turn = 'black' if self.current_turn == 'white' else 'white'
#         return True

# def main():
#     game = ChessBoard()
#     game.print_board()

#     while True:
#         user_input = input(f"{game.current_turn.capitalize()}'s turn. Enter move (e.g., 'a2 a3' for moving from a2 to a3): ")
        
#         try:
#             start_pos, end_pos = user_input.split()
#             start_col, start_row = ord(start_pos[0]) - ord('a'), 8 - int(start_pos[1])
#             end_col, end_row = ord(end_pos[0]) - ord('a'), 8 - int(end_pos[1])

#             if (start_row < 0 or start_row >= 8 or start_col < 0 or start_col >= 8 or
#                 end_row < 0 or end_row >= 8 or end_col < 0 or end_col >= 8):
#                 print("Coordinates out of range. They should be between 'a1' and 'h8'.")
#                 continue

#             if not game.move_piece((start_row, start_col), (end_row, end_col)):
#                 print("Invalid move, try again.")
#             else:
#                 game.print_board()
                

#         except (ValueError, IndexError):
#             print("Invalid input format. Please enter moves in the format 'a2 a3'.")

# if __name__ == "__main__":
#     main()



class ChessPiece:
    def __init__(self, color):
        self.color = color

    def __repr__(self):
        raise NotImplementedError("Subclasses must implement this method.")

class King(ChessPiece):
    def __repr__(self):
        return f"{'K' if self.color == 'white' else 'k'}"

class Queen(ChessPiece):
    def __repr__(self):
        return f"{'Q' if self.color == 'white' else 'q'}"

class Rook(ChessPiece):
    def __repr__(self):
        return f"{'R' if self.color == 'white' else 'r'}"

class Bishop(ChessPiece):
    def __repr__(self):
        return f"{'B' if self.color == 'white' else 'b'}"

class Knight(ChessPiece):
    def __repr__(self):
        return f"{'N' if self.color == 'white' else 'n'}"

class Pawn(ChessPiece):
    def __repr__(self):
        return f"{'P' if self.color == 'white' else 'p'}"

class ChessBoard:
    def __init__(self):
        self.board = self.create_board()
        self.current_turn = 'white'

    def create_board(self):
        # Create an 8x8 chessboard
        board = [[None for _ in range(8)] for _ in range(8)]

        # Place white pieces
        board[0] = [Rook('white'), Knight('white'), Bishop('white'), Queen('white'), King('white'), Bishop('white'), Knight('white'), Rook('white')]
        board[1] = [Pawn('white')] * 8

        # Place black pieces
        board[6] = [Pawn('black')] * 8
        board[7] = [Rook('black'), Knight('black'), Bishop('black'), Queen('black'), King('black'), Bishop('black'), Knight('black'), Rook('black')]

        return board

    def print_board(self):
        print('{:^46}'.format('WHITE'))
        print("*" * 44)
        # Column headers with spacing
        header = "    " + "    ".join([f"{chr(col + ord('a'))}" for col in range(8)])
        print(header)
        print("  " + "+----" * 8 + "+")  # Print a horizontal line

        # Print each row with row numbers (1 to 8 from bottom to top)
        for row in range(8):
            row_pieces = " ".join([f"| {self.board[row][col] if self.board[row][col] else ' '} " for col in range(8)])
            print(f"{8 - row} {row_pieces} |")
            print("  " + "+----" * 8 + "+")  # Print a horizontal line

        print("*" * 44)
        print('{:^46}'.format('BLACK'))
        print()
        print("-" * 7 + "game has started" + "-" * 7)
        print()

    def move_piece(self, start, end):
        start_row, start_col = start
        end_row, end_col = end

        piece = self.board[start_row][start_col]
        if not piece:
            print("No piece at start position.")
            return False

        if piece.color != self.current_turn:
            print("It's not your turn!")
            return False

        # Move the piece
        self.board[end_row][end_col] = piece
        self.board[start_row][start_col] = None

        # Change turn
        self.current_turn = 'black' if self.current_turn == 'white' else 'white'
        return True

def main():
    game = ChessBoard()
    game.print_board()

    while True:
        user_input = input(f"{game.current_turn.capitalize()}'s turn. Enter move (e.g., 'a2 a3' for moving from a2 to a3): ")
        
        try:
            start_pos, end_pos = user_input.split()
            start_col, start_row = ord(start_pos[0]) - ord('a'), 8 - int(start_pos[1])
            end_col, end_row = ord(end_pos[0]) - ord('a'), 8 - int(end_pos[1])

            if (start_row < 0 or start_row >= 8 or start_col < 0 or start_col >= 8 or
                end_row < 0 or end_row >= 8 or end_col < 0 or end_col >= 8):
                print("Coordinates out of range. They should be between 'a1' and 'h8'.")
                continue

            if not game.move_piece((start_row, start_col), (end_row, end_col)):
                print("Invalid move, try again.")
            else:
                game.print_board()
                
        except (ValueError, IndexError):
            print("Invalid input format. Please enter moves in the format 'a2 a3'.")

if __name__ == "__main__":
    main()
