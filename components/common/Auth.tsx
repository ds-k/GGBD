import axios from "axios";
import queryString from "query-string";

const getKakaoAccessToken = async (code: string) => {
  const formData = {
    grant_type: "authorization_code",
    client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API,
    redirect_uri: `${process.env.NEXT_PUBLIC_API_URL}/oauth/kakao`,
    code,
  };
  const tokenData = await axios.post(
    `https://kauth.kakao.com/oauth/token?${queryString.stringify(formData)}`
  );
  return tokenData;
};

const getGoogleAccessToken = async (code: string) => {
  const formData = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_REST_API,
    redirect_uri: `${process.env.NEXT_PUBLIC_API_URL}/oauth/google`,
    client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
  };
  const tokenData = await axios.post(
    `https://oauth2.googleapis.com/token?${queryString.stringify(formData)}`
  );
  return tokenData;
};

const socialLogin = async (code: string, state: string) => {
  try {
    const tokenData =
      state === "kakao"
        ? await getKakaoAccessToken(code)
        : await getGoogleAccessToken(code);
    const userInfo = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/oauth/login`,
      {
        tokenData,
        state,
      }
    );
    console.log(userInfo);
  } catch (e) {
    console.log(e);
  }
};

const googleFormData = {
  client_id: process.env.NEXT_PUBLIC_GOOGLE_REST_API,
  redirect_uri: `${process.env.NEXT_PUBLIC_API_URL}/oauth/google`,
  response_type: "code",
  scope: "https://www.googleapis.com/auth/userinfo.profile",
  state: "google",
};

const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?${queryString.stringify(
  googleFormData
)}`;

const kakaoFormData = {
  grant_type: "authorization_code",
  client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API,
  redirect_uri: `${process.env.NEXT_PUBLIC_API_URL}/oauth/kakao`,
  response_type: "code",
  state: "kakao",
};

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?${queryString.stringify(
  kakaoFormData
)}`;

export { socialLogin, googleURL, kakaoURL };
