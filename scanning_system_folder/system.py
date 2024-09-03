
import os


secret_words = ["hard", "alone","help","no one","pain","accidentally","no,"]  # any word that will allert the people that elderly need assistance

# Get the current directory
current_directory = os.getcwd()  # This part is complete
print(f"Current directory: {current_directory}")

# List all files in the current directory
files = os.listdir(current_directory) 
print(f"Files in directory: {files}")
print('\n\n')

# Iterate through all files in the directory
for file_path in files:
    # Check if the file is a text file
    if file_path.endswith('.txt'): 
        print(f"Checking file: {file_path}\n") 
        
        # Open the file and perform the check
        with open(file_path, 'r') as file:
            # Read each line from the file
            lines = file.readlines() 
            
            # Check each line for any of the secret words
            for line in lines:
                # Convert line to lowercase and split into words
                words = line.strip().lower().split()  

                # Check if any secret word is in the list of words
                found_words = [word for word in secret_words if word in words]
                
                if found_words:  
                    print(f"Secret word(s) {', '.join(found_words)} found in file: {file_path}") 
                    print(f"Line containing the secret word(s): {line.strip()}\n") 
                    


