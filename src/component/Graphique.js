import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Graphique (props) {
  const {data} = props;
  const liste = data.map((h) => ({
    heartrate : h.heartrate,
    heure : new Date(h.timestamp).toLocaleTimeString('fr-FR'),
  }))
    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={300}
          data={liste}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="heure" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="heartrate" stroke="black" />
        </LineChart>
      </ResponsiveContainer>
    );
}
export default Graphique