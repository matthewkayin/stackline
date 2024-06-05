import { ProductSale } from '../../../../types';
import './table.css';

export type TableProps = {
    sales: ProductSale[];
}

export const Table: React.FunctionComponent<TableProps> = (props: TableProps) => {
    const sorted_sales = props.sales.sort((a: ProductSale, b: ProductSale) => new Date(a.weekEnding).getTime() - new Date(b.weekEnding).getTime());

    return (
        <div className={"content"} id={"product-table"}>
            <table>
                <tr className={"product-table-header"}>
                    <th className={"table-align-left"}>WEEK ENDING</th>
                    <th className={"table-align-right"}>RETAIL SALES</th>
                    <th className={"table-align-right"}>WHOLESALE SALES</th>
                    <th className={"table-align-right"}>UNITS SOLD</th>
                    <th className={"table-align-right"}>RETAILER MARGIN</th>
                </tr>
                { sorted_sales.map((sale: ProductSale) => (
                    <tr className={"product-table-row"}>
                        <td className={"table-align-left"}>{sale.weekEnding.toString()}</td>
                        <td className={"table-align-right"}>{sale.retailSales.toString()}</td>
                        <td className={"table-align-right"}>{sale.wholesaleSales.toString()}</td>
                        <td className={"table-align-right"}>{sale.unitsSold.toString()}</td>
                        <td className={"table-align-right"}>{sale.retailerMargin.toString()}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}