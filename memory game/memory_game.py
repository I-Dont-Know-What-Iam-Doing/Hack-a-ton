


import random
import time
import os
import json

def clear_screen():
    """Clear the console screen."""
    os.system('cls' if os.name == 'nt' else 'clear')

def display_header(score):
    """Display the game header with the current score."""
    clear_screen()
    print("****************************************")
    print(f"   Number Memory Game - Score: {score}   ")
    print("****************************************")

def display_numbers(numbers, delay=5):
    """Display numbers and hide them after a delay."""
    display_header(score=0)  # Placeholder score, not used in this function
    print("\nRemember these numbers:")
    print(" ".join(map(str, numbers)))
    time.sleep(delay)
    clear_screen()

def get_user_input(length):
    """Get user input for recalling numbers."""
    while True:
        try:
            print(f"Enter the {length} numbers separated by spaces (or type 'exit' to quit):")
            user_input = input("> ").strip().lower()
            if user_input == 'exit':
                return None  # Indicate that the user wants to exit
            user_numbers = list(map(int, user_input.split()))
            if len(user_numbers) != length:
                raise ValueError(f"You need to enter exactly {length} numbers.")
            return user_numbers
        except ValueError as e:
            print(f"\nError: {e}. Please try again.")

def load_game_state():
    """Load game state from a file."""
    try:
        with open('game_state.json', 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {'score': 0, 'username': ''}

def save_game_state(score, username):
    """Save game state to a file."""
    with open('game_state.json', 'w') as file:
        json.dump({'score': score, 'username': username}, file)

def load_leaderboard():
    """Load leaderboard data from a file."""
    try:
        with open('leaderboard.json', 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {}

def save_leaderboard(leaderboard):
    """Save leaderboard data to a file."""
    with open('leaderboard.json', 'w') as file:
        json.dump(leaderboard, file)

def display_leaderboard():
    """Display the leaderboard."""
    clear_screen()
    print("****************************************")
    print("              Leaderboard              ")
    print("****************************************")
    leaderboard = load_leaderboard()
    if not leaderboard:
        print("\nNo scores available.")
    else:
        for user, scores in leaderboard.items():
            total_score = sum(scores)
            print(f"{user:20} | Total Score: {total_score} | Game won: {scores}")
    print("****************************************")

def memory_game(score, username):
    """Main function to run the memory game."""
    display_header(score)
    print("   Welcome to the Number Memory Game!   ")
    
    # Get difficulty level
    while True:
        difficulty = input("\nChoose difficulty (easy/medium/hard) or type 'exit' to quit: ").strip().lower()
        if difficulty == 'exit':
            return None, None  # Indicate that the user wants to exit
        elif difficulty == 'easy':
            num_length = 3
            delay = 5
            break
        elif difficulty == 'medium':
            num_length = 5
            delay = 7
            break
        elif difficulty == 'hard':
            num_length = 7
            delay = 10
            break
        else:
            print("\nInvalid difficulty level. Please choose 'easy', 'medium', or 'hard'.")
    
    # Generate numbers and display
    numbers = random.sample(range(1, 101), num_length)  # Random numbers between 1 and 100
    display_numbers(numbers, delay)
    
    # Get user input and check it
    user_numbers = get_user_input(num_length)
    if user_numbers is None:  # Check if user chose to exit
        return None, None
    
    print("\n" + "="*40)
    if user_numbers == numbers:
        print("Congratulations! You remembered the numbers correctly.")
        score += 1
    else:
        print(f"Sorry, that's not correct. The correct numbers were: {numbers}")
    print("="*40)
    
    return score, username

def main():
    """Main loop for the game."""
    leaderboard = load_leaderboard()
    game_state = load_game_state()
    score = game_state.get('score', 0)
    username = game_state.get('username', '')

    while True:
        display_header(score)
        
        # Center-aligned menu
        print("****************************************")
        menu_title = "MENU"
        print(f"{menu_title:^40}")
        print("****************************************")
        print("1. Start a new game (0 points)")
        print("2. Continue from saved game")
        print("3. View Leaderboard")
        print("0. Exit")
        print("****************************************")
        
        choice = input("\nChoose an option: ").strip().lower()
        
        if choice == '1':
            username = input("Enter your username: ").strip()
            score = 0  # Reset score for new game
            clear_screen()
            while True:
                score, username = memory_game(score, username)
                if score is None:  # Check if user chose to exit
                    return
                save_game_state(score, username)
                play_again = input("\nDo you want to play again? (yes/no) or type 'exit' to quit: ").strip().lower()
                if play_again == 'exit':
                    return
                elif play_again in ['yes', 'y']:
                    clear_screen()
                elif play_again in ['no', 'n']:
                    # Update leaderboard
                    if username:
                        if username in leaderboard:
                            leaderboard[username].append(score)
                        else:
                            leaderboard[username] = [score]
                        save_leaderboard(leaderboard)
                    display_header(score)
                    print("Thank you for playing! Goodbye!")
                    save_game_state(score, username)
                    return
                else:
                    print("\nInvalid input. Please enter 'yes' or 'no'.")
        
        elif choice == '2':
            username = input("Enter your username: ").strip()
            clear_screen()
            while True:
                score, username = memory_game(score, username)
                if score is None:  # Check if user chose to exit
                    return
                save_game_state(score, username)
                play_again = input("\nDo you want to play again? (yes/no) or type 'exit' to quit: ").strip().lower()
                if play_again == 'exit':
                    return
                elif play_again in ['yes', 'y']:
                    clear_screen()
                elif play_again in ['no', 'n']:
                    # Update leaderboard
                    if username:
                        if username in leaderboard:
                            leaderboard[username].append(score)
                        else:
                            leaderboard[username] = [score]
                        save_leaderboard(leaderboard)
                    display_header(score)
                    print("Thank you for playing! Goodbye!")
                    save_game_state(score, username)
                    return
                else:
                    print("\nInvalid input. Please enter 'yes' or 'no'.")
        
        elif choice == '3':
            display_leaderboard()
            input("\nPress Enter to return to the menu.")
        
        elif choice == '0':
            display_header(score)
            print("Thank you for playing! Goodbye!")
            save_game_state(score, username)
            return
        
        else:
            print("\nInvalid choice. Please enter '1', '2', '3', or '0'.")

if __name__ == "__main__":
    main()

