/*
 * @Descripttion: 产品详情页面
 * @Author: huangjitao
 * @Date: 2021-02-02 22:29:20
 * @Function: 描述一下模块的功能
 */
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { Header, Footer, ProductIntro } from '../../components'
import styles from './DetailPage.module.scss'
import { Anchor, Menu, Divider, Typography, Spin, Row, Col, DatePicker } from 'antd'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { getProductDetail } from '../../redux/productDetail/productDetailSlice'
interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {

  const { touristRouteId } = useParams<MatchParams>()
  const product = useSelector(state => state.productDetail.data)
  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductDetail(touristRouteId))
  },[])

  if(loading) {
    return <Spin
    size="large"
    style={{
      marginTop: 200,
      marginBottom: 200,
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      height: "100vh"
    }}
  />
  }

  if(error) {
    return <div>网站出错：{error}</div> 
  }

  return (
    <div>
      <Header></Header>
      <div className={styles['page-content']}>
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              <ProductIntro 
                title={product.title}
                description={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <DatePicker.RangePicker open></DatePicker.RangePicker>
            </Col>
          </Row>
        </div>
        <Anchor className={styles["product-detail-anchor"]}>
          <Menu mode="horizontal">
            <Menu.Item key="1">
              <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Anchor.Link href="#fees" title="费用"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>
        <div id="feature" className={styles['product-detail-container']}>
          <Divider orientation='center'>
            <Typography.Title level={4}>产品特色</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.features}} style={{margin: 50}}></div>
        </div>
        <div id="fees" className={styles['product-detail-container']}>
          <Divider orientation='center'>
            <Typography.Title level={4}>费用</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.fees}} style={{margin: 50}}></div>
        </div>
        <div id="notes" className={styles['product-detail-container']}>
          <Divider orientation='center'>
            <Typography.Title level={4}>预定须知</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.notes}} style={{margin: 50}}></div>
        </div>
        <div id="comments" className={styles['product-detail-container']}>
          <Divider orientation='center'>
            <Typography.Title level={4}>用户评价</Typography.Title>
          </Divider>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
};
 