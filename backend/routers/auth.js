import express from "express";
import { comparePassword } from "../helpers/bcrypt.helper.js";
import { emailProcessor } from "../helpers/email.helper.js";
import {
  createAccessJwt,
  createRefreshJwt,
  verifyRefreshJwt,
} from "../helpers/jwt.helpers.js";
import { getRandOTP } from "../helpers/opt.helper.js";
import { storePin } from "../models/reset-pin/resetPin.model.js";
import { deleteAccessJwt } from "../models/session/session.model.js";
import {
  deleteRefreshJwtByUserId,
  getUserByEmail,
} from "../models/user/user.model.js";
const router = express.Router();

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user?._id) {
      return res.send({ status: "error", message: "No account found" });
    }

    const dbHashPass = user.password;

    const result = await comparePassword(password, dbHashPass);

    if (!result) {
      return res.send({
        status: "error",
        message: "Invalid Credeantails",
      });
    }
    const accessJwt = await createAccessJwt(user.email, user._id);

    const refreshJwt = await createRefreshJwt(user.email, user._id);

    user.password = undefined;

    user.refreshJwt = undefined;

    if (result) {
      return res.status(200).send({
        status: "success",
        message: "Login Success",
        user,
        accessJwt,
        refreshJwt,
      });
    }
  } catch (error) {
    res.send({
      status: "error",
      message: "Invalid details",
    });
  }
});

//LOGOUT
router.put("/logout", async (req, res) => {
  try {
    const { accessJwt, refreshJwt } = req.body;

    const verify = await verifyRefreshJwt(refreshJwt);

    if (!verify) {
      return res.send({ status: "error", message: "Error" });
    }

    deleteAccessJwt(accessJwt);

    deleteRefreshJwtByUserId(refreshJwt);
    res.send({
      status: "success",
      message: "You are logged out now!",
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "OOp! something went wrong , please try again",
    });
  }
});

// GET OPT
router.post("/otp", async (req, res) => {
  try {
    const { email } = req.body;

    const getUser = await getUserByEmail(email);

    if (getUser?._id) {
      const otpLength = 6;

      const otp = await getRandOTP(otpLength);

      const newOtp = { otp, email };

      const result = await storePin(newOtp);

      if (result?._id) {
        const { otp, email } = result;

        const mailInfo = { type: "OTP_REQUEST", otp, email };
        emailProcessor(mailInfo);
      }
    } else {
      return res.send({
        status: "error",
        message: "No account found",
      });
    }
    res.send({
      status: "success",
      message: `We have sent you password reset pin  on your given email ${email} .  It may take upto 5min to arrive the email. Please check your junk/spam folder if you don't see email in  your inbox.`,
    });
  } catch (error) {
    res.send({
      status: "error",
      message:
        "Error! There is some problem in our system, please try again later.",
    });
  }
});

export default router;
