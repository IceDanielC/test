import { userList } from "./user";

export interface Response {
  data: { userName: string; userAge: number }[];
}

// 模拟 https://mock.com/getUser
export const getUserList = (keyword: string): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredUsers = keyword
        ? userList.filter((user) => user.userName.includes(keyword))
        : [];
      resolve({
        data: filteredUsers,
      });
    }, 1000);
  });
};
