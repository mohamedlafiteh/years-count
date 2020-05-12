import React, { Component } from "react";

export class Table extends Component {
  render() {
    const {
      age,
      workResultsInHours,
      workResultsInWeeks,
      workResultsInMonths
    } = this.props;
    const {
      sleepResultsInHours,
      sleepResultsInWeeks,
      sleepResultsInMonths
    } = this.props;
    const {
      eatingResultsInHours,
      eatingResultsInWeeks,
      eatingResultsInMonths
    } = this.props;
    const {
      tvResultsInHours,
      tvResultsInWeeks,
      tvResultsInMonths
    } = this.props;
    const {
      drivingResultsInHours,
      drivingResultsInWeeks,
      drivingResultsInMonths
    } = this.props;
    const {
      travellingResultsInHours,
      travellingResultsInWeeks,
      travellingResultsInMonths
    } = this.props;
    return (
      <form>
        <table
          id='example'
          class='table table-striped table-bordered'
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Your Age</th>
              <th>Activity</th>
              <th>Amount of Hours of Your Life</th>
              <th>Amount of Weeks of Your Life</th>
              <th>Amount of Months of Your Life</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{age}</td>
              <td>Work</td>
              <td>{workResultsInHours}</td>
              <td>{workResultsInWeeks} </td>
              <td>{workResultsInMonths} </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Sleep</td>
              <td>{sleepResultsInHours}</td>
              <td>{sleepResultsInWeeks} </td>
              <td>{sleepResultsInMonths} </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Eating</td>
              <td>{eatingResultsInHours}</td>
              <td>{eatingResultsInWeeks} </td>
              <td>{eatingResultsInMonths} </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Watching Tv</td>
              <td>{tvResultsInHours}</td>
              <td>{tvResultsInWeeks} </td>
              <td>{tvResultsInMonths} </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Driving</td>
              <td>{drivingResultsInHours}</td>
              <td>{drivingResultsInWeeks} </td>
              <td>{drivingResultsInMonths} </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Travelling</td>
              <td>{travellingResultsInHours}</td>
              <td>{travellingResultsInWeeks} </td>
              <td>{travellingResultsInMonths} </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default Table;
