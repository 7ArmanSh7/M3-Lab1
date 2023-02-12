//Question-1
console.log("\nQuestion 1\n");
var favMovies = ["The Godfather", "Harry Potter", "The matrix", "Lord of the rings", "Spider man"];
console.log(favMovies[1]);
//Question-2
console.log("\nQuestion 2\n");
var favMovies2 = new Array(5);
for(var i=0; i<5;i++){
	favMovies2[i] = favMovies[i];
}
console.log(favMovies2[0]);

//Question-3
console.log("\nQuestion 3\n");
var favMovies3 = new Array(5);
for(var i=0; i<5;i++){
	favMovies3[i] = favMovies[i];
}

favMovies3.splice(2, 0, "Taken");
console.log(favMovies3.length);

//Question-4
console.log("\nQuestion 4\n");
var favMovies4 = [];
for(var i=0; i<5;i++){
	favMovies4[i] = favMovies[i];
}
delete favMovies4[0] 
console.log(favMovies4);

//Question-5
console.log("\nQuestion 5\n");
var favMovies5 = [];
for(var i=0; i<5;i++){
	favMovies5[i] = favMovies[i];
}
favMovies5[5] = "Taken";
favMovies5[6] = "Avatar";
for(var index in favMovies5){
	console.log(favMovies5[index]);
}
//Question-6
console.log("\nQuestion 6\n");
var favMovies6 = [];
for(var i=0; i<5;i++){
	favMovies6[i] = favMovies[i];
}
favMovies6[5] = "Taken";
favMovies6[6] = "Avatar";
for(var movie of favMovies6){
	console.log(movie);
}

//Question-7
console.log("\nQuestion 7\n");
var favMovies7 = [];
for(var i=0; i<5;i++){
	favMovies7[i] = favMovies[i];
}
favMovies7[5] = "Taken";
favMovies7[6] = "Avatar";
favMovies7.sort();
for(var movie of favMovies7){
	console.log(movie);
}
//Question-8
console.log("\nQuestion 8\n");
console.log("\nMovies I like\n\n");
for(var movie of favMovies6){
	console.log(movie);
}
var leastFavMovies = [];
leastFavMovies[0] = "The Nun";
leastFavMovies[1] = "Black Phone";
leastFavMovies[2] = "Thor:Love and Thunder";
console.log("\nMovies I regret watching\n\n");
for(var movie of leastFavMovies){
	console.log(movie);
}

//Question-9
console.log("\nQuestion 9\n");
var leastFavMovies2 = [];
leastFavMovies2[0] = "The Nun";
leastFavMovies2[1] = "Black Phone";
leastFavMovies2[2] = "Thor:Love and Thunder";
var movies = favMovies6.concat(leastFavMovies2);
movies = movies.sort().reverse();
console.log("\nList of movies I like and Regret watching\n\n");
for(var movie of movies){
	console.log(movie);
}

//Question-10
console.log("\nQuestion 10\n");
const getLastMovieName = (movies)=>{
	return movies2.pop();
}
var leastFavMovies3 = [];
leastFavMovies3[0] = "The Nun";
leastFavMovies3[1] = "Black Phone";
leastFavMovies3[2] = "Thor:Love and Thunder";
var movies2 = favMovies6.concat(leastFavMovies3);
movies2 = movies2.sort().reverse();
console.log("\nLast element of combined list in soreted reverse order\n");
console.log(getLastMovieName(movies2));

//Question-11
console.log("\nQuestion 11\n");
const getFirstMovieName = (movies)=>{
	return movies2.shift();
}
var leastFavMovies3 = [];
leastFavMovies3[0] = "The Nun";
leastFavMovies3[1] = "Black Phone";
leastFavMovies3[2] = "Thor:Love and Thunder";
var movies3 = favMovies6.concat(leastFavMovies3);
movies3 = movies3.sort().reverse();
console.log("\nFirst element of combined list in soreted reverse order\n");
console.log(getFirstMovieName(movies3));

//Question-12
const getIndecies=(leastFavMovies,  movies )=>{
	var placement =[]
	var i = 0;
	for(var index in movies){
		if(leastFavMovies.includes(movies[index])){
			placement[i] = index;
			i++;
		}
	}
	return placement;
}
console.log("\nQuestion 12\n");
console.log("\nMovies before the change\n\n");
for(var m of movies3){
		console.log(m+"\n");
}

console.log("\nMovies after the change\n");
var indeciesA = getIndecies(leastFavMovies3, movies3);
var remainingFavMovies = ["Taken 2", "Taken 3", "Avengers"];
var a =0;
for(var i=0; i<indeciesA.length;i++){
		if(a<remainingFavMovies.length){
			movies3[indeciesA[i]] = remainingFavMovies[a];
			a++;
		}
}
for(var m of movies3){
		console.log(m+"\n");
}
//Question-13
console.log("\nQuestion 13\n");
movies = [["The Godfather", 1], ["Harry Potter", 2], ["The matrix", 3], ["Lord of the rings", 4], ["Spider man", 5]];
movieNames = []
for(var movie of movies){
		movieNames.push(movie.filter((m)=> typeof m == "string"));
}
for(var movieName of movieNames){
		console.log(movieName+"\n");
}
//Question-14
console.log("\nQuestion 14\n");
const displayEmployees=(employeesNames)=>{
	console.log("\nEmplyees:\n\n");
	for(var employee of employeesNames){
		console.log(employee+"\n");
	}
}
var employees =["ZAK","JESSICA","MARK","FRED","SALLY"]
displayEmployees(employees); 

//Question-15
console.log("\nQuestion 15\n");
const filterValues=(array )=>{
	filteredArray = array.filter((elem)=>{
		return elem;
	});
	return filteredArray;
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//Question-16
console.log("\nQuestion 16\n");
const radnomItem=(array)=>{
	
	var randomIndex = Math.floor(Math.random()*(array.length));
	return array[randomIndex];
}
console.log(radnomItem([58, 'a', 'b', "c", "h", "Z", "d"]));

//Question-17
console.log("\nQuestion 17\n");
const largestNum = (arrayNum)=>{
	
	return Math.max(...arrayNum);
}
console.log(largestNum([58, 985,372,12,0,-5]));