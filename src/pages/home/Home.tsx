/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-02 21:34:48
 * @Function: 描述一下模块的功能
 */
import { useEffect, useState } from 'react'
import { Col, Row, Typography, Spin } from 'antd';
import { Header, Footer, SideMenu, Carousel, ProductCollect } from "../../components";
// import { productList1, productList2, productList3 } from "./mockups";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

export const HomePage: React.FC = () => {

  const { t } = useTranslation()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string|null>(null)
  const [productList,setProductList] = useState<any[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get('http://123.56.149.216:8080/api/productCollections')
      .then(res => {
        setProductList(res.data)
        setLoading(false)
        setError(null)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }

  return (
    loading? 
      (<Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />)
      : 
      (error? 
        <div>网站出错：{error}</div> 
        : 
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
                  {t("home_page.hot_recommended")}
                </Typography.Title>
              }
              sideImage={sideImage}
              products={productList[0].touristRoutes}
            />
            <ProductCollect
              title={
                <Typography.Title level={3} type="warning">
                  {t("home_page.new_arrival")}
                </Typography.Title>
              }
              sideImage={sideImage2}
              products={productList[1].touristRoutes}
            />
            <ProductCollect
              title={
                <Typography.Title level={3} type="warning">
                  {t("home_page.domestic_travel")}
                </Typography.Title>
              }
              sideImage={sideImage3}
              products={productList[2].touristRoutes}
            />
          </div>
          <Footer />
        </div>)
  )
}