const arr = ['a','b'];
const temp = arr[0]; //temp = 'a'; arr = ['a', 'b'];
arr[0] = arr[1] // temp = 'a'; arr = ['b', 'b']
arr[1] = temp; // temp = 'a'; arr = ['b', 'a']