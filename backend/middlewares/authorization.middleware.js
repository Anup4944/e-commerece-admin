import { getAccessJwt } from "../models/session/session.model";

export const getUserSession = (accessJwt) => {
  return new Promise((resolve, reject) => {
    const sessionInfo = await getAccessJwt(accessJwt);
    resolve(sessionInfo);
  });
};
