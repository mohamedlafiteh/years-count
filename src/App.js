import React from "react";
import Table from "./Table";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      clicked: false,
      work: null,
      workResultsInHours: null,
      workResultsInWeeks: null,
      workResultsInMonths: null,
      sleep: null,
      sleepResultsInHours: null,
      sleepResultsInWeeks: null,
      sleepResultsInMonths: null,
      eating: null,
      eatingResultsInHours: null,
      eatingResultsInWeeks: null,
      eatingResultsInMonths: null,
      tv: null,
      tvResultsInHours: null,
      tvResultsInWeeks: null,
      tvResultsInMonths: null,
      driving: null,
      drivingResultsInHours: null,
      drivingResultsInWeeks: null,
      drivingResultsInMonths: null,
      travelling: null,
      travellingResultsInHours: null,
      travellingResultsInWeeks: null,
      travellingResultsInMonths: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { work, sleep, eating, tv, driving, travelling } = this.state;
    const sum =
      Number(work) +
      Number(sleep) +
      Number(eating) +
      Number(tv) +
      Number(driving) +
      Number(travelling);

    if (sum > 24) {
      alert("a lot of hours entered, should be 24");
    } else if (sum < 24) {
      alert("less hours entered, should be 24");
    } else {
      // Count the hours you spend in a year doing things
      var extractWeekEndsFromTheYear = 12 * 20;
      var countHoursOfWorkInYear = work * extractWeekEndsFromTheYear * 30;
      var countHoursOfSleepInYear = sleep * 365 * 30;
      var countHoursOfEatInYear = eating * 365 * 30;
      var countHoursOfTvInYear = tv * 365 * 30;
      var countHoursOfDriveInYear = driving * 365 * 30;
      var countHoursOfTravelInYear = travelling * 30;

      // Count the weeks you spend in a year doing things

      var countWeeksOfWorkInYear = Math.ceil(countHoursOfWorkInYear / 120);
      var countWeeksOfSleepInYear = Math.ceil(countHoursOfSleepInYear / 168);
      var countWeeksOfEatInYear = Math.ceil(countHoursOfEatInYear / 168);
      var countWeeksOfTvInYear = Math.ceil(countHoursOfTvInYear / 168);
      var countWeeksOfDriveInYear = Math.ceil(countHoursOfDriveInYear / 168);
      var countWeeksOfTravelInYear = Math.ceil(countHoursOfTravelInYear / 168);

      //Count the months you spend in a year doing things

      var countMonthsOfWorkInYear = Math.ceil(countWeeksOfWorkInYear / 52);
      var countMonthsOfSleepInYear = Math.ceil(countWeeksOfSleepInYear / 52);
      var countMonthsOfEatInYear = Math.ceil(countWeeksOfEatInYear / 52);
      var countMonthsOfTvInYear = Math.ceil(countWeeksOfTvInYear / 52);
      var countMonthsOfDriveInYear = Math.ceil(countWeeksOfDriveInYear / 52);
      var countMonthsOfTravelInYear = Math.ceil(countWeeksOfTravelInYear / 52);
      this.setState({
        clicked: true,
        workResultsInHours: countHoursOfWorkInYear,
        workResultsInWeeks: countWeeksOfWorkInYear,
        workResultsInMonths: countMonthsOfWorkInYear,

        sleepResultsInHours: countHoursOfSleepInYear,
        sleepResultsInWeeks: countWeeksOfSleepInYear,
        sleepResultsInMonths: countMonthsOfSleepInYear,

        eatingResultsInHours: countHoursOfEatInYear,
        eatingResultsInWeeks: countWeeksOfEatInYear,
        eatingResultsInMonths: countMonthsOfEatInYear,

        tvResultsInHours: countHoursOfTvInYear,
        tvResultsInWeeks: countWeeksOfTvInYear,
        tvResultsInMonths: countMonthsOfTvInYear,

        drivingResultsInHours: countHoursOfDriveInYear,
        drivingResultsInWeeks: countWeeksOfDriveInYear,
        drivingResultsInMonths: countMonthsOfDriveInYear,

        travellingResultsInHours: countHoursOfTravelInYear,
        travellingResultsInWeeks: countWeeksOfTravelInYear,
        travellingResultsInMonths: countMonthsOfTravelInYear
      });
    }
  };
  render() {
    const { work, sleep, eating, tv, driving, travelling, age } = this.state;
    const {
      workResultsInHours,
      workResultsInWeeks,
      workResultsInMonths
    } = this.state;
    const {
      sleepResultsInHours,
      sleepResultsInWeeks,
      sleepResultsInMonths
    } = this.state;
    const {
      eatingResultsInHours,
      eatingResultsInWeeks,
      eatingResultsInMonths
    } = this.state;
    const {
      tvResultsInHours,
      tvResultsInWeeks,
      tvResultsInMonths
    } = this.state;
    const {
      drivingResultsInHours,
      drivingResultsInWeeks,
      drivingResultsInMonths
    } = this.state;
    const {
      travellingResultsInHours,
      travellingResultsInWeeks,
      travellingResultsInMonths
    } = this.state;

    return (
      <div className='App'>
        <div class='row'>
          <div class='col-md-4'>
            <div class='form-group'>
              {" "}
              <label for='form_name'>Firstname *</label>{" "}
              <input
                id='form_name'
                type='text'
                name='name'
                class='form-control'
                placeholder='Please enter your firstname *'
                required='required'
                data-error='Firstname is required.'
              />{" "}
            </div>
          </div>
          <div class='col-md-4'>
            <div class='form-group'>
              {" "}
              <label for='form_lastname'>Lastname *</label>{" "}
              <input
                id='form_lastname'
                type='text'
                name='surname'
                class='form-control'
                placeholder='Please enter your lastname *'
                required='required'
                data-error='Lastname is required.'
              />{" "}
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-4'>
            <div class='form-group'>
              {" "}
              <label for='form_name'>Firstname *</label>{" "}
              <input
                id='form_name'
                type='text'
                name='name'
                class='form-control'
                placeholder='Please enter your firstname *'
                required='required'
                data-error='Firstname is required.'
              />{" "}
            </div>
          </div>
          <div class='col-md-4'>
            <div class='form-group'>
              {" "}
              <label for='form_lastname'>Lastname *</label>{" "}
              <input
                id='form_lastname'
                type='text'
                name='surname'
                class='form-control'
                placeholder='Please enter your lastname *'
                required='required'
                data-error='Lastname is required.'
              />{" "}
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-4'>
            <div class='form-group'>
              {" "}
              <label for='form_name'>Firstname *</label>{" "}
              <input
                id='form_name'
                type='text'
                name='name'
                class='form-control'
                placeholder='Please enter your firstname *'
                required='required'
                data-error='Firstname is required.'
              />{" "}
            </div>
          </div>
          <div class='col-md-4'>
            <div class='form-group'>
              {" "}
              <label for='form_lastname'>Lastname *</label>{" "}
              <input
                id='form_lastname'
                type='text'
                name='surname'
                class='form-control'
                placeholder='Please enter your lastname *'
                required='required'
                data-error='Lastname is required.'
              />{" "}
            </div>
          </div>
        </div>
        <div>
          {!this.state.clicked ? (
            <form>
              <p>Enter Your Age</p>
              <input
                type='number'
                name='age'
                value={age}
                onChange={this.handleChange}
              />
              <p>Enter the work hours a day</p>
              <input
                type='number'
                name='work'
                value={work}
                onChange={this.handleChange}
              />

              <p>Enter the sleep hours a day</p>
              <input
                type='number'
                name='sleep'
                value={sleep}
                onChange={this.handleChange}
              />

              <p>Enter the eating hours a day</p>
              <input
                type='number'
                name='eating'
                value={eating}
                onChange={this.handleChange}
              />

              <p>Enter the watching tv hours a day</p>
              <input
                type='number'
                name='tv'
                value={tv}
                onChange={this.handleChange}
              />

              <p>Enter the driving hours a day</p>
              <input
                type='number'
                name='driving'
                value={driving}
                onChange={this.handleChange}
              />

              <p>Enter the travelling hours a day</p>
              <input
                type='number'
                name='travelling'
                value={travelling}
                onChange={this.handleChange}
              />

              <br />
              <br />
              <button onClick={this.handleSubmit}>Count the years</button>
            </form>
          ) : (
            <Table
              age={age}
              workResultsInHours={workResultsInHours}
              workResultsInWeeks={workResultsInWeeks}
              workResultsInMonths={workResultsInMonths}
              sleepResultsInHours={sleepResultsInHours}
              sleepResultsInWeeks={sleepResultsInWeeks}
              sleepResultsInMonths={sleepResultsInMonths}
              eatingResultsInHours={eatingResultsInHours}
              eatingResultsInWeeks={eatingResultsInWeeks}
              eatingResultsInMonths={eatingResultsInMonths}
              tvResultsInHours={tvResultsInHours}
              tvResultsInWeeks={tvResultsInWeeks}
              tvResultsInMonths={tvResultsInMonths}
              drivingResultsInHours={drivingResultsInHours}
              drivingResultsInWeeks={drivingResultsInWeeks}
              drivingResultsInMonths={drivingResultsInMonths}
              travellingResultsInHours={travellingResultsInHours}
              travellingResultsInWeeks={travellingResultsInWeeks}
              travellingResultsInMonths={travellingResultsInMonths}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

// var oneYear = 1;
// var months = 12;
// var weeks = 52;
// var days = 365;
// var hours = 8760;
// var minutes = 525600;

// var hour = 60;
// var day = 24;
// var week = 7;
// var month = 30;
// var year = 12;

// var hoursWork = 8;
// var hoursSleep = 9;
// var hoursEat = 3;
// var hoursWatchTv = 3;
// var hoursDrive = 1;
// var hoursTravel = 5;

// function results(
//   age,
//   hoursWork,
//   hoursSleep,
//   hoursEat,
//   hoursWatchTv,
//   hoursDrive,
//   hoursTravel
// ) {
//   var ageInMinutes = age * 525600;
//   var ageInHours = age * 8760;
//   var ageInDays = age * 365;
//   var ageInWeeks = age * 52;
//   var ageInMonths = age * 12;

//   //Count the hours you spend in a year doing things

//   var extractWeekEndsFromTheYear = year * 20;
//   var countHoursOfWorkInYear = hoursWork * extractWeekEndsFromTheYear * 30;
//   var countHoursOfSleepInYear = hoursSleep * days * 30;
//   var countHoursOfEatInYear = hoursEat * days * 30;
//   var countHoursOfTvInYear = hoursWatchTv * days * 30;
//   var countHoursOfDriveInYear = hoursDrive * days * 30;
//   var countHoursOfTravelInYear = hoursTravel * 30;

//   //Count the weeks you spend in a year doing things
//   var countWeeksOfWorkInYear = countHoursOfWorkInYear / 120;
//   var countWeeksOfSleepInYear = countHoursOfSleepInYear / 168;
//   var countWeeksOfEatInYear = countHoursOfEatInYear / 168;
//   var countWeeksOfTvInYear = countHoursOfTvInYear / 168;
//   var countWeeksOfDriveInYear = countHoursOfDriveInYear / 168;
//   var countWeeksOfTravelInYear = countHoursOfTravelInYear / 168;

//   //Count the months you spend in a year doing things

//   var countMonthsOfWorkInYear = countWeeksOfWorkInYear / 52;
//   var countMonthsOfSleepInYear = countWeeksOfSleepInYear / 52;
//   var countMonthsOfEatInYear = countWeeksOfEatInYear / 52;
//   var countMonthsOfTvInYear = countWeeksOfTvInYear / 52;
//   var countMonthsOfDriveInYear = countWeeksOfDriveInYear / 52;
//   var countMonthsOfTravelInYear = countWeeksOfTravelInYear / 52;
// }

// var age = 30;
// var hoursWork = 8;
// var hoursSleep = 9;
// var hoursEat = 3;
// var hoursWatchTv = 3;
// var hoursDrive = 1;
// var hoursTravel = 20;

// console.log(
//   results(
//     age,
//     hoursWork,
//     hoursSleep,
//     hoursEat,
//     hoursWatchTv,
//     hoursDrive,
//     hoursTravel
//   )
// );
