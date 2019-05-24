import { observable, ObservableMap, runInAction } from 'mobx';
import { AxiosInstance } from 'axios';

export type Config = {
  prefixCls?: string;
  proPrefixCls?: string;
  ripple?: boolean;
  lookupUrl?: string | ((code: string) => string);
  lovDefineUrl?: string | ((code: string) => string);
  lovQueryUrl?: string | ((code: string) => string);
  axios?: AxiosInstance;
}

export type ConfigKeys = keyof Config;

const globalConfig: ObservableMap<ConfigKeys, Config[ConfigKeys]> = observable.map<ConfigKeys, Config[ConfigKeys]>([
  ['prefixCls', 'c7n'],
  ['proPrefixCls', 'c7n-pro'],
  ['ripple', true],
  ['lookupUrl', code => `/common/code/${code}/`],
  ['lovDefineUrl', code => `/sys/lov/lov_define?code=${code}`],
  ['lovQueryUrl', code => `/common/lov/dataset/${code}`],
]);

export function getConfig<T extends ConfigKeys>(key: T): Config[T] {
  return globalConfig.get(key);
}

export function getPrefixCls(suffixCls: string, customizePrefixCls?: string): string {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return `${getConfig('prefixCls')}-${suffixCls}`;
}

export function getProPrefixCls(suffixCls: string, customizePrefixCls?: string): string {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return `${getConfig('proPrefixCls')}-${suffixCls}`;
}

export default function configure(config: Config) {
  runInAction(() => {
    Object.keys(config).forEach((key: keyof Config) => globalConfig.set(key, config[key]));
  });
}
