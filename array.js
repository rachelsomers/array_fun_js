//create an array
//an empty array
var myArr = new Array()

//prefered way to make array
var myArr2 = [ ]

//create an array of a certian size
var myBigArr = new Array(100)

var myBigArr2 = [,,,,,]
var myBigArr3 = [1,2,3,4,5,17]

//give us the size of the array
//array.length
var array = []
array.length = 8

//position of items in the array
//index
var superArr = ["hanibal", "face", "murdoc"]
//0 base, starts at zero
// hanibal-1 face-2 murdoc-3

//get a value with the index
superArr[1]

//insert in the array
var supArr = []

supArr.push("Kirk", "Spock", "scotty")

//it will add the items into the begining of an array
supArr.unshift(1, 2, true)

//remove
//mutable vs immutable
//mutable are items that can be changed
//immutable are items that can not be changed

var sArr = [1, 2, 3]

//pop removes the last element of the array and returns it, mutable
sArr.pop

//shift removes the first element of the array, mutable
sArr.shift

//mutable
delete sArr[2]

//Immutable
sArr.slice(20)

//iterate, going through an array, loops
var nums = [1, 2, 3, 4, 5]

//for each
nums.forEach(function(num, index){
  console.log("index of:" + index + " values:" + num)
})

//map
nums.map(function(num, index) {
  console.log(num++)
})

//filter
nums.filter(function(num, index) {
  console.log(num % 2 == 0)
})

['s', 23, 23.2, true, false].filter(boolean)

//for
for (var index = 0; index <nums.length; index++) {
  console.log(num[index])
}



//type checking
// checks for what data type is something
typeof []
typeof 0
typeof true
typeof "String"
typeof 1.23


//misc functions
var lastArr = ['no', 'yes', 'maybe']
//toString returns a string of what the array looks like
lastArr.toString

//puts two values together
lastArr.join()

//reverses the array
lastArr.reverse

//puts the items in order, strings-ascending, numbers and floats- <>
lastArr.sort()

//search the array
lastArr.find()

//tell the index of the value
lastArr.indexOf()

//boolean on if the array includes a value
lastArr.includes()

//combine arrays
lastArr.concat()


