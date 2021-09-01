import { NativeModules } from 'react-native';

type DamoovType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Damoov } = NativeModules;

export default Damoov as DamoovType;
