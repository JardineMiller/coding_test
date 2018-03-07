# Problem

Given a square matrix of a fixed size, calculate the absolute difference between the sums of its diagonals. The matrix can be of size 3x3, 6x6, 9x9 and so on.

## Input Format

The input denote the matrix in array multi dimensional array format. 

**Numbers within the matrix can be positive or negative**.

## Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

### Sample Input

```
[
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]
```

### Sample Output

```
15
```

## Explanation

The primary diagonal is:

```
11
   5
     -12
```

Sum across the primary diagonal: `11 + 5 - 12 = 4`

The secondary diagonal is:

```
     4
   5
10
```

Sum across the secondary diagonal: `4 + 5 + 10 = 19`

Difference: `|4 - 19| = 15`

Note: `|x|` is an [absolute value](https://www.mathsisfun.com/definitions/absolute-value.html)

## Included Files

**Note all included file tests fail on first run**

### problem.js

Scaffold for the solution in JS (node), version used creating the scaffold was LTS 8.9.4. 

It uses the [assert module](https://nodejs.org/api/assert.html). 

**NB:** `assert` does not log any output if there are no errors, so generally seeing no output means all pass.
Suggest you run the test with `node problem.js && echo "PASS" || echo "FAIL"`

## problem.rb

Scaffold for the solution in Ruby, version used creating the scaffold was 2.5.0.

It uses [minitest](https://github.com/seattlerb/minitest). To run the tests `ruby problem.rb`