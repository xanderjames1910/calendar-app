import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'moment/locale/es-us';

import moment from 'moment';
// import { range } from 'moment-range';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import MaterialIcon from 'material-icons-react';

class Calendar extends Component {
  weekdayshort = moment.weekdaysShort();

  state = {
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: null,
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  year = () => {
    return this.state.dateObject.format('Y');
  };

  currentDay = () => {
    return this.state.dateObject.format('D');
  };

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf('month')
      .format('d');
    return firstDay;
  };

  month = () => {
    return this.state.dateObject.format('MMMM');
  };

  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable,
    });
  };

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable,
    });
  };

  MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className='btn-light align-middle'
          style={{ cursor: 'pointer', height: 70 }}
          onClick={e => {
            this.setMonth(data);
          }}>
          <span>{data}</span>
        </td>,
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className='text-center table-full'>
        <thead>
          <tr>
            <th colSpan='4'>Seleccione un Mes</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };

  showYearTable = e => {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showDateTable: !this.state.showDateTable,
    });
  };

  onPrev = () => {
    let curr = '';
    if (this.state.showYearTable === true) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
    });
  };

  onNext = () => {
    let curr = '';
    if (this.state.showYearTable === true) {
      curr = 'year';
    } else {
      curr = 'month';
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
    });
  };

  setYear = year => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('year', year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearTable: !this.state.showYearTable,
    });
  };

  onYearChange = e => {
    this.setYear(e.target.value);
  };

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY'));
      currentDate = moment(currentDate).add(1, 'year');
    }
    return dateArray;
  }

  YearTable = props => {
    let months = [];
    let nextten = moment()
      .set('year', props)
      .add('year', 12)
      .format('Y');

    let tenyear = this.getDates(props, nextten);

    tenyear.map(data => {
      months.push(
        <td
          key={data}
          className=''
          onClick={e => {
            this.setYear(data);
          }}>
          <span>{data}</span>
        </td>,
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className='text-center table-full'>
        <thead>
          <tr>
            <th colSpan='4'>Seleccione un Año</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };

  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d,
      },
      () => {
        console.log('DIA SELECCIONADO: ', this.state.selectedDay);
        this.props.history.push('/view-day/');
      },
    );
  };

  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className=''>{''}</td>);
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d === this.currentDay() ? 'today' : '';
      daysInMonth.push(
        <td key={d} className='btn-light align-middle' style={{ cursor: 'pointer', height: 70 }}>
          <span
            onClick={e => {
              this.onDayClick(e, d);
            }}>
            {d}
          </span>
        </td>,
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <Card className='p-4 shadow-sm' style={{ borderRadius: 15, width: 650 }}>
              <div>
                <Card.Header className='text-center bg-header'>
                  <div className='container justify-content-center'>
                    <div className='row'>
                      <div className='col'>
                        <Button
                          variant='primary'
                          onClick={e => {
                            this.onPrev();
                          }}
                          className='btn btn-primary'
                          style={{ cursor: 'pointer' }}>
                          <MaterialIcon icon='arrow_back' color='#fff' />
                        </Button>
                      </div>
                      <div className='col'>
                        {!this.state.showMonthTable && (
                          <span
                            onClick={e => {
                              this.showMonth();
                            }}
                            className='btn btn-primary'
                            style={{ cursor: 'pointer' }}>
                            {this.month()}
                          </span>
                        )}
                      </div>
                      <div className='col'>
                        <Button variant='primary' onClick={e => this.showYearTable()}>
                          {this.year()}
                        </Button>
                      </div>
                      <div className='col'>
                        <Button
                          variant='primary'
                          onClick={e => {
                            this.onNext();
                          }}
                          className='btn btn-primary inline-block align-middle'>
                          <MaterialIcon icon='arrow_forward' color='#fff' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Header>
              </div>

              <Table responsive className='table-bordered text-center mb-0'>
                {this.state.showYearTable && <this.YearTable props={this.year()} />}
                {this.state.showMonthTable && <this.MonthList data={moment.months()} />}
              </Table>
              {this.state.showDateTable && (
                <div>
                  <Table responsive className='table-bordered text-center mb-0'>
                    <thead>{weekdayshortname}</thead>
                    <tbody>{daysinmonth}</tbody>
                  </Table>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
