import {Doughnut} from 'react-chartjs-2'
import { Ticks } from 'chart.js';

export default function PieChart(props){
    return(
        <div>
            <Doughnut
                data = {{
                    labels: props.labels,
                    datasets: [{
                        label: `${props.label} count`,
                        data: props.data,
                        backgroundColor: [
                            'green',
                            'red',
                            'blue',
                        ],
                    }],
                    hoverOffset: 4,
                }}
            />
        </div>
    );
}