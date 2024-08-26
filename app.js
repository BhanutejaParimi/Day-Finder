alert("Hi,Welcome to my page...")
function calculateDayOfWeek(date, month, year) {
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const month_cal = Math.floor((13 * (month + 1)) / 5);
    const year_cal_1 = year % 100;
    const year_cal_2 = Math.floor(year / 100);
    const day = (date + month_cal + year_cal_1 + Math.floor(year_cal_1 / 4) + Math.floor(year_cal_2 / 4) + 5 * year_cal_2) % 7;

    return days[day];
}

function getDayOfWeek() {
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if(date=="" || month=="" || year==""){
        alert("Enter valid details");
    }
    else{
        let dayOfWeek = calculateDayOfWeek(parseInt(date), parseInt(month), parseInt(year));
        alert("The day is:" + dayOfWeek);
        document.getElementById("date").value=null;
        document.getElementById("month").value=null;
        document.getElementById("year").value=null;
    }
}