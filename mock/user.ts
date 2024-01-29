function createUserList() {
  return [
    {
      userId: 1,
      avatar: "",
      username: "admin",
      password: "111111",
      desc: "平台管理员",
      roles: ["admin"],
      buttons: [user.detail],
      routes: ["home"],
      token: "Admin Token",
    },
    {
      userId: 2,
      avatar: "",
      username: "system",
      password: "111111",
      desc: "系统管理员",
      roles: ["admin"],
      buttons: [user.detail, user.user],
      routes: ["home"],
      token: "Admin Token",
    },
  ];
}
// 对外报漏一个数组
export default [
  {
    url: "/api/user/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      );
      if (!checkUser) {
        return {
          code: 201,
          data: { message: "账号或密码不正确" },
        };
      }
      const { token } = checkUser;
      return {
        code: 200,
        data: { token },
      };
    },
  },
  {
    url: "/api/user/info",
    method: "get",
    Response: ({ request }) => {
      const token = request.headers.token;
      const checkUser = createUserList().find((item) => item.token === token);
      if (!checkUser) {
        return {
          code: 201,
          data: { message: "token失效" },
        };
      }
      return {
        code: 200,
        data: { checkUser },
      };
    },
  },
];
