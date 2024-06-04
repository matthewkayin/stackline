import '../../../../styles/global.css';
import { 
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler
} from 'chart.js'; 
import { Scatter } from 'react-chartjs-2';
import { ProductSale } from '../../../../types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler
);

export type GraphProps = {
    sales: ProductSale[];
};

export const Graph: React.FunctionComponent<GraphProps> = (props: GraphProps) => {
    const sorted_sales = props.sales.sort((a: ProductSale, b: ProductSale) => new Date(a.weekEnding).getTime() - new Date(b.weekEnding).getTime());

    // Convert all dates into x axis values
    const dates_as_numbers: number[] = sorted_sales.map((sale: ProductSale) => {
        const date = new Date(sale.weekEnding);
        return (date.getFullYear() * 12) + (date.getMonth()) + (date.getDate() / 31);
    });
    // Normalize the data so that the smallest point becomes point 0 on the x axis
    const graph_x_values = dates_as_numbers.map((date: number) => date - dates_as_numbers[0]);

    const first_month = Math.floor(dates_as_numbers[0]);
    const last_month = Math.floor(dates_as_numbers[dates_as_numbers.length - 1]);
    const number_of_months = (last_month - first_month) + 1;

    const month_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const labels = Array(number_of_months).fill('').map((_value: string, index: number) => month_labels[(index + first_month) % 12]);

    // Note: Can't seem to get the graph to match the mock. Is there an issue with the implementation? Or is the dataset different?
    const retail_sales = sorted_sales.map((sale: ProductSale, index: number) => ({
        x: graph_x_values[index],
        y: sale.retailSales
    }));
    const wholesale_sales = sorted_sales.map((sale: ProductSale, index: number) => ({
        x: graph_x_values[index],
        y: sale.wholesaleSales
    }));
    const max_retail = Math.max(...retail_sales.map((rs) => rs.y));
    console.log(retail_sales);

    const line_data = {
        labels,
        datasets: [
            {
                data: retail_sales,
                borderColor: '#46a8f6',
                showLine: true
            },
            {
                data: wholesale_sales,
                borderColor: '#9ba6bf',
                showLine: true
            }
        ]
    };
    const line_options = {
        responsive: true,
        scales: {
            x: {
                min: 0,
                max: number_of_months,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#a4b6cd',
                    count: number_of_months + 1,
                    callback: (_value: any, index: number) => {
                        return month_labels[(index + first_month) % 12]
                    }
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                },
                // Slightly hacky, done in an attempt to center the graph and make it look like the mockup
                // TODO if this was real-world: follow-up with product, ask them what they want the min / max of the graph to be.
                // Do they want to scale the graph in any way?
                min: -max_retail,
                max: max_retail * 2
            }
        },
        elements: {
            point: {
                radius: 0
            },
            line: {
                tension: 0.25
            }
        },
    };

    return (
        <div className={"content"}>
            <div className={"content-section-padded"}>
                <p className={"header"}>Retail Sales</p>
                <Scatter data={line_data} options={line_options} />
            </div>
        </div>
    );
}