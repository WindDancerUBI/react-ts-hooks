/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-02 21:34:48
 * @Function: 描述一下模块的功能
 */

import { Col, Row, Typography } from 'antd';
import { Header, Footer, SideMenu, Carousel, ProductCollect } from "../../components";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './Home.module.scss'

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className={styles['page-content']} >
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollect
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollect
          title={
            <Typography.Title level={3} type="warning">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollect
          title={
            <Typography.Title level={3} type="warning">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
      </div>
      <Footer />
    </div>
  )
}