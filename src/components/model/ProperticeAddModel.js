import React, { useState } from "react";

const ProperticeAddModel = () => {
  // const [formdata, setFormData] = useState({
  //     name: "",
  //     description: "",
  //     price: "",
  //     external_url: "",
  //     collection: "",
  //     blockchain: "",
  //     attributes: [{ trait_type: "", value: "" }],
  //     freeze: "",
  //     royalties: 0,
  //     images: [],
  //   });
  //   const handleAttributeChange = (index, e) => {
  //     const newAttributes = [...formdata.attributes];
  //     newAttributes[index][e.target.name] = e.target.value;
  //     setFormData({ ...formdata, attributes: newAttributes });
  //   };

  //   const addAttribute = () => {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       attributes: [...prevState.attributes, { trait_type: "", value: "" }],
  //     }));
  //   };

  //   const removeAttribute = (index) => {
  //     const newAttributes = [...formdata.attributes];
  //     newAttributes.splice(index, 1);
  //     setFormData({ ...formdata, attributes: newAttributes });
  //   };
  const [data, setData] = useState([]);
  const handleAdd = () => {
    const newData = [...data];
    newData.push({
      id: newData.length + 1,
      name: `Item ${newData.length + 1}`,
    });
    setData(newData);
  };
  const handleRemove = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <>
      <button
        className="proper-add-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
      >
        +
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-titles" id="exampleModalLabel">
                Create a Collection
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-bodys">
              <table className="table-propertice">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Name</th>
                  </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>X</td>
                        <td><input type="text" placeholder="Character" /></td>
                        <td><input type="text" placeholder="Male" /></td>
                    </tr>
                </tbody> */}
                <tbody>
                  <tr>
                    <td>
                      <button className="proper-remove">X</button>
                    </td>
                    <td>
                      <input type="text" placeholder="Character" />
                    </td>
                    <td>
                      <input type="text" placeholder="Male" />
                    </td>
                  </tr>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <button
                          className="proper-remove"
                          onClick={() => handleRemove(item.id)}
                        >
                          X
                        </button>
                      </td>
                      <td>
                        <input type="text" placeholder="Character" />
                      </td>
                      <td>
                        <input type="text" placeholder="Male" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="add_proper" onClick={handleAdd}>
                Add Item
              </button>

              <div className="new-create-contents">
                <button className="my-collection-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperticeAddModel;
