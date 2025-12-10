---
links:
  - text: 复旦 CS 相关 Lab
    link: https://fudan-cs-labs.vercel.app/
    icon: https://fduguidebook.com/icons/computer-chip.svg
    desc: 复旦 CS 相关实验室导航
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 科研资源

<LinkList :links="$frontmatter.links" />
