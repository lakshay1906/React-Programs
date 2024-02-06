// // let input_date = document.getElementById('date');
// // let btn = document.querySelector('button');
// // let bday = document.getElementById('bday');
// // let h2 = document.querySelector('h2');

// // //      Today's date
// // let current_date = new Date();
// // console.log(current_date);

// // let input = input_data.valueAsDate;

// // btn.addEventListener('click',()=>{
// //     console.log(input);
// //     if(input==null){
// //         alert("You haven't entered the date.");
// //     }
// //     else{
    
// //         let year_left = current_date.getFullYear()-input.getFullYear();

// //         let month_left = current_date.getMonth()-input.getMonth();
// //         let day_left = current_date.getDate()-input.getDate();
// //         if(current_date.getDate()<input.getDate()){
// //             year_left--;
// //         }
// //         if(current_date.getMonth()===input.getMonth() && current_date.getDate()===input.getDate()){
// //             bday.innerText = 'Congratulations Its Your Birthday....HAPPY BIRTHDAY';
// //             h2.innerText = `You are ${year_left} years ${month_left} months ${day_left} days old`;
// //         }
// //         else{
// //             h2.innerText = `You are ${year_left} years ${month_left} months ${day_left} days old`;

// //         }
// //     }
// // })

// let currentDate = new Date(2023,10,23);
// let dob = new Date(2012,5,12);

// let currentTime = currentDate.getTime();
// let dobTime = dob.getTime();
// let gap = currentDate-dobTime;
// console.log(currentTime);
// console.log(dobTime);
// let actDate = new Date(gap);
// console.log(actDate);
// console.log(currentDate.toDateString());

// Define funtion to get calculated Age 
function getDOB() { 

	// Getting input from html input element 
	let data = 
		document.getElementById("inputDob").value; 

	// Convert input data to usable format 
	// as day,month and year 
	let dob = new Date(data); 
	let day = dob.getDate(); 
	let month = dob.getMonth(); 
	let year = dob.getFullYear(); 

	// Getting current date and calculating the difference 
	let now = 
		new Date(document.getElementById("cdate").value); 
	console.log(now); 
	let yearDiff = now.getFullYear() - year; 
	let monthDiff = now.getMonth() - month; 
	let dateDiff = now.getDate() - day; 

	// Calculating the Age 
	if (yearDiff < 0){
		console.log("invalid date");
	} 
	else if (monthDiff > 0) { 
		console.log(yearDiff); 
	}
	else if (monthDiff === 0 && dateDiff >= 0) { 
		console.log(yearDiff); 
	}
	else { 
		yearDiff = yearDiff - 1; 
		if (monthDiff <= 0){
			if (dateDiff > 0){
				monthDiff = 12 + monthDiff;
			}
			else{
				monthDiff = 11 - monthDiff;	
			}

		}
	} 
	if (dateDiff < 0) { 
		dateDiff = 30 + dateDiff; 
		monthDiff -= 1; 
	} 

	// Show calculated age as output 
	// and invalid if wrong input is given 
	if (yearDiff < 0) 
		document.getElementById("currentAge").innerHTML = "Invalid Date"; 
	else
		document.getElementById("currentAge").innerHTML = 
			"Your current Age is " + yearDiff + " years "
			+ monthDiff + " months " + dateDiff + " days"; 
} 

// Function to provide default date value 
function currentDate() { 
	console.log(formatted()); 
	let d = document.getElementById("cdate"); 
	d.value = formatted(); 
} 

function formatted(date = new Date()) { 
	return [ 
		date.getFullYear(), 
		short(date.getMonth() + 1), 
		short(date.getDate()), 
	].join("-"); 
} 
function short(num) { 
	return num.toString().padStart(2, "0"); 
} 

// Calling current date function to set default date value 
currentDate();
