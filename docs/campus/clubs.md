---
prev:
  text: 校内服务
  link: /campus
next:
  text: 学习资料
  link: /study
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
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 社团组织

---

<LinkList :links="$frontmatter.links" />
