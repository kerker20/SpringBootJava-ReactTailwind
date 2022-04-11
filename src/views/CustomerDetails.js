import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCustomers,
  deleteCustomer,
  createCustomer,
  updateCustomer
} from "../actions/customerController";

const CustomerDetails = () => {
  const [currentId, setCurrentId] = useState(0);

  const [postData, setPostData] = useState({
    fullname: "",
    email: "",
    contact: "",
    location: "",
  });

  const customerCheck = useSelector((state) =>
    currentId ? state.customer.find((data) => data.id === currentId) : null
  );
  console.log(customerCheck, "WEEEWW");
  function setData(){
    document.getElementById('update').style.display = "block";

  }

  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customer);
  useEffect(() => {
    if (customerCheck){
        setPostData(customerCheck);
    }else{
        setPostData({
            fullname: "",
            email: "",
            contact: "",
            location: "",
        });
    }
  }, [customerCheck]);
  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  console.log(customers);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(customerData);
    dispatch(createCustomer(customerData));
    setTimeout(() => {
      window.location.reload("http://localhost:3000/");
    }, 300);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateCustomer(currentId, postData));
    setTimeout(() => {
      window.location.reload("http://localhost:3000/");
    }, 300);
  };

  return (
    <>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal" id="modal">
        <div
          class="modal-box"
          style={{ marginLeft: "22rem", marginTop: "2rem" }}
        >
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() =>
              (document.getElementById("modal").style.display = "none")
            }
          >
            ✕
          </label>
          <div class="text-sm opacity-80 font-bold">
            Please Enter Customer Info
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstname" className="sr-only">
                  FirstName
                </label>
                <input
                  id="firstname"
                  name="firstName"
                  type="firstname"
                  autoComplete="firstname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input input-bordered input-success w-full mb-4"
                  placeholder="firstname"
                  onChange={(e) =>
                    setCustomerData({
                      ...customerData,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  LastName
                </label>
                <input
                  id="lastname"
                  name="lastName"
                  type="lastname"
                  autoComplete="lastname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input input-bordered input-success w-full mb-4"
                  placeholder="LastName"
                  onChange={(e) =>
                    setCustomerData({
                      ...customerData,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input input-bordered input-success w-full mb-4"
                  placeholder="Email"
                  onChange={(e) =>
                    setCustomerData({ ...customerData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="modal-action">
              <button for="my-modal" class="btn" type="submit">
                Save!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="update" class="w-5/6"style={{display:'none', position: 'absolute', zIndex: 50, marginLeft: '25rem'}}>
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => document.getElementById('update').style.display = 'none'}
          >
            ✕
          </label>
          <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstname" className="sr-only">
                  FirstName
                </label>
                <input
                  id="firstname"
                  name="firstName"
                  type="firstname"
                  autoComplete="firstname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input input-bordered input-success w-full mb-4"
                  placeholder="firstname"
                  value={postData.firstName}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  LastName
                </label>
                <input
                  id="lastname"
                  name="lastName"
                  type="lastname"
                  autoComplete="lastname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input input-bordered input-success w-full mb-4"
                  placeholder="LastName"
                  value={postData.lastName}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input input-bordered input-success w-full mb-4"
                  placeholder="Email"
                  value={postData.email}
                  onChange={(e) =>
                    setPostData({ ...postData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="modal-action">
              <button for="my-modal" class="btn" type="submit">
                Save!
              </button>
            </div>
          </form>
        </div>
      </div>
      <label
        for="my-modal"
        class="btn modal-button btn mt-5 ml-28 btn-sm btn"
        onClick={() =>
          (document.getElementById("modal").style.display = "block")
        }
      >
        Add Customer &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-save"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
        </svg>
      </label>
      <div class="w-5/6 mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-3">
        <div class="md:flex">
          <div class="overflow-x-auto w-full">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">
                            {customer.firstName} {customer.lastName}
                          </div>
                          <div class="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      Wyman-Ledner
                      <br />
                      <span class="badge badge-ghost badge-sm">
                        Community Outreach Specialist
                      </span>
                    </td>
                    <td>{customer.email}</td>
                    <th>
                      <button
                        class="btn btn-error btn-xs text-white"
                        onClick={() => dispatch(deleteCustomer(customer.id))}
                      >
                        Drop
                      </button>
                      &nbsp;
                      <label
                        for="my-modal-3"
                        class="btn btn-accent btn-xs text-white"
                        onClick={() => {
                          setCurrentId(customer.id); setData()
                        }}
                      >
                        Edit
                      </label>
                    </th>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
