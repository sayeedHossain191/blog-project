import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../User/user.model";
import { TUser } from "../User/user.interface";

const register = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload?.email }).select(
    "+password"
  );

  if (!user) {
    throw new Error("This user is not found !");
  }

  // checking if the user is inactive
  const isBlocked = user?.isBlocked;

  if (isBlocked === true) {
    throw new Error("This user is blocked ! !");
  }

  //checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  );

  if (!isPasswordMatched) {
    throw new Error("Wrong Password!!! Tell me who are you? 😈");
  }

  //create token and sent to the  client
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const token = jwt.sign(jwtPayload, "secret", { expiresIn: "1d" });

  return { token, user };
};

// const refreshToken = async (token: string) => {
//   // checking if the given token is valid
//   const decoded = jwt.verify(
//     token,
//     config.jwt_refresh_secret as string
//   ) as JwtPayload;

//   const { userId, iat } = decoded;

//   // checking if the user is exist
//   const user = await User.isUserExistsByCustomId(userId);

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
//   }
//   // checking if the user is already deleted
//   const isDeleted = user?.isDeleted;

//   if (isDeleted) {
//     throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
//   }

//   // checking if the user is blocked
//   const userStatus = user?.status;

//   if (userStatus === "blocked") {
//     throw new AppError(httpStatus.FORBIDDEN, "This user is blocked ! !");
//   }

//   if (
//     user.passwordChangedAt &&
//     User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
//   ) {
//     throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized !");
//   }

//   const jwtPayload = {
//     userId: user.id,
//     role: user.role,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string
//   );

//   return {
//     accessToken,
//   };
// };

export const AuthService = {
  register,
  login,
};

// export const AuthServices = {
//   loginUser,
//   changePassword,
//   refreshToken,
// };
