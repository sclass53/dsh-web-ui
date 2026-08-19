# @linxin666/dsh-client-ui-skin-furina

[English](README.md) | 中文

适用于dsh-web-ui的芙宁娜主题。

## 安装（官方 bundle 方式）

推荐先装皮肤全家桶聚合包 `@linxin666/dsh-skins` 一次到位；只装本皮肤时用下列 link 命令。

```sh
# 装全部皮肤（推荐）
dsh plugin --profile web add @linxin666/dsh-skins
# 或单独装本皮肤
dsh plugin --profile web add @linxin666/dsh-client-ui-skin-furina
# 皮肤启用：dsh-skin use furina
# 从仓库安装（开发调试）：dsh plugin --profile web add link:$(pwd)/packages/skins/furina
```

`$(pwd)` 指克隆全家桶仓库后的目录。

本地 link 安装前需先在全家桶仓库内构建产物（`lib/` 被 git 忽略、不随仓库提交）：
`pnpm install && pnpm -r build` 后再 link 安装。
通过 git 安装（`dsh plugin --profile web add github:<org>/dsh-web-ui#<sha>`）时
`prepare` 脚本自动自包含构建 `lib/`，无需单独构建；pnpm ≥10 首次安装 git 依赖需先把
pnpm 打印的包键加入相应 profile 的 `pnpm-workspace.yaml` 的 `allowBuilds` 列表再重试。

皮肤启用 / 切换用 `dsh-skin use furina`（本仓库 `scripts/dsh-skin` 辅助脚本）；同一时刻只激活一个皮肤。

## 背景图

`src/client/art.ts` 内嵌主题的 `background.jpg`（2278×1280）压缩为 1920×1079 JPEG q76（约 210KB）的 data URL；文件头注释里有精确的重生成步骤。亮色遮罩是冰纱，暗色遮罩是深靛蓝纱——都按图的最亮/最暗区域调过，保证文字可读。

## 预览

亮色（[preview/light.png](preview/light.png)）· 暗色（[preview/dark.png](preview/dark.png)）——在 0807 基线裸 web profile 上截图。

## 要求

环境半透明是 token 级的（`--dsw-alias-bg-*`、`--dsw-specific-sidebar-fill`），与面板布局无关。刻意不用 `backdrop-filter`：带模糊的祖先会成为 fixed 覆盖层的包含块（设置面板会被锁进侧边栏）。

## 模型体验

无。皮肤只改浏览器 DOM，不触及模型请求。

#### KV Cache 影响

无；本包不组装也不发送任何 provider 请求。
