import { UAParser } from 'ua-parser-js';

enum Platform {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

const getPlatformFromDeviceType = (deviceType?: string) => {
  if (deviceType === 'mobile' || deviceType === 'tablet') {
    return Platform.MOBILE;
  }

  return Platform.DESKTOP;
};

export const getPlatform = (userAgent = ''): Platform => {
  const parser = new UAParser();
  parser.setUA(userAgent);
  const deviceType = parser.getDevice().type;

  return getPlatformFromDeviceType(deviceType);
};
