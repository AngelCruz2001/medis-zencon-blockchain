import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const data = {
    lastMonth: 20,
    thisMonth: 25,
};

const labels = ["March", "April", "May", "June", "July", "August", "September"]

const DoctorPatientChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
                data: {
                    labels,
                    datasets: [{
                        label: 'Patients per month',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    }]

                }
            });
        };
    }, []);

    return <canvas ref={chartRef} />;
}
export default DoctorPatientChart;



