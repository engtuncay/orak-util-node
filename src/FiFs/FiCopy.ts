import fs from 'fs';
import path from 'path';

// Kaynak ve hedef yolları tanımla
// const sourceDocDir = 'ent-node-doc';
// const sourceHtmlFile = 'entegre_node/main.html';
// const distDir = 'dist';

export class FiCopy {
  // Kopyalama fonksiyonu
  static copyDir(src: string, dest: string): void {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);

      if (fs.statSync(srcPath).isDirectory()) {
        FiCopy.copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });

    console.log(`✓ ${src} → ${dest}`);
  }

  // Dosya kopyalama fonksiyonu
  static copyFile(src: string, dest: string): void {
    fs.copyFileSync(src, dest);
    console.log(`✓ ${src} → ${dest}`);
  }
}

