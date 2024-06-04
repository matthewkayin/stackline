import { Infobar, Graph, Table } from './components';
import './product.css';
import { useQueryApi } from '../../hooks';

export const ProductPage: React.FunctionComponent = () => {
    const { data, error, loading } = useQueryApi('data.json');

    if (loading || error || !data) {
        return (<></>);
    }

    return (
        <div className={"flex-container"}>
            <div className={"flex-column-left"}>
                <Infobar product={data[0]} />
            </div>
            <div className={"flex-column-right"}>
                <Graph sales={data[0].sales} />
            </div>
        </div>
    )
};