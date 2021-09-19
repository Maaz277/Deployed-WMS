import {Bar} from 'react-chartjs-2'

export default function BarGraph(props){
    return(
        <div style = {{width: '50%'}}>
            <Bar
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
                }}
                options = {{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
                height = {400}
            />
        </div>
    );
}

