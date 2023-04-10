import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BaseUrl = "https://emot.chokporn.one";


export const useHttp = () => {
  const [onload, setLoadState] = useState(false);

  const errorHandler = (err) => {
    toast.error(`Error : ${err.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function Test() {
    return toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const toastId = React.useRef(null);

  // pathAPI = '/back-emot/api'
  // pathRegister = '/back-emot/register'

  function Get(path, config) {
    const URL = BaseUrl + path;
    const result = axios.get(URL, config).catch((e) => {
      errorHandler(e);
    });
    return result;
  }

  const headers = {
    "Content-Type": "application/json",
  };

  function Post(path, data, name) {
    const URL = BaseUrl + path;
    const result = axios.post(URL, data, headers);

    return toast
      .promise(result, {
        pending: `${name} Creating`,
        success: `${name} have been created 👌`,
        error: "Request rejected 🤯",
      })
      .catch((e) => {
        return errorHandler(e);
      });
  }

  function Delete(path, config) {
    const URL = BaseUrl + path;
    const result = axios
      .delete(URL, config)
      .catch((e) => {
        return errorHandler(e);
      })
      .then((res) => {
        toast.success("❌ Delete Success!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    return result;
  }

  function Patch(path, data, config) {
    const URL = BaseUrl + path;
    const result = axios.patch(URL, data, headers);

    return toast
      .promise(result, {
        pending: "Processing Change",
        success: "Change have been save 👌",
        error: "Request rejected 🤯",
      })
      .catch((e) => {
        return errorHandler(e);
      });
  }

  function CreateEmployeePostBody(firstname, lastname, position, role) {
    return {
      firstname,
      lastname,
      positionId: position,
      roleId: role,
    };
  }

  function CreateEmailPostBody(email, employeeId, type) {
    return {
      id: employeeId,
      email,
      type,
    };
  }


  return {
    Get,
    Post,
    Delete,
    Patch,
    Test,
    CreateEmployeePostBody,
    CreateEmailPostBody
  };
};
