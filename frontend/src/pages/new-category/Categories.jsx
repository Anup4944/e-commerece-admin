import React from "react";
import { CategoryForm } from "../../component/add-category-form/CategoryForm";
import EditCategory from "../../component/edit-category-form/EditCategory";

const Categories = () => {
  return (
    <>
      <div style={{ flex: 5 }}>
        <CategoryForm />
        <hr style={{ marginTop: "20px" }} />
        <EditCategory />
      </div>
    </>
  );
};

export default Categories;
