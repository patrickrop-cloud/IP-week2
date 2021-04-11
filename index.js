function submitFunction(){
      var enteredDate = validateDate();
      var enteredMonth=validateMonth();
      var enteredYear= validateYear();
      var enteredGender = validateGender();
      var calcutedDay = calcDayOfWeek(enteredDate,enteredMonth,enteredYear);
      var deterNameCalculated = determineName(enteredGender,calcutedDay);
      alert("Your Akan Name is " + deterNameCalculated);
  }
  function validateDate(){
      var date = document.getElementById("Date").value;
      if (date) {
          if (date>=1 && date<=31) {
              return date;
          }else{
              alert("date should be 1-31");
          }
      }else{
          alert("please enter date")
      }
  }
  function validateMonth(){
      var month = document.getElementById("Month").value;
      if (month) {
          if (month>=1 && month<=12) {
              return month;
          }else{
              alert("month should be 1-12");
          }
      }else{
          alert("please enter month")
      }
  }
  function validateYear(){
      var year = document.getElementById("Year").value;
      if (year) {
          if (year>=1000 && year<=9999) {
              return year;
          }else{
              alert("year should be a four digit in the format xxxx");
          }
      }else{
          alert("please enter year")
      }
  }
  function validateGender(){
      var gender = document.getElementById("mygender").value;
      if (gender) {
          if (gender=="male" || gender=="female") {
              return gender;
          }else{
              alert("gender should be either male or female");
          }
      }else{
          alert("please enter the gender")
      }
  }
  function calcDayOfWeek(day,month,year){
      var DD = day;
      var MM = month;
      var YY = parseInt(String(year).slice(2,4));
      var CC = parseInt(String(year).slice(0,2));
      var dayOfWeek = Math.round( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
      var dayPerIndex=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
      var indexOfDay=dayOfWeek-1;
      var nameOfDay=dayPerIndex[indexOfDay];
      return nameOfDay;
