---
prev:
  text: 校内服务
  link: /campus
next:
  text: 入党
  link: /campus/party
links:
  - text: FDCraft
    link: https://fdcraft.github.io/
    icon: https://fdcraft.github.io/logo.svg
    desc: 复旦大学基岩社
  - text: FDUCSLG
    link: https://www.fducslg.com/
    icon: https://cs101.fducslg.com/assets/fducslg.png
    desc: 开放原子开源社团
  - text: PCS服务队
    link: https://fdupcs.top/
    icon: https://fdupcs.top/assets/logo.png
    desc: 拯救全校师生的生产力危机
clubListLinks:
  - text: 复旦社团清单
    link: https://www.notion.so/2502add2c72a803b8667e8fa6fb38f3c?v=2502add2c72a81258756000cc20a7f4b&source=copy_link
    icon: https://fduguidebook.com/icons/memo_color.svg
    desc: 按 tag 检索全校社团，文档开放编辑
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 社团组织

---

<LinkList :links="$frontmatter.links" />

## 基本介绍

复旦大学有 150+ 学生社团，活动内容覆盖文艺、体育、学术、公益等多个方面。社团成员分为核心成员与普通成员：核心成员一般需经过审核，工作量更大，与社团关系也更紧密；普通成员没有强制的活动要求，仅在每学期社团统计人数时计入。加入社团的数量没有限制，任何社团面向全校发布的活动，感兴趣都可以报名参加——但报名后如遇临时有事无法参加，最好提前告知主办方。部分社团（尤其是体育类）还会代表复旦参加校外比赛。

关注公众号「复旦大学学生社团」可获取更多资讯。

## 百团大战

每学期开学初，各社团会在校内摆摊招新，摊位上有各类活动体验和小礼物，具体地图会在活动开始前两天于公众号发布。

## 社团招新

招新分为秋季招新和春季招新，均在开学初进行，部分社团可能没有春季招新。招新通知请关注对应社团的公众号与群聊。

## 社团清单

<LinkList :links="$frontmatter.clubListLinks" />

## 搜索索引

- FDCraft：复旦大学基岩社
- FDUCSLG：开放原子开源社团
- PCS服务队：拯救全校师生的生产力危机
- 复旦社团清单：按 tag 检索全校社团，文档开放编辑
