import { rest } from "msw";

const baseURL = "https://drf-api1-df01c14b5fdd.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 6,
        "username": "Aya-ij",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 6,
        "profile_image": "https://res.cloudinary.com/damhzz25i/image/upload/v1/media/../default_profile_rmzaqf"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];