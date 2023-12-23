const fs = require('fs');
const path = require('path');

const scriptDir = __dirname;
const jsonFilePath = path.join(scriptDir, '../docs/.vitepress/sidebar.json');

// 读取 JSON 文件内容
const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');

// 解析 JSON 数据
const data = JSON.parse(jsonData);

// 遍历 JSON 数据并创建 Markdown 文件
for (const item of data['/']) {
  const fileName = path.join(scriptDir, '../docs', item.link.slice(1) + '.md');
  const fileContent = `# ${item.text}`;

  // 检查文件是否存在
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, fileContent);
    console.log(`File created: ${fileName}`);
  } else {
    console.log(`File already exists: ${fileName}`);
  }
}

console.log('Markdown files created successfully.');
