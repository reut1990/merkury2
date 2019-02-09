import React, { Component } from 'react'
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, YAxis } from 'recharts';
import './LineCharts.css'

class LineCharts extends Component {

    state = {
        data: [{ name: 'a', value: 100 , uv:120, pv:100},
        { name: 'b', value: 200, uv:150, pv:300 },
        { name: 'c', value: 300,  uv:420, pv:200 },
        { name: 'd', value: 400,  uv:350, pv:100 },
        { name: 'd', value: 500,  uv:600, pv:100 },
        { name: 'd', value: 600,  uv:500, pv:100 },
        { name: 'd', value: 700,  uv:300, pv:100 },
    ]
    }
    
    styleXAis={
        display:'none'
    }

   
    render() {

        return (
            <section className="lineCharts-container">
                <LineChart
                    width={565}
                    height={200}
                    data={this.state.data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >

                    <XAxis style={this.styleXAis}/>
                    <YAxis dataKey="value" />
                    <Tooltip />
                    <CartesianGrid stroke="#dadee7" />
                    <Line type="monotone" dataKey="uv" dot={false} strokeWidth={2} stroke="#5584ff" yAxisId={0} />
                </LineChart>
            </section>
        )
    }
}

export default LineCharts

