import React from 'react'
import { Typography, Carousel, Image, Rate, Table } from 'antd'
import styles from './ProductIntro.module.scss'
import { ColumnsType } from 'antd/es/table'

interface PropType {
  title: string;
  description: string;
  price: number;
  rating: number | string;
  pictures: any[];
  coupons: string;
  points: string;
  discount: string;
}

interface RowType {
  title: string;
  description: string | number | JSX.Element;
  key: number;
}

const columns: ColumnsType<RowType> = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    align: "left",
    width: 120,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
];

export const ProductIntro: React.FC<PropType> = (props) => {
  
  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: "路线名称",
      description: props.title,
    },
    {
      key: 1,
      title: "价格",
      description: (
        <>
          ¥{" "}
          <Typography.Text type="danger" strong>
            {props.price}
          </Typography.Text>
        </>
      ),
    },
    {
      key: 3,
      title: "限时抢购折扣",
      description: props.discount ? (
        <>
          ¥ <Typography.Text delete>{props.price}</Typography.Text>{" "}
          <Typography.Text type="danger" strong>
            ¥ {props.discount}
          </Typography.Text>
        </>
      ) : (
        "暂无折扣"
      ),
    },
    {
      key: 4,
      title: "领取优惠",
      description: props.coupons ? props.discount : "无优惠券可领",
    },
    {
      key: 5,
      title: "线路评价",
      description: (
        <>
          <Rate allowHalf defaultValue={+props.rating} />
          <Typography.Text style={{ marginLeft: 10 }}>
            {props.rating} 星
          </Typography.Text>
        </>
      ),
    },
  ];

  return (
    <div className={styles['intro']}>
      <Typography.Title level={4}>{props.title}</Typography.Title>
      <Typography.Text>{props.description}</Typography.Text>
      <div className={styles['intro-detail']}>
        <Typography.Text style={{ marginLeft: 20 }}>
          ¥ <span className={styles['intro-strong']}>{props.price}</span>{" "}
          /人起
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          <span className={styles['intro-strong']}>{props.rating}</span>{" "}
          分
        </Typography.Text>
      </div>
      <Carousel autoplay slidesToShow={3}>
        {props.pictures.map(item => <Image height={150} src={item}/>)}
      </Carousel>
      <Table<RowType>
        columns={columns}
        dataSource={tableDataSource}
        size="small"
        bordered={false}
        pagination={false}
        showHeader={false}
      />
    </div>
  )
}