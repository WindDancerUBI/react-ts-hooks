/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-23 22:22:52
 * @Function: use of this file
 */

import { ProductList, FilterArea } from "../../components"
import { MainLayout } from "../../layouts/mainLayout"
import styles from './Search.module.scss'
import { useParams, useLocation } from "react-router-dom";
import React,{ useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from "../../redux/hooks";
import { getProductSearch } from "../../redux/productSearch/productSearchSlice";
import { Spin } from "antd";

interface MathParam {
  keyword: string
}

export const SearchPage: React.FC = () => {

  const { keyword } = useParams<MathParam>()
  const location = useLocation()
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productSearch.data)
  const error = useSelector(state => state.productSearch.error)
  const loading = useSelector(state => state.productSearch.loading)
  const pagination = useSelector(state => state.productSearch.pagination)

  useEffect(() => { 
    dispatch(getProductSearch({nextPage: 1, pageSize: 10, keyword}))
  },[location])

  const onPageChange = (nextPage, pageSize) => {
    dispatch(getProductSearch({nextPage, pageSize, keyword}))
  }

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

  else {
    return (
      <MainLayout>
        <div className={styles["product-list-container"]}>
          <FilterArea />
        </div>
        <div className={styles["product-list-container"]}>
          <ProductList 
            data={productList} 
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </MainLayout>
    )
  }
}
