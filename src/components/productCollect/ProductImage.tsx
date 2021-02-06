/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-01-20 07:57:43
 * @EditDescripttion: 暂未修改
 */

import { Image, Typography } from "antd"
import { withRouter, RouteComponentProps, Link} from "react-router-dom";

interface PropType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  title: string;
  price: number | string
}

const ProductImageComponent: React.FC<PropType> = (props) => {
  return (
    // <div onClick={() => props.history.push(`detail/${props.id}`)}>
    <Link to={`detail/${props.id}`}>
      {props.size === "large" ?
          <Image src={props.imageSrc} height={285} width={490} />
          :
          <Image src={props.imageSrc} height={120} width={240} />
        }
        <div>
          <Typography.Text type="secondary">
            {props.title.slice(0,25)}
          </Typography.Text>
          <Typography.Text type="danger" strong>
            ¥ {props.price} 起
          </Typography.Text>
        </div>
    </Link>
    // </div>
  )
}

const ProductImage = withRouter(ProductImageComponent)
export default ProductImage