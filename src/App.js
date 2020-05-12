import React from "react";
import Table from "./Table";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      travellingResultsInMonths: null,
      ageInMinutes: null,
      ageInMinutes: null,
      ageInHours: null,
      ageInDays: null,
      ageInWeeks: null,
      ageInMonths: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      work,
      sleep,
      eating,
      tv,
      driving,
      travelling,
      age,
      name
    } = this.state;
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

      //you age in minutes, hours, weeks and months
      var ageInMinutes = age * 525600;
      var ageInHours = age * 8760;
      var ageInDays = age * 365;
      var ageInWeeks = age * 52;
      var ageInMonths = age * 12;

      this.setState({
        name: name,
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
        travellingResultsInMonths: countMonthsOfTravelInYear,

        ageInMinutes: ageInMinutes,
        ageInHours: ageInHours,
        ageInDays: ageInDays,
        ageInWeeks: ageInWeeks,
        ageInMonths: ageInMonths
      });
    }
  };
  render() {
    const {
      work,
      sleep,
      eating,
      tv,
      driving,
      travelling,
      age,
      message,
      name
    } = this.state;
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

    const {
      ageInMinutes,
      ageInHours,
      ageInDays,
      ageInWeeks,
      ageInMonths
    } = this.state;

    return (
      <div className='App'>
        <div>
          {!this.state.clicked ? (
            <form>
              <div className='all'>
                <label for='age'>Age</label>{" "}
                <input
                  id='age'
                  type='number'
                  name='age'
                  value={age}
                  onChange={this.handleChange}
                  className='age'
                  placeholder='Please enter your age'
                  required='required'
                  data-error='age is required.'
                />
                <label className='name-label' for='name'>
                  Name
                </label>{" "}
                <input
                  id='name'
                  type='text'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  className='name'
                  placeholder='Please enter your name '
                  required='required'
                  data-error='age is required.'
                />
                <div className='other'>
                  <div class='row '>
                    <div class='col-md-4'>
                      <div class='form-group'>
                        {" "}
                        <label for='work'>Work Hours</label>{" "}
                        <input
                          id='work'
                          type='number'
                          name='work'
                          value={work}
                          onChange={this.handleChange}
                          class='form-control'
                          placeholder='Please enter your work hours *'
                          required='required'
                          data-error='work hours are required.'
                        />{" "}
                      </div>
                    </div>
                    <div class='col-md-4'>
                      <div class='form-group'>
                        {" "}
                        <label for='sleep'>Sleep Hours</label>{" "}
                        <input
                          id='sleep'
                          type='number'
                          name='sleep'
                          value={sleep}
                          onChange={this.handleChange}
                          class='form-control'
                          placeholder='Please enter your sleep hours *'
                          required='required'
                          data-error='sleep hours are required.'
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-4'>
                      <div class='form-group'>
                        {" "}
                        <label for='eating'>Eat Hours</label>{" "}
                        <input
                          id='eating'
                          type='number'
                          name='eating'
                          value={eating}
                          onChange={this.handleChange}
                          class='form-control'
                          placeholder='Please enter your eating hours *'
                          required='required'
                          data-error='eating hours are required.'
                        />{" "}
                      </div>
                    </div>
                    <div class='col-md-4'>
                      <div class='form-group'>
                        {" "}
                        <label for='tv'>Tv Hours</label>{" "}
                        <input
                          id='tv'
                          type='number'
                          name='tv'
                          value={tv}
                          onChange={this.handleChange}
                          class='form-control'
                          placeholder='Please enter your Tv hours *'
                          required='required'
                          data-error='Tv hours are required.'
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-4'>
                      <div class='form-group'>
                        {" "}
                        <label for='driving'>Drive Hours </label>{" "}
                        <input
                          id='driving'
                          type='number'
                          name='driving'
                          value={driving}
                          onChange={this.handleChange}
                          class='form-control'
                          placeholder='Please enter your driving hours *'
                          required='required'
                          data-error='driving hours are required.'
                        />{" "}
                      </div>
                    </div>
                    <div class='col-md-4'>
                      <div class='form-group'>
                        {" "}
                        <label for='travelling'>Travel Hours</label>{" "}
                        <input
                          id='travelling'
                          type='number'
                          name='travelling'
                          value={travelling}
                          onChange={this.handleChange}
                          class='form-control'
                          placeholder='Please enter your travelling hours *'
                          required='required'
                          data-error='travelling hours are required.'
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <button className='button' onClick={this.handleSubmit}>
                  Count the years
                </button>
              </div>{" "}
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
              ageInMinutes={ageInMinutes}
              ageInHours={ageInHours}
              ageInDays={ageInDays}
              ageInWeeks={ageInWeeks}
              ageInMonths={ageInMonths}
              name={name}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
