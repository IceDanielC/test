import { useDebounceFn } from "ahooks";
import React, { useState } from "react";
import { getUserList } from "../api/getUserList";

const UserSelect: React.FC = () => {
  const [userList, setUserList] = useState<
    { userName: string; userAge: number }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const { run: search } = useDebounceFn(
    async (keyword: string) => {
      setLoading(true);
      const userList = await getUserList(keyword);
      setLoading(false);
      setUserList(userList.data);
    },
    { wait: 300 }
  );

  return (
    <div>
      <input
        type="text"
        placeholder="请输入用户名称"
        onInput={(e) => search(e.target.value)}
      />
      <div className="userList" style={{ backgroundColor: "skyblue" }}>
        {loading ? (
          <div>加载中...</div>
        ) : userList.length > 0 ? (
          <div>
            {userList.map((user) => (
              <div key={user.userName}>
                <span>{user.userName} </span>
                <span>{user.userAge}岁</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserSelect;
