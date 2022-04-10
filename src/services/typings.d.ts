declare namespace API {
  type User = {
    key?: string;
    id?: string;
    username?: string;
    password?: string;
    clientLimit?: number;
    isLocked?: boolean;
    scopes?: string[];
    clients?: Device[];
    updatedAt?: string;
    createdAt?: string;
  };

  type Device = {
    id?: string;
    name?: string;
    platform?: string;
    deviceId?: string;
    deviceSecret?: string;
    isLocked?: number | boolean;
    accessTokenValidateSeconds?: number;
    refreshTokenValidateSeconds?: number;
    isOnline?: number | boolean;
    client?: string;
    os?: string;
    type?: string;
    engine?: string;
    grants?: string[];
    updatedAt?: string;
    createdAt?: string;
  };

  type Config = {
    id?: string;
    updatedAt?: string;
    createdAt?: string;
    introduce?: string;
    name?: string;
    value?: string;
    type?: string;
  };

  type Channel = {
    id?: string;
    updatedAt?: string;
    createdAt?: string;
    title?: string;
    playSources?: string[];
    channelId?: string;
    playbills?: PlayBill[];
    images?: { href?: string; type?: string }[];
  };

  type UserLogin = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    captcha?: string;
    grant_type?: string;
    scope?: string;
  };

  type Token = {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    type?: string;
  };

  type ConfigType = {
    id?: string;
    name?: string;
  };

  type Channel = {
    id?: string;
    updatedAt?: string;
    createdAt?: string;
    title?: string;
    playSources?: string[];
    channelId?: string;
    playbills?: PlayBill[];
    images?: { href?: string; type?: string }[];
  };

  type PlayBill = {
    id?: string;
    updatedAt?: string;
    createdAt?: string;
    title?: string;
    channelId?: string;
    startTime?: string;
    endTime?: string;
    images: { href?: string; type?: string }[];
  };
}
