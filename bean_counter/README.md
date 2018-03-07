# Problem

Given an array of strings determine all the unique words within the array and how many times they occur

## Input Format

The input denotes the array of strings which can be mixed case.

## Output Format

A comma seperated string that contains each unique word and its count the words should be sorted in alphabetical order.

### Sample Input

```
['Cannellini', 'baked', 'cannellini', 'kidney']
```

### Sample Output

```
'baked 1, cannellini 2, kidney 1'
```

## Explanation

`baked` and `kidney` only appear once in the array so their count is 1. Cannellini appears twice in the array, albeit with mixed case but as it is the same word `Cannellini` and `cannellini` are considered equal so the count is 2.

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