import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcrypt.helper.js";
import { emailProcessor } from "../helpers/email.helper.js";
import {
  createAccessJwt,
  createRefreshJwt,
  verifyRefreshJwt,
} from "../helpers/jwt.helpers.js";
import { getRandOTP } from "../helpers/opt.helper.js";
import { loginValidation } from "../middlewares/formValidation.middleware.js";
import {
  deletePin,
  findPin,
  storePin,
} from "../models/reset-pin/resetPin.model.js";
import { deleteAccessJwt } from "../models/session/session.model.js";
import {
  deleteRefreshJwtByUserId,
  getUserByEmail,
  updateNewPassword,
  updatePass,
} from "../models/user/user.model.js";
const router = express.Router();

//LOGIN
router.post("/login", loginValidation, async (req, res) => {
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

//UPATE PASSWORD
router.patch("/password", async (req, res) => {
  try {
    const { pin, email, password } = req.body;

    const pinInfo = await findPin({ pin, email });

    if (pinInfo?._id) {
      const hashPass = await hashPassword(password);

      if (hashPass) {
        const result = await updateNewPassword({
          email,
          hashPass,
        });

        if (result?._id) {
          const emailObj = { type: "UPDATE_PASS_SUCCESS", email };

          deletePin(pinInfo?._id);

          emailProcessor(emailObj);

          return res.send({
            status: "successful",
            message: "Your password has been updated. You may login now!",
          });
        }
      }
    } else {
      res.send({
        status: "error",
        message: "Incorrect pin",
      });
    }
  } catch (error) {
    res.send({
      status: "error",
      message:
        "Error! There is some problem in our system, please try again later.",
    });
  }
});

// UPDATE PASSWORD VIA SETTINGS
router.patch("/update-password", async (req, res) => {
  try {
    const { newPassword, email } = req.body;
    console.log(req.body);

    const hashedPassword = await hashPassword(newPassword);

    if (email) {
      const updatePassword = await updatePass({
        newPassword: hashedPassword,
        email,
      });
      res.send({
        status: "success",
        message: "Your password has been updated.",
      });
    } else {
      res.send({
        status: "error",
        message: "Please try again later",
      });
    }
  } catch (error) {
    res.send({
      status: "error",
      message: "Please try again later",
    });
  }
});

export default router;
