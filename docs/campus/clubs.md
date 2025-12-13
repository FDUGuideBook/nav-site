---
prev:
  text: 校内服务
  link: /campus
next:
  text: 学习资料
  link: /study
links:
  - text: 复旦基岩社
    link: https://fdcraft.github.io/
    icon: https://fduguidebook.com/icons/MINECRAFT.jpg
    desc: 复旦大学 Minecraft 爱好者聚集地
  - text: FDUCSLG
    link: https://github.com/FDUCSLG
    icon: https://fduguidebook.com/icons/FDUCSLG.png
    desc: 一个复旦大学学生驱动的计算机技术社区
  - text: PCService 志愿者服务队
    link: https://fdupcs.top/
    icon: https://fduguidebook.com/icons/PCService.png
    desc: 拯救全校师生的生产力危机
  - text: FudanCYCRoutes
    link: https://kyre.gitbook.io/fudancycroutes
    icon: https://fduguidebook.com/icons/cycle.jpg
    desc: 复旦大学自行车协会路线库project
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 社团与社区

<LinkList :links="$frontmatter.links" />


