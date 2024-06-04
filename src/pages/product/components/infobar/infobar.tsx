import '../../../../styles/global.css';
import './infobar.css';
import { Product } from '../../../../types';

export type InfobarProps = {
    product: Product;
};

export const Infobar: React.FunctionComponent<InfobarProps> = (props: InfobarProps) => {
    const { product } = props;

    return (
        <div className={"content"} id={"infobar"}>
            <div className={"content-section-padded"}>
                <img src={"https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg"} />
                <h1 className={"title"}>{product.title}</h1>
                <p className={"subtitle"}>{product.subtitle}</p>
            </div>
            <div className={"tag-container"}>
                { product.tags.map((tag: string) => <p className={"tag-item"}>{tag}</p>) }
            </div>
        </div>
    );
}