import React from "react";
import { Table } from "antd";
import useSWR from "swr";
import axios from "axios";
import AdminLayout from "../../../comps/layout/AdminLAyout";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        token:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQyNmNmMzIzZmQxNTc0NzM5OGY1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjU3MTIzNiwiZXhwIjoxNjcyODMwNDM2fQ.l21nvnrntq6c8IaqRX5JhjsBLV_bseU0ZoAWAY8-CBI",
      },
    })
    .then((res) => res.data);

const product = () => {
  const { data, error } = useSWR(
    ["https://ecommerce-mern-api.vercel.app/api/products/"],
    fetcher
  );
  const products = data;

  console.log(data);

  return <Table columns={columns} dataSource={products} />;
};

product.getLayout = function PageLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default product;
