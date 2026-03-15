import fs from 'fs';
import path from 'path';

const walkAndReplace = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkAndReplace(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Update instances across component files mapping the old styles to new darkblue and pink style
      content = content.replace(/var\(--accent-cyan\)/g, 'var(--accent-pink)');
      content = content.replace(/var\(--accent-purple\)/g, 'var(--accent-darkblue)');
      content = content.replace(/var\(--accent-beige\)/g, 'var(--accent-darkblue)');
      
      // Update inline rgba backgrounds using old cyan/purple values to match pink/darkblue
      content = content.replace(/rgba\(0, 242, 254, 0\.1\)/g, 'rgba(216, 17, 89, 0.1)'); 
      content = content.replace(/rgba\(79, 172, 254, 0\.1\)/g, 'rgba(15, 52, 96, 0.1)');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
};

walkAndReplace(path.join(process.cwd(), 'src'));
console.log('Update complete');
