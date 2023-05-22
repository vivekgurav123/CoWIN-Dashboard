// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend
} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationCoverageData} = props
  //   console.log(vaccinationCoverageData)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div>
      <h1>Vaccination Coverage</h1>
          <BarChart
            data={vaccinationCoverageData}
            margin={{
              top: 5,
            }} width={1000} height={300}
          >
            <XAxis
              dataKey="vaccine_date"
              tick={{
                stroke: 'gray',
                strokeWidth: 1,
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: 'gray',
                strokeWidth: 0,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="dose_1" name="Dose 1" fill="#2d87bb" barSize="20%" />
            <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
          </BarChart>
    </div>
  )
}

export default VaccinationCoverage
