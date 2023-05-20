// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'

import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pending: 'PENDING',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    fetchedData: {},
    displayStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.covidVaccinationDataApiUrl()
  }

  covidVaccinationDataApiUrl = async () => {
    this.setState({
      displayStatus: apiStatus.pending,
    })
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const convertData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        fetchedData: convertData,
        displayStatus: apiStatus.success,
      })
    } else {
      this.setState({
        displayStatus: apiStatus.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {fetchedData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = fetchedData

    return (
      <>
        <VaccinationCoverage vaccinationCoverageData={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGenderData={vaccinationByGender} />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
          alt="failure view"
        />
        <h1>Something went wrong</h1>
      </div>
    </>
  )

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSwitchViews = () => {
    const {displayStatus} = this.state
    switch (displayStatus) {
      case apiStatus.pending:
        return this.renderLoaderView()
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p>Co-WIN</p>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        <div>{this.renderSwitchViews()}</div>
      </div>
    )
  }
}

export default CowinDashboard
