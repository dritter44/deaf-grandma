def deaf_grandma():
    count_GB = 0
    while count_GB == 0:
        # need to find a way to prompt user
        user_input = input('HEY KID!')
        if user_input == 'GOODBYE!':
            count_GB += 1
            print('LEAVING SO SOON!')
        elif user_input == '':
            print("WHAT?!")
        elif user_input == user_input.upper() and user_input != 'GOODBYE!':
            print("NO! NOT SINCE 1946!")
        else:
            print("SPEAK UP ")
    while count_GB == 1:
        user_input = input('HEY KID!')
        if user_input == 'GOODBYE!':
            print('LATER SKATER!')
            return
        elif user_input == '':
            print("WHAT?!")
        elif user_input == user_input.upper() and user_input != 'GOODBYE!':
            print("NO! NOT SINCE 1946!")
        else:
            print("SPEAK UP ")


deaf_grandma()
