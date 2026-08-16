# 🔬 科學科網頁 — 三風格靜態樣板

> 一個可在 3 種視覺風格之間即時切換的靜態科學科網頁樣板（學習宗旨／學科活動／獲獎項目）。

## 風格切換

頁面右上角有 🎨 風格切換器，可直接切換：

| 風格 | 說明 |
|------|------|
| ☀️ **清新明亮** | 藍紫漸層、白色卡片、圓角設計，現代清新感 |
| 🔮 **科技深藍** | 深色背景、霓虹青藍強調色，科技感十足 |
| 🌿 **自然實驗** | 暖米色基底、綠色主調、Serif 字型，實驗室風格 |

使用者選擇會自動儲存在 `localStorage`，下次開啟時會記住上次的風格。

## 如何替換真實內容

### 替換文字
直接編輯 `index.html` 中的中文文字：
- **學習宗旨**（第 ~49-72 行）：修改四張卡片的標題和描述
- **學科活動**（第 ~79-114 行）：修改四個活動卡片
- **獲獎項目**（第 ~122-160 行）：修改四個獎項卡片

搜尋 `示例內容` 標記即可快速找到所有示範文字。

### 替換圖片
1. 將您的圖片放入 `images/` 資料夾
2. 在 `index.html` 中修改 `<img>` 的 `src` 屬性，例如：
   ```html
   <img src="images/您的圖片.jpg" alt="替代文字">
   ```
3. 建議圖片寬度至少 500px，使用 JPG 格式以控制檔案大小

### 替換風格
編輯 `style.css` 頂部的 CSS 變數區塊（`[data-theme="..."]`）：
- `--bg-primary`：頁面主背景色
- `--accent`：強調色（按鈕、連結）
- `--text-primary`：主要文字色
- 更多變數請參閱 CSS 檔案中的完整列表

## 圖片來源與授權

所有測試圖片來自 **Unsplash**（免費可商用授權）：

| 檔名 | 來源 | 描述 |
|------|------|------|
| `microscope.jpg` | Unsplash | 實驗室器材 |
| `dna.jpg` | Unsplash | 顯微鏡科學人員 |
| `lab-tubes.jpg` | Unsplash | 移液器與多孔板 |
| `scientist-lab.jpg` | Unsplash | 科學家做實驗 |
| `event.jpg` | Unsplash | 慶祝彩紙 |
| `award-new.jpg` | Unsplash | 團隊會議協作 |

> Unsplash 授權：可免費用於個人和商業用途，無需署名（但鼓勵）。
> 參考：https://unsplash.com/license

## 檔案結構

```
science_web/
├── index.html      ← 主頁（含 3 個版塊 + 風格切換器）
├── style.css       ← CSS（3 套主題以 CSS 變數切換）
├── script.js       ← 風格切換 + 平滑捲動
├── images/         ← 圖片資料夾
│   ├── microscope.jpg
│   ├── dna.jpg
│   ├── lab-tubes.jpg
│   ├── scientist-lab.jpg
│   ├── event.jpg
│   └── award-new.jpg
└── README.md       ← 本說明檔案
```

## 使用方式

直接在瀏覽器中開啟 `index.html` 即可，無需任何建構工具或伺服器。
