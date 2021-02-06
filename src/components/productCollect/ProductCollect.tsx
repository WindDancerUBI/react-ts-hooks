/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-01-20 07:47:41
 * @EditDescripttion: 暂未修改
 */

import { Col, Divider, Row } from "antd";
import styles from "./ProductCollect.module.css";
import ProductImage from "./ProductImage";

interface PropType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}

export const ProductCollect: React.FC<PropType> = (props) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{props.title}</Divider>
      <Row>
        <Col span={4}>
          <img src={props.sideImage} className={styles['side-image']} alt='#' />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage 
                id={props.products[0].id}
                size={"large"}
                title={props.products[0].title}
                imageSrc={props.products[0].touristRoutePictures[0].url}
                price={props.products[0].price}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                <ProductImage 
                  id={props.products[1].id}
                  size={"small"}
                  title={props.products[1].title}
                  imageSrc={props.products[1].touristRoutePictures[0].url}
                  price={props.products[1].price}
                />
                </Col>
                <Col span={12}>
                <ProductImage 
                  id={props.products[2].id}
                  size={"small"}
                  title={props.products[2].title}
                  imageSrc={props.products[2].touristRoutePictures[0].url}
                  price={props.products[2].price}
                />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                <ProductImage 
                  id={props.products[7].id}
                  size={"small"}
                  title={props.products[7].title}
                  imageSrc={props.products[7].touristRoutePictures[0].url}
                  price={props.products[7].price}
                />
                </Col>
                <Col span={12}>
                <ProductImage 
                  id={props.products[8].id}
                  size={"small"}
                  title={props.products[8].title}
                  imageSrc={props.products[8].touristRoutePictures[0].url}
                  price={props.products[8].price}
                />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage 
                id={props.products[3].id}
                size={"small"}
                title={props.products[3].title}
                imageSrc={props.products[3].touristRoutePictures[0].url}
                price={props.products[3].price}
              />
            </Col>
            <Col span={6}>
              <ProductImage 
                id={props.products[4].id}
                size={"small"}
                title={props.products[4].title}
                imageSrc={props.products[4].touristRoutePictures[0].url}
                price={props.products[4].price}
              />
            </Col>
            <Col span={6}>
              <ProductImage 
                id={props.products[5].id}
                size={"small"}
                title={props.products[5].title}
                imageSrc={props.products[5].touristRoutePictures[0].url}
                price={props.products[5].price}
              />
            </Col>
            <Col span={6}>
              <ProductImage 
                id={props.products[6].id}
                size={"small"}
                title={props.products[6].title}
                imageSrc={props.products[6].touristRoutePictures[0].url}
                price={props.products[6].price}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
