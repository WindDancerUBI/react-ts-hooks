/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-02 21:34:48
 * @Function: 描述一下模块的功能
 */
import { useEffect } from 'react'
import { Col, Row, Typography, Spin } from 'antd';
import { Header, Footer, SideMenu, Carousel, ProductCollect } from "../../components";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from '../../redux/hooks'
import { fetchProductListData} from '../../redux/recommendProduction/recommendProductActions'
import { useDispatch } from 'react-redux'

export const HomePage: React.FC = () => {

  const { t } = useTranslation()
  const loading = useSelector(state => state.recommendProduct.loading)
  const error = useSelector(state => state.recommendProduct.error)
  const productList = useSelector(state => state.recommendProduct.productList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductListData())
  }, [])

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
          height: "100vh"
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