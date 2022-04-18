import axios from "axios";

class Auth {
  // 로그인
  login(email, password, name, img) {
    try {
      const data = {
        email,
        password,
        name,
        img,
      };
      return axios({
        method: "POST",
        url: "http://ec2-13-125-40-125.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
        data,
      });
    } catch (e) {
      throw e;
    }
  }

  reissue(accessToken, refreshToken) {
    try {
      const data = {
        accessToken,
        refreshToken,
      };
      return axios({
        method: "POST",
        url: "http://ec2-13-125-40-125.ap-northeast-2.compute.amazonaws.com:8080/auth/reissue",
        data,
      });
    } catch (e) {
      throw e;
    }
  }
}

export default new Auth();
