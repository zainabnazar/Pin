#  Challenge “PIN”
A secret agent is attempting to gain access to a doorway using a PIN pad which is organised like this:
```
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
```
    
They observe somebody using the PIN pad on the doorway to gain access, but unfortunately couldn't get a good enough look at the exact keys which were pressed. The digits were approximately 97516, but each real digit could actually lie on a horizontally or vertically adjacent digit to the approximate ones. Your task is to use this information to determine a list of possible PIN codes.
It's also useful to note that some keys on the PIN pad appear to be more worn/used than others. The following array represents how worn each key looks, from most worn to least: [5,1,2,8,7,4,0,3,6,9]
# Rewards:
:four:  Points are awarded for determining all possible PIN codes for the example above
:three:  Further points are awarded for completing the challenge in a unique choice of language amongst other participants
:three:  Further points are awarded for ordering your list of possible PIN numbers by order of likelihood*, given the above 'wear' data
* Naïve mathematical likelihood is fine - don't worry about more 'psychological' factors, such as "easy to guess" PINs.
# Example:
For the following approximate PIN: 46
The possible real PINs would be: 13, 15, 16, 19, 43, 45, 46, 49, 53, 55, 56, 59, 73, 75, 76, 79

# Requisition 
```
Run npm install
```

# Text 46 example
```
npm run test
```

# To Run 
Run the below command in the terminal 
```
node pinOrder.js
```
# To Test another pin
- Navigate inside pinOrder.js
- Enter the pin you want to test in line 50
- Run the node pinOrder.js command

