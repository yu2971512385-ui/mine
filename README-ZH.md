# Andy 海外增长个人网站

这是基于 Cleanfolio Minimal（MIT License）改造的纯静态个人营销网站。

## 上线前必须替换

1. `index.html` 中的 `Andy` 和个人描述。
2. 有真实项目资料后，补充产品名称、市场、目标、动作、周期与可公开结果。
3. 用户提供个人照片后，可在首屏加入真实人物形象。

## 维护 UA Team

团队资料集中在 `team-data.js`。新增优化师时，复制其中一整个资料对象并修改 `id`、`code`、姓名、角色和经历，页面会自动增加一个可切换的入口。

照片放入 `assets/team/`，再把对应资料的 `photo` 改为相对路径，例如：

```js
photo: './assets/team/optimizer-01.jpg',
```

未填写照片时，页面会显示 `PHOTO / 待上传` 占位。公开前请将“待填写”内容替换为可核验的真实资料。

## 启用账号登录与受保护邮箱

网站使用 Supabase Auth 和 Row Level Security。公开页面只保存优化师资料 ID，真实邮箱放在受 RLS 保护的数据库表中；未登录访问无法读取。

1. 在 Supabase 创建免费项目。
2. 在 SQL Editor 执行 `supabase-schema.sql`。
3. 在 Project Settings → API 复制 Project URL 和 Publishable key，填入 `auth-config.js`：

```js
window.AUTH_CONFIG = {
  supabaseUrl: 'https://你的项目.supabase.co',
  supabasePublishableKey: '你的 Publishable key',
}
```

4. 在 Authentication → URL Configuration 中，把 Site URL 设为 `https://yu2971512385-ui.github.io/mine/`，并将 `https://yu2971512385-ui.github.io/mine/**` 加入 Redirect URLs。
5. 在 Supabase Table Editor 的 `ua_contacts` 表录入邮箱。`optimizer_id` 必须与 `team-data.js` 一致：`paid-social`、`search-growth`、`app-growth` 或 `creative-growth`。

`Publishable key` 可以放在浏览器端；绝对不要把 `service_role` key 写入本仓库或网页。后者能够绕过 RLS。

## 视觉素材

`assets/global-city-lights.jpg` 来自 NASA/JPL/GSFC 的 Global City Lights，来源页：
https://science.nasa.gov/photojournal/global-city-lights/

平台品牌标志使用于识别对应媒体渠道，来源与品牌规范：

- Meta: https://about.meta.com/brand/resources/meta/company-brand/
- Google Ads: https://ads.google.com/
- TikTok: https://developers.tiktok.com/doc/getting-started-design-guidelines

相关标志属各品牌所有，本页不暗示任何官方认证或合作关系。

## 在线地址

https://yu2971512385-ui.github.io/mine/

站点通过 GitHub Pages 发布。推送到 `main` 分支后，GitHub 会自动更新线上内容。

## 本地预览

```bash
python3 serve-local.py
```

然后打开 http://localhost:3000/mine 。本地服务只在命令运行期间有效；跨网络或其他设备请使用上面的在线地址。

部署完成后，分别向百度搜索资源平台、Google Search Console 和 Bing Webmaster Tools 验证并提交 Sitemap。

## 声明

页面中的累计投放金额来自网站所有者提供，发布前应确保口径真实且能够在必要时提供证明。不要添加未经授权的客户 Logo、后台截图或虚构业绩。
