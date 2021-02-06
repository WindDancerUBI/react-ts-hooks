/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-02 22:29:20
 * @Function: 描述一下模块的功能
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  console.log('history:',props.history);
  console.log('location:',props.location);
  console.log('match:',props.match);
  return <h1>路游路线详情页面, 路线ID: {props.match.params.touristRouteId}</h1>;
};
