import axios from "axios";

class Member {
  // 현재 로그인한 사용자의 정보를 가져다줌
  me() {
    try {
      return axios({
        method: "GET",
        url: "https://13.125.40.125:8080/member/me",
      });
    } catch (e) {
      throw e;
    }
  }
}

export default new Member();
