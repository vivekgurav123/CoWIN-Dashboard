// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props
  //   console.log(vaccinationCoverageData)

  return (
    <div>
      <h1>Vaccination by gender</h1>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGenderData}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#fecba6" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="Others" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
    </div>
  )
}

export default VaccinationByGender
