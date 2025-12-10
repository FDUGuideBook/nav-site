---
links:
  - text: 复旦基岩社
    link: https://fdcraft.github.io/
    icon: https://fduguidebook.com/icons/MINECRAFT.jpg
    desc: 复旦大学 Minecraft 爱好者聚集地
  - text: FDUCSLG
    link: https://github.com/FDUCSLG
    icon: https://fduguidebook.com/icons/FDUCSLG.png
    desc: 一个复旦大学学生驱动的计算机技术社区
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 社团与社区

<LinkList :links="$frontmatter.links" />
