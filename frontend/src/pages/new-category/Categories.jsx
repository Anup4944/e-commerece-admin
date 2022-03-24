import React from "react";
import { CategoryForm } from "../../component/add-category-form/CategoryForm";
import ListCategory from "../../component/list-category/ListCategory";

const Categories = () => {
  return (
    <>
      <div style={{ flex: 5 }}>
        <CategoryForm />
        <hr style={{ marginTop: "20px" }} />
        <ListCategory />
      </div>
    </>
  );
};

export default Categories;
