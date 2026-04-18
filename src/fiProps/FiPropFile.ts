import { ConfigData } from './ConfigData.js';
import fs from 'fs';

/**
 * Config dosyasını parse et
 */
export class FiPropFile {
  static parseConfig(filePath: string): ConfigData {
  const content = fs.readFileSync(filePath, 'utf-8');
  const config: ConfigData = {};

  content.split('\n').forEach((line) => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, value] = line.split('=');
      if (key && value) {
        config[key.trim()] = value.trim();
      }
    }
  });

  return config;
}
}

