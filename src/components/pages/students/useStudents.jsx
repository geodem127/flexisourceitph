import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createStudents, deleteStudents } from "../../../graphql/mutations";
import { listStudents } from "../../../graphql/queries";

const client = generateClient();

const useStudents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState(null);
  const [createNewStudentResponse, setCreateNewStudentResponse] =
    useState(null);

  const [deleteStudentResponse, setDeleteStudentResponse] = useState(null);

  const getStudents = async () => {
    setIsLoading(true);
    let sData = null;

    try {
      const res = await client.graphql({
        query: listStudents,
      });

      console.log(" getStudents |  RESPONSE: ", res);
      sData = {
        status: "success",
        data: res?.data?.listStudents?.items,
      };
    } catch (error) {
      sData = {
        status: "failed",
        data: error,
      };
    }
    setStudents(sData);
    setIsLoading(false);
    return sData;
  };

  const createNewStudent = async ({
    id,
    student_id,
    first_name,
    last_name,
    email,
    dob,
  }) => {
    setIsLoading(true);
    let resData = null;

    try {
      const res = await client.graphql({
        query: createStudents,
        variables: {
          input: {
            id,
            student_id,
            first_name,
            last_name,
            email,
            dob,
          },
        },
      });
      resData = {
        status: "success",
        data: res?.data?.createStudents,
      };
    } catch (error) {
      resData = {
        status: "failed",
        data: error,
      };
    }
    setCreateNewStudentResponse(resData);
    setIsLoading(false);
    return resData;
  };

  const deleteStudent = async (id) => {
    setIsLoading(true);
    let resData = null;
    try {
      const res = await client.graphql({
        query: deleteStudents,
        variables: {
          input: {
            id: id,
          },
        },
      });
      resData = {
        status: "success",
        data: res,
      };
    } catch (error) {
      resData = {
        status: "failed",
        data: error,
      };
    }
    setDeleteStudentResponse(resData);
    setIsLoading(false);
    return resData;
  };

  return {
    isLoading,
    students,
    createNewStudentResponse,
    deleteStudentResponse,
    getStudents,
    createNewStudent,
    deleteStudent,
  };
};

export default useStudents;
