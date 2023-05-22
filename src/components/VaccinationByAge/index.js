// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props
  //   console.log(vaccinationCoverageData)

  return (
    <div>
      <h1>Vaccination by age</h1>
          <PieChart width={1000} height={300}>
            <Pie
              cx="50%"
              cy="50%"
              data={vaccinationByAgeData}
              startAngle={0}
              endAngle={360}
              //   innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#f54394" />
              <Cell name="44-60" fill="#5a8dee" />
              <Cell name="Above 60" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                padding: 10,
              }}
            />
          </PieChart>
    </div>
  )
}

export default VaccinationByAge
