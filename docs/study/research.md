---
prev:
  text: 学习资料
  link: /study
next: false
links:
  - text: Fudan CS Labs
    link: https://fudan-cs-labs.vercel.app/
    icon: https://fduguidebook.com/icons/fudan-cs-labs.svg
    desc: 复旦 CS 相关实验室导航
  - text: 3108青年创新平台
    link: https://3108.fudan.edu.cn/index
    icon: https://fduguidebook.com/icons/3108.png
    desc: 学术科研信息汇总
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 科研资源

---

<LinkList :links="$frontmatter.links" />
